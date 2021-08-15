import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AccountScreen, HomeScreen} from '@pages';

export type RootStackParamList = {
  Home: undefined;
  Account: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RouterNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Account" component={AccountScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
