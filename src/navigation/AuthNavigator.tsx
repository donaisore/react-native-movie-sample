import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from 'src/screens/Auth/SignInScreen';
import SignUpScreen from 'src/screens/Auth/SignUpScreen';
import { AuthStackParamList } from 'src/types/navigation';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component={SignInScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
