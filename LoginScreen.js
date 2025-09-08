import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={() => { login(email); navigation.replace('Home'); }} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.link}>Register Now</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, padding:24, justifyContent:'center' },
  title:{ fontSize:24, fontWeight:'900', marginBottom:12 },
  link:{ marginTop:14, textAlign:'center', color:'#E75480', fontWeight:'700' }
});