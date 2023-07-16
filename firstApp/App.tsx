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
  TextInput,
} from 'react-native';

function App(): JSX.Element {
  const [Name, setName] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name :</Text>
      <TextInput
        // multiline
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
        keyboardType={'default'}
        maxLength={10}
        editable={true}
        secureTextEntry={true}
      />
      <Text style={styles.text}>your name is : {Name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
