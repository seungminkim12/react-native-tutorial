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
  Modal,
  Image,
} from 'react-native';
import MashButton from './CustomButton';
import Header from './Header';

function App(): JSX.Element {
  const [Name, setName] = useState('');
  const [Submitted, setSubmitted] = useState(false);
  const [showWarning, setshowWarning] = useState(false);

  const onPressHandler = () => {
    if (Name.length > 3) {
      setSubmitted(!Submitted);
    } else {
      setshowWarning(true);
    }
  };
  return (
    <View style={styles.body}>
      <Header />
      <Modal
        visible={showWarning}
        onRequestClose={() => setshowWarning(false)}
        transparent
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING !</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The Name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              onPress={() => setshowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      <MashButton
        onPressFunction={onPressHandler}
        title={Submitted ? 'Clear' : 'Submit'}
        color={'#00ff00'}
        style={{margin: 10}}
      />
      <MashButton
        onPressFunction={onPressHandler}
        title={Submitted ? 'Clear' : 'Submit'}
        color={'#ff00ff'}
        style={{margin: 10}}
      />
      {Submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>you are registered as {Name}</Text>
          <Image
            style={styles.image}
            source={require('./assets/done.png')}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={require('./assets/error.png')}
          resizeMode="stretch"
          blurRadius={5}
        />
      )}
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
    textAlign: 'center',
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
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
