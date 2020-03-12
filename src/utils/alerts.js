import store from 'datalayers/stores';
import { Alert } from 'react-native';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { resetTable } from 'datalayers/actions/table.action';

const alertTableFilled = () => {
  Alert.alert(
    'Message',
    'Are you sure to continue? Press Cancel to reset the table. Press OK to play game.',
    [
      {
        text: 'Cancel',
        onPress: () => store.dispatch(resetTable()),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => NavigationWithoutProps.navigate('PlayGame') },
    ],
    { cancelable: false },
  );
};

const AlertHanlder = {
  alertTableFilled,
};

export default AlertHanlder;
