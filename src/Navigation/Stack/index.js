import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Stories from '../../Screens/Stories/Stories';
import Comments from '../../Screens/Comments/Comments';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="stories" component={Stories} />
      <Stack.Screen name="comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default RootStack;
