
import React, { useContext, useState } from "react";
import { Text, RadioButton, Button } from "react-native-paper";
import { View } from "react-native";
import Style from "../styles/Style";
import { DistanceContext } from "./Contexts";

export default function Settings() {
    const [radioval, setRadioval] = useState('km');
    const radioStyle = { flexDirection: 'row', alignItems: 'center' };
    const { setDistance } = useContext(DistanceContext);
    const { distance } = useContext(DistanceContext);


    function changeDistance() {
        setDistance(radioval);
        console.log('Distance changed from: ' + distance);
        console.log('Value is now: ' + radioval);
    }

    return (
        <View style={Style.radiobutton}>
            <Text variant="headlineLarge" style={Style.header}>Choose a preferred unit of measurement.</Text>
            <RadioButton.Group onValueChange={newValue => setRadioval(newValue)} value={radioval}>
                <View style={radioStyle}>
                    <RadioButton value='km' />
                    <Text>KM</Text>
                </View>
                <View style={radioStyle}>
                    <RadioButton value='mile' />
                    <Text>MILE</Text>
                </View>
            </RadioButton.Group>
            <Button style={Style.buttonStyle} onPress={() => changeDistance(radioval)}>Change between miles and kilometers</Button>
        </View>
    );//To get a value for Distance context you have to press the button once
}