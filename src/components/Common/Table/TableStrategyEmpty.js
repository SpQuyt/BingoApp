import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { TABLE_WIDTH } from 'constants/sizes';
import CellStrategyEmpty from 'components/Common/Table/Cell/CellStrategyEmpty';
import styles from './styles';

class TableStrategyEmpty extends Component {
  render() {
    const { tableSize, data } = this.props;

    // The data inside have at least 1 "null"
    return (
      <View style={styles.table}>
        {data.map((row, rowNumber) => (
          <View style={styles.row}>
            {row.map((col, colNumber) => (
              <CellStrategyEmpty
                rowNumber={rowNumber}
                colNumber={colNumber}
                width={TABLE_WIDTH / tableSize}
                value={data[rowNumber][colNumber]}
              />
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export default TableStrategyEmpty;
