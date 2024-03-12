import { Icon, Text } from "react-native-paper";
import { WorkoutContext, DistanceContext } from "./Contexts";
import { useContext } from "react";
import { FlatList, View } from "react-native";
import Style from "../styles/Style";

export default function WorkoutsView() {
    const { workout } = useContext(WorkoutContext);
    const { distance } = useContext(DistanceContext);

    const calculateTotalDistance = (activityType) => {
        return workout
            .filter(workout => workout.value === activityType)
            .reduce((total, workout) => total + parseFloat(workout.distance1), 0);
    }


    const totalSkateboardingDistance = calculateTotalDistance("skateboarding");
    const totalHikingDistance = calculateTotalDistance("hiking");
    const totalSleddingDistance = calculateTotalDistance("sledding");


    const overallTotalDistance = totalSkateboardingDistance + totalHikingDistance + totalSleddingDistance;

    return (//To get a value for DistanceContext you have to press the button once in settings
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>Your workouts:</Text>
            <View style={Style.totView}>
                <Text style={Style.totText}><Icon color={'green'} source='skateboarding' size={24} />{totalSkateboardingDistance}{distance}</Text>
                <Text style={Style.totText}><Icon color={'green'} source='hiking' size={24} />: {totalHikingDistance}{distance}</Text>
                <Text style={Style.totText}><Icon color={'green'} source='sledding' size={24} />: {totalSleddingDistance}{distance}</Text>
            </View>
            <Text style={Style.itemText}>Overall Total Distance: {overallTotalDistance}{distance}</Text>
            <FlatList
                data={workout}
                renderItem={({ item }) => <Item workout={item} />}
            />
        </View>
    );//To get a value for DistanceContext you have to press the button once in settings
}

function Item({ workout }) {
    const { distance } = useContext(DistanceContext);
    return (

        <View style={Style.itemView}>
            <Text style={Style.itemText}>On {workout.date2}</Text>
            <Text style={Style.itemText}>Your workout is: {workout.value}<Icon color={'green'} source={workout.value} size={24} /> </Text>
            <Text style={Style.itemText}>{workout.distance1}{distance}</Text>
            <Text style={Style.itemText}>{workout.duration1}min</Text>
        </View>
    );
}