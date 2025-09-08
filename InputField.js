import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputField({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <View style={styles.wrap}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: { marginVertical: 8 },
  input: { backgroundColor: '#f5f5f5', padding: 12, borderRadius: 12, fontSize: 15 }
});