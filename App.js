import { useState } from 'react';
import { WorkoutContext, DistanceContext } from './components/Contexts';
import { Icon, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddSettings from './components/Settings';
import AddWorkouts from './components/AddWorkouts';
import WorkoutsView from './components/WorkoutsView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style, { MyTheme } from './styles/Style';

export default function App() {//To get a value for DistanceContext you have to press the button once in settings

  const [distance, setDistance] = useState([]);
  const [workout, setworkout] = useState([]);

  console.log(workout);

  return (
    <DistanceContext.Provider value={{ distance, setDistance }}>
      <WorkoutContext.Provider value={{ workout, setworkout }}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </WorkoutContext.Provider>
    </DistanceContext.Provider>

  );
}//To get a value for DistanceContext you have to press the button once in settings

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition='top'
        style={Style.container}
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: MyTheme.colors.primary,
          tabBarStyle: { backgroundColor: MyTheme.colors.surfaceVariant }
        }}
      >
        <Tab.Screen
          name='settings'
          options={{ title: 'Settings', tabBarIcon: ({ color }) => <Icon color={color} source='nut' size={24} /> }}
          component={AddSettings}
        />
        <Tab.Screen
          name='addworkout'
          options={{ title: 'Add workout', tabBarIcon: ({ color }) => <Icon color={color} source='weight-lifter' size={24} /> }}
          component={AddWorkouts}
        />
        <Tab.Screen
          name='workouts'
          options={{ title: 'Workouts', tabBarIcon: ({ color }) => <Icon color={color} source='clipboard-list' size={24} /> }}
          component={WorkoutsView}
        />


      </Tab.Navigator>

    </NavigationContainer>
  )
}