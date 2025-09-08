import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}><Text style={styles.logoTxt}>GlowCart</Text></View>
      <Text style={styles.tag}>Your Beauty, Delivered</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff', padding:24 },
  logo:{ width:140, height:140, borderRadius:70, backgroundColor:'#FFE4EE', alignItems:'center', justifyContent:'center', marginBottom:18 },
  logoTxt:{ fontSize:22, fontWeight:'900', color:'#E75480' },
  tag:{ fontSize:16, marginBottom:24 }
});