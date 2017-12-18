import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const x = new Animated.Value(1);
const y = new Animated.divide(500, x);

export default class App extends Component<{}> {
  state = {
    ballPosX: x,
    ballPosY: y,
  }

  componentDidMount() {
    Animated.timing(this.state.ballPosX, {
      toValue: 250,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {
          marginTop: this.state.ballPosX,
          marginLeft: this.state.ballPosY,
        }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  ball: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F00',
  },
});
