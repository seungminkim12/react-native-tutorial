import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

type testProps = {
  onPressFunction(): void,
  title: string,
  color: string,
  style: {},
};

const MashButton = (props: testProps) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      // onLongPress={onPressHandler}
      // delayLongPress={1000}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      android_ripple={{color: '#00f'}}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#dddddd' : props.color,
        },
        styles.button,
        {...props.style},
      ]}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});

export default MashButton;
