import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  Linking,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [name, setName] = React.useState('ksm');
  const [session, setSession] = React.useState({number: 6, title: 'state'});
  const [current, setCurrent] = React.useState(true);

  const onClickHandler = () => {
    setName('Seungmin Kim');
    setSession({number: 7, title: 'style'});
    setCurrent(false);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1.5,
  },
  footer: {
    flex: 5,
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
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
