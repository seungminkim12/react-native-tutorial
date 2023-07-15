import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  Linking,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

function App(): JSX.Element {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 44, item: 'Item 9'},
    {key: 68, item: 'Item 27'},
    {key: 0, item: 'Item 78'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 69, item: 'Item 69'}]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      horizontal={false}
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }>
      {Items.map(item => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 150,
    height: 60,
  },
});

export default App;
