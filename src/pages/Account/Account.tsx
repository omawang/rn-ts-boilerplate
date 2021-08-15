import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '@components';

export type AccountScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Account'
>;

export const AccountScreen = () => {
  const navigation = useNavigation<AccountScreenNavigationProps>();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Ho to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
