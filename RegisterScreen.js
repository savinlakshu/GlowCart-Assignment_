import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <InputField placeholder="Full Name" value={name} onChangeText={setName} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <InputField placeholder="Confirm Password" value={confirm} onChangeText={setConfirm} secureTextEntry />
      <Button title="Create Account" onPress={() => navigation.replace('Login')} />
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.link}>Login</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, padding:24, justifyContent:'center' },
  title:{ fontSize:24, fontWeight:'900', marginBottom:12 },
  link:{ marginTop:14, textAlign:'center', color:'#E75480', fontWeight:'700' }
});