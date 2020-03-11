import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { TABLE_WIDTH } from 'src/constants/sizes';
import CellStrategyNormal from 'src/components/Common/Table/Cell/CellStrategyNormal';
import styles from './styles';

class TableStrategyNormal extends Component {
  render() {
    const { tableSize, data } = this.props;

    // That table has data already fulfilled inside
    return (
      <View style={styles.table}>
        {data.map((row, rowNumber) => (
          <View style={styles.row}>
            {row.map((col, colNumber) => (
              <CellStrategyNormal
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

export default TableStrategyNormal;
