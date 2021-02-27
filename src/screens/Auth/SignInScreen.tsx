import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/types/navigation';
import { signIn } from 'src/api/firebase';
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
      <Text>Signin Page</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize='none'
        autoCompleteType='email'
        keyboardType='email-address'
        textContentType='emailAddress'
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize='none'
        autoCompleteType='password'
        secureTextEntry={true}
        textContentType='password'
        style={styles.textInput}
      />
      <Button title='ログイン' onPress={handlePress} />
      <Button
        title='Go to SingUp Page'
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
});

export default SignInScreen;
