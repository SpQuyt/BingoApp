import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'src/utils/NavigationWithoutProps';
import TableStrategyEmpty from 'src/components/Common/Table/TableStrategyEmpty';
import { TABLE_SIZE } from 'src/constants/sizes';
import styles from './styles';

// const data = [
//   [5, 1, 2, 3, 6],
//   [7, 1, 25, 3, 9],
//   [4, 1, 22, 9, 4],
//   [3, 1, 15, 3, 0],
//   [0, 1, 7, 2, 4],
// ];

class CreateTable extends Component {
  render() {
    const { tableArray } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.screen}>
          <TableStrategyEmpty tableSize={TABLE_SIZE} data={tableArray} />
          <Text>This is a CreateTable screen.</Text>
          <TouchableOpacity onPress={() => NavigationWithoutProps.navigate('PlayGame')}>
            <Text>Go to PlayGame</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  tableArray: state.table.tableArray,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);
