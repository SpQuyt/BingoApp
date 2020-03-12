import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import TableStrategyEmpty from 'components/Common/Table/TableStrategyEmpty';
import { resetTable, goBackCell, randomTable } from 'datalayers/actions/table.action';
import { TABLE_SIZE } from 'constants/sizes';
import styles from './styles';

class CreateTable extends Component {
  onGoBack = () => {
    const { goBackCell } = this.props;
    goBackCell();
  }

  onResetTable = () => {
    const { resetTable } = this.props;
    resetTable();
  }

  onRandom = () => {
    const { randomTable } = this.props;
    randomTable();
  }

  render() {
    const { tableArray } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.screen}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onResetTable} style={styles.button}>
              <Text>Reset All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onRandom} style={styles.button}>
              <Text>Random Table</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onGoBack} style={styles.button}>
              <Text>Back 1 Cell</Text>
            </TouchableOpacity>
          </View>
          <TableStrategyEmpty tableSize={TABLE_SIZE} data={tableArray} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  tableArray: state.table.tableArray,
  currentNumberToFill: state.table.currentNumberToFill,
});

const mapDispatchToProps = {
  resetTable,
  goBackCell,
  randomTable,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);
