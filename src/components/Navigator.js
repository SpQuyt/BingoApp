import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateTable from 'components/CreateTable/CreateTable';
import PlayGame from 'components/PlayGame/PlayGame';

const Stack = createAppContainer(
  createStackNavigator(
    {
      CreateTable: {
        screen: CreateTable,
      },
      PlayGame: {
        screen: PlayGame,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

export default Stack;
