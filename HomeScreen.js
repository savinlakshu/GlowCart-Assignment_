import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetchProducts().then((items) => {
      const filtered = items.filter(p => ['fragrances','skincare'].includes(p.category));
      setAll(filtered);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const list = all.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" /></View>;

  return (
    <View style={{ flex:1 }}>
      <Header title="GlowCart" rightLabel="Profile" onRightPress={() => navigation.navigate('Profile')} />
      <View style={styles.searchWrap}>
        <TextInput placeholder="Search" value={q} onChangeText={setQ} style={styles.search} />
      </View>
      {list.length === 0 ? <Text style={styles.empty}>No products</Text> : null}
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={{ padding:12 }}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchWrap:{ paddingHorizontal:16, marginBottom:8 },
  search:{ backgroundColor:'#f5f5f5', padding:12, borderRadius:12 },
  center:{ flex:1, alignItems:'center', justifyContent:'center' },
  empty:{ textAlign:'center', marginTop:10 }
});