import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '@components';

export type LoginScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 50}}>Login Scren</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={{marginBottom: 50}}>
        <Text>Go to Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeBottomTab')}
        style={{marginBottom: 50}}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
