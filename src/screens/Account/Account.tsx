import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '@components';
import {HomeBottomTabParamList} from 'src/components/Navigation/HomeBottomTabNavigation';

export type AccountScreenNavigationProps = NativeStackNavigationProp<
  HomeBottomTabParamList,
  'Account'
>;

export const AccountScreen = () => {
  const navigation = useNavigation<AccountScreenNavigationProps>();

  return (
    <View>
      <Text style={{fontSize: 20}}>Account screen</Text>
    </View>
  );
};
