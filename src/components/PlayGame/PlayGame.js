import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class PlayGame extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <Text>This is a PlayGame screen.</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default PlayGame;
