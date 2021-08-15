import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HomeStackParamList, RootStackParamList} from '@components';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeBottomTab'
> &
  NativeStackNavigationProp<HomeStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{marginBottom: 40}}>
        <Text>Goto Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <Text>Goto ProductDetail</Text>
      </TouchableOpacity>
    </View>
  );
};
