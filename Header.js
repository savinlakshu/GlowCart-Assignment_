import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title, rightLabel, onRightPress }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightLabel ? (
        <TouchableOpacity onPress={onRightPress}><Text style={styles.right}>{rightLabel}</Text></TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:16 },
  title: { fontSize: 22, fontWeight: '800' },
  right: { color: '#E75480', fontWeight: '700' }
});