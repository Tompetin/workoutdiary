import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export default Style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
    },
    navview: {
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        margin: 5
    },
    formfield: {
        margin: 5,
        padding: 2
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 2,
    },
    itemView: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 5,
        margin: 2
    },
    divider: {
        marginTop: 5,
        marginBottom: 59,
        backgroundColor: 'black'
    },
    datepicker: {
        fontSize: 24,
        padding: 10,
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        textAlign: "center",
        paddingTop: 20,
    },
    button: {
        margin: 4,
        borderWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        textTransform: 'capitalize'
    },
    selectedButton: {
        backgroundColor: "lightgreen"
    },
    buttonrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    container1: {
        justifyContent: 'center',
        padding: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    result: {
        marginTop: 10,
        fontSize: 16,
        color: 'green'
    },
    totView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    totText: {
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 2,
        backgroundColor: 'cyan'
    },
    radiobutton: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'lightgreen'
    }
})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'green',
        surfaceVariant: 'lightblue',
        onSurface: 'green'
    }
}