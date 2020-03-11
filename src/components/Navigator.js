import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateTable from 'src/components/CreateTable/CreateTable';
import PlayGame from 'src/components/PlayGame/PlayGame';

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
