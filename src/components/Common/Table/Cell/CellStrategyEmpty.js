import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { addNumber, resetTable } from 'datalayers/actions/table.action';
import styles from './styles';

class CellStrategyEmpty extends Component {
  onButtonPress = () => {
    const {
      rowNumber, colNumber, addNumber,
    } = this.props;
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

const mapStateToProps = (state) => ({
  currentNumberToFill: state.table.currentNumberToFill,
});

const mapDispatchToProps = {
  addNumber,
  resetTable,
};

export default connect(mapStateToProps, mapDispatchToProps)(CellStrategyEmpty);
