import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Host } from 'react-native-portalize';
import { isIos } from 'utilities/helper';
import PlayGameScreen from 'feature/playGame/PlayGameScreen';
import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../config/routes';
import navigationConfigs from '../config/options';
import MainTabContainer from './TabScenes';

const MainStack = createStackNavigator();

const AppStack = () => (
    <Host>
        <MainStack.Navigator keyboardHandlingEnabled={isIos} headerMode={'none'} screenOptions={navigationConfigs}>
            <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.PLAY} component={PlayGameScreen} />
            <MainStack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
        </MainStack.Navigator>
    </Host>
);

const Navigation: React.FunctionComponent = () => {
    return <AppStack />;
};

export default Navigation;
