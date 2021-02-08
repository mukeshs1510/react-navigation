import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookmarkScreen from './screens/BookmarkScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
