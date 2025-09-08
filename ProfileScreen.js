import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  return (
    <View style={{ flex:1 }}>
      <Header title="Profile" onRightPress={() => navigation.goBack()} />
      <View style={styles.card}>
        <Text style={styles.name}>{user?.name || 'Guest'}</Text>
        <Text>{user?.email || 'guest@example.com'}</Text>
      </View>
      <View style={styles.list}>
        {['Address','Order History','Language','Notifications','Contact Us','Get Help','Privacy Policy','T&C','Logout'].map((x) => (
          <Text key={x} style={styles.item}>• {x}</Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{ backgroundColor:'#fff', margin:16, padding:16, borderRadius:12, elevation:1 },
  name:{ fontWeight:'900', fontSize:18, marginBottom:4 },
  list:{ marginHorizontal:16 },
  item:{ paddingVertical:8, fontSize:15 }
});