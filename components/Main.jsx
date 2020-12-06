import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator, Image, StyleSheet, ScrollView } from 'react-native'

const Main = () => {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(() => {
  fetch('https://api.magicthegathering.io/v1/cards')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

return (
  <ScrollView style={{ paddingHorizontal: 24, marginBottom: 10, marginTop: 10 }}>
    {isLoading ? <ActivityIndicator/> : (
      <>
      <FlatList
        data={data.cards.slice(1,2)}
        keyExtractor={item => item}
        renderItem={({ item }) => {
        return (
          <Image
          source={{
            uri: data.cards[5].imageUrl,
          }}
          style={styles.image}
        />
        )}
      }
      />
       <Text>Card name: {data.cards[5].name}</Text>
       <Text>Card text: {data.cards[5].text}</Text>
       <Text>Card type: {data.cards[5].type}</Text>
       <Text>Card rarity: {data.cards[5].rarity}</Text>

       <Image
          source={{
            uri: data.cards[35].imageUrl,
          }}
          style={styles.image}
        />
        <Text>Card name: {data.cards[35].name}</Text>
        <Text>Card text: {data.cards[35].text}</Text>
        <Text>Card type: {data.cards[35].type}</Text>
        <Text>Card rarity: {data.cards[35].rarity}</Text>

       <Image
          source={{
            uri: data.cards[40].imageUrl,
          }}
          style={styles.image}
        />
        <Text>Card name: {data.cards[40].name}</Text>
        <Text>Card text: {data.cards[40].text}</Text>
        <Text>Card type: {data.cards[40].type}</Text>
        <Text>Card rarity: {data.cards[40].rarity}</Text>

      <Image
          source={{
            uri: data.cards[99].imageUrl,
          }}
          style={styles.image}
        />
        <Text>Card name: {data.cards[99].name}</Text>
        <Text>Card text: {data.cards[99].text}</Text>
        <Text>Card type: {data.cards[99].type}</Text>
        <Text>Card rarity: {data.cards[99].rarity}</Text>

      <Image
        source={{
          uri: data.cards[23].imageUrl,
        }}
        style={styles.image}
      />
        <Text>Card name: {data.cards[23].name}</Text>
        <Text>Card text: {data.cards[23].text}</Text>
        <Text>Card type: {data.cards[23].type}</Text>
        <Text>Card rarity: {data.cards[23].rarity}</Text>
    </>
    )}
  </ScrollView>
);
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 250, 
    resizeMode: 'contain', 
    marginBottom: 20,
    marginTop: 20
  },
 });

export default Main;