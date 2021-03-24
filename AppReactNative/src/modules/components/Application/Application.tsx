import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Login,
  Registration,
  Main,
  ProductDetails,
  MockComponent,
  CustomDrawer,
} from '..';
import { getUserDataSelector } from '../../../selectors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerRoutes = () => (
  <Drawer.Navigator
    initialRouteName="Main"
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Main" component={Main} />
    <Drawer.Screen name="Profile" component={MockComponent} />
    <Drawer.Screen name="WishList" component={MockComponent} />
    <Drawer.Screen name="Cart" component={MockComponent} />
    <Drawer.Screen name="Orders" component={MockComponent} />
  </Drawer.Navigator>
);

export const Application: React.FC = () => {
  const user = useSelector(getUserDataSelector);

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(!!user.token);
  }, [user, user.token]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLogin ? (
          <>
            <Stack.Screen name="Main" component={drawerRoutes} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="MockComponent" component={MockComponent} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
