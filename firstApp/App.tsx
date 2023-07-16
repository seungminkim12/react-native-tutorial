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
  FlatList,
  SectionList,
} from 'react-native';

function App(): JSX.Element {
  // const [TitleIdx, setTitleIdx] = useState(2);
  const [Items, setItems] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ];

  const onRefresh = () => {
    // setTitleIdx(TitleIdx + 1);
    setRefreshing(true);
    const add_TitleIdx = Items.length + 1;
    setItems([
      ...Items,
      {
        title: `Title ${add_TitleIdx}`,
        data: [`Item ${add_TitleIdx}-1`, `Item ${add_TitleIdx}-2`],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Items}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
    // <FlatList
    //   // numColumns={2}
    //   // inverted
    //   // horizontal
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
    // <ScrollView
    //   horizontal={false}
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }>
    //   {Items.map(item => {
    //     return (
    //       <View style={styles.item} key={item.key}>
    //         <Text style={styles.text}>{item.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
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
