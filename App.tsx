import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form from './src/components/Form';
import Summary from './src/components/Summary';
import {RootStackParamList} from './src/types';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Form">
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Summary" component={Summary} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
