import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/types/navigation';
import { signIn } from 'src/api/authentication/firebase';
import { UserContext } from 'src/contexts/userContext';

type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'SignIn'>;
};

const SignInScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handlePress = async () => {
    const user = await signIn({ email, password });
    setUser(user);
  };

  return (
    <SafeAreaView>
      <TextInput
        label='email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize='none'
        autoCompleteType='email'
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <TextInput
        label='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize='none'
        autoCompleteType='password'
        secureTextEntry={true}
        textContentType='password'
      />
      <Button onPress={handlePress}>ログイン</Button>
      <Button onPress={() => navigation.navigate('SignUp')}>新規登録</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignInScreen;
