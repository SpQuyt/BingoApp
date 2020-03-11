import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { addNumber } from 'src/datalayers/actions/table.action';
import styles from './styles';

class CellStrategyEmpty extends Component {
  onButtonPress = () => {
    const { rowNumber, colNumber, addNumber } = this.props;
    addNumber(rowNumber, colNumber);
  }

  render() {
    const { value, width } = this.props;

    if (value == null) {
      return (
        <TouchableOpacity
          style={[styles.cellNormal, { width, height: width }]}
          onPress={this.onButtonPress}
        >
          <Text style={[styles.cellTextNormal, { fontSize: width * 0.6 }]}>{value}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={[styles.cellNormal, { width, height: width }]}
      >
        <Text style={[styles.cellTextNormal, { fontSize: width * 0.6 }]}>{value}</Text>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  addNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(CellStrategyEmpty);
