
import { StyleSheet } from 'react-native';
import {
  COLOR_CELL_NORMAL, COLOR_TEXT_CELL_NORMAL,
  COLOR_CELL_PICKED, COLOR_TEXT_CELL_PICKED,
} from 'src/constants/colors';

const styles = StyleSheet.create({
  cellNormal: {
    borderWidth: 2,
    backgroundColor: COLOR_CELL_NORMAL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTextNormal: {
    fontSize: 15,
    color: COLOR_TEXT_CELL_NORMAL,
  },
  cellPicked: {
    borderWidth: 2,
    backgroundColor: COLOR_CELL_PICKED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTextPicked: {
    fontSize: 15,
    color: COLOR_TEXT_CELL_PICKED,
  },
});

export default styles;
