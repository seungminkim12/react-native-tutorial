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
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

function App(): JSX.Element {
  const [Name, setName] = useState('');
  const [Submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (Name.length > 3) {
      setSubmitted(!Submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters',
      //   [
      //     {
      //       text: 'Do not show again',
      //       onPress: () => console.warn('Do not show again Pressed'),
      //       style: 'destructive',
      //     },
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.warn('Cancel Pressed'),
      //       style: 'destructive',
      //     },
      //     {
      //       text: 'Ok',
      //       onPress: () => console.warn('Ok Pressed'),
      //       style: 'destructive',
      //     },
      //   ],
      //   {cancelable: true, onDismiss: () => console.warn('Alert dismissed')},
      // );
      // ToastAndroid.show(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG
      // );
      // ToastAndroid.showWithGravity(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.SHORT,
      //   ToastAndroid.TOP,
      // );
      ToastAndroid.showWithGravityAndOffset(
        'The name must be longer than 3 characters',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        0,
        0,
      );
    }
  };
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
        // secureTextEntry={true}
      />
      {/* <Button
        title={Submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        // disabled={Submitted}
        color="#00f"
      /> */}
      {/* <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}>
        <Text style={styles.text}>{Submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}
        underlayColor="#dddddd">
        <Text style={styles.text}>{Submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback onPress={onPressHandler} style={styles.button}>
        <View style={styles.button}>
          <Text style={styles.text}>{Submitted ? 'Clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback> */}

      {/* pressable longpress 쓸때, press 영역 키울때 유리 */}
      <Pressable
        onPress={onPressHandler}
        // onLongPress={onPressHandler}
        // delayLongPress={1000}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#dddddd' : '#00ff00',
          },
          styles.button,
        ]}>
        <View style={styles.button}>
          <Text style={styles.text}>{Submitted ? 'Clear' : 'Submit'}</Text>
        </View>
      </Pressable>
      {Submitted ? (
        <Text style={styles.text}>you are registered as {Name}</Text>
      ) : null}
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
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});

export default App;
