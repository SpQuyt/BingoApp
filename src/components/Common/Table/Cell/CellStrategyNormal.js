import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';

class CellStrategyNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPicked: false,
    };
  }

  onButtonPress = () => {
    const { rowNumber, colNumber } = this.props;
    this.setState({ isPicked: true });
    alert(`${rowNumber}, ${colNumber}`);
  }

  render() {
    const { isPicked } = this.state;
    const { value, width } = this.props;
    if (isPicked) {
      return (
        <View
          style={[styles.cellPicked, { width, height: width }]}
        >
          <Text style={[styles.cellTextPicked, { fontSize: width * 0.6 }]}>{value}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.cellNormal, { width, height: width }]}
        onPress={this.onButtonPress}
      >
        <Text style={[styles.cellTextNormal, { fontSize: width * 0.6 }]}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

export default CellStrategyNormal;
