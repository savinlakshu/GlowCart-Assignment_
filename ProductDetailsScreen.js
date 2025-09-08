import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  return (
    <ScrollView style={{ flex:1 }} contentContainerStyle={{ padding:16 }}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Bag" onPress={() => {}} style={{ marginTop:12 }} />
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Highlights</Text>
        <Text>• Dimensions: standard</Text>
        <Text>• Warranty: 1 year</Text>
        <Text>• Shipping: 3–5 days</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Ratings & Reviews</Text>
        <Text>⭐ 4.5/5 "Loved the fragrance!"</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image:{ height:240, borderRadius:16, marginBottom:12 },
  title:{ fontSize:22, fontWeight:'900', marginBottom:6 },
  price:{ color:'#E75480', fontWeight:'900', marginTop:8, fontSize:18 },
  block:{ marginTop:16, backgroundColor:'#fff', padding:12, borderRadius:12, elevation:1 },
  blockTitle:{ fontWeight:'800', marginBottom:6 }
});