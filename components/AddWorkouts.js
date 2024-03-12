import React, { useContext, useState } from "react";
import { Button, Text, TextInput, Icon } from "react-native-paper";
import { WorkoutContext, DistanceContext } from "./Contexts";
import { Alert, Modal, Pressable, View } from "react-native";
import { Calendar } from 'react-native-calendars';
import Style from "../styles/Style";

export default function AddWorkouts() {
    const values = ["skateboarding", "hiking", "sledding"];
    const [value, setValue] = useState(values[0]);

    const { setworkout } = useContext(WorkoutContext);
    const { distance } = useContext(DistanceContext);
    const [distances, setDistance] = useState('');
    const [duration, setDuration] = useState('');



    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [date2, setDate2] = useState();

    function ButtonSelector({ values, selectedValue, selectionChanged }) {
        return (
            <View style={Style.buttonrow}>
                {values.map(value =>
                    <Pressable key={value} onPress={() => selectionChanged(value)}>
                        <Text style={[Style.button, value == selectedValue && Style.selectedButton]}>
                            {value} <Icon color={'green'} source={value} size={24} />
                        </Text>
                    </Pressable>
                )}
            </View>
        );
    }

    function dateSelected(day) {
        setVisible(false);
        setDate(day);
        setDate2(day.dateString);
        console.log(date);
    }

    function addMessage() {
        let distance1 = Number(distances);
        let duration1 = Number(duration);
        if (distances < 0 || duration < 0) {
            Alert.alert('Error', 'Distance and duration must be greater or equal to zero');
            setDistance('');
            setDuration('');
            return
        }
        setworkout(prev => [...prev, { distance1, duration1, date2, value }]);
        setDistance('');
        setDuration('');
    }

    return (//To get a value for DistanceContext you have to press the button once in settings
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>Add your workouts:</Text>
            <View>
                <View style={Style.container1}>
                    <Text style={Style.label}>Select one option:</Text>
                    <ButtonSelector values={values} selectedValue={value} selectionChanged={setValue} />
                    <Text style={Style.result}>You selected {value}</Text>
                </View>
                <TextInput keyboardType='number-pad' style={Style.formfield} label={'Distance ' + distance} value={distances} onChangeText={setDistance} />
                <TextInput keyboardType='number-pad' style={Style.formfield} label={'Duration min'} value={duration} onChangeText={setDuration} />
                <View>
                    <Modal visible={visible} transparent={true}>
                        <Calendar style={Style.datepicker} onDayPress={dateSelected} />
                    </Modal>
                    <Pressable onPress={() => setVisible(true)} >
                        <Text style={Style.datepicker}>{date ? date.dateString : 'Select date'}<Icon color={'green'} source='calendar' size={24} /></Text>
                    </Pressable>
                </View>
                <Button style={Style.formfield} mode="contained" onPress={addMessage}>Add workout</Button>
            </View>
        </View>
    );
}