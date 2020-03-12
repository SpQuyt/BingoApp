
import { StyleSheet } from 'react-native';
import { TABLE_WIDTH } from 'constants/sizes';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  screen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: TABLE_WIDTH * 0.1,
    width: TABLE_WIDTH,
  },
  button: {
    marginHorizontal: TABLE_WIDTH * 0.02,
    backgroundColor: '#e6e0d1',
    padding: TABLE_WIDTH * 0.02,
    borderRadius: TABLE_WIDTH * 0.02,
  },
});

export default styles;
