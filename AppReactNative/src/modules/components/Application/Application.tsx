import React from 'react';
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
import { StackRouters, DrawerRouters } from '../../../constans';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerRoutes = () => (
  <Drawer.Navigator
    initialRouteName={StackRouters.main}
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name={StackRouters.main} component={Main} />
    <Drawer.Screen name={DrawerRouters.profile} component={MockComponent} />
    <Drawer.Screen name={DrawerRouters.wishList} component={MockComponent} />
    <Drawer.Screen name={DrawerRouters.cart} component={MockComponent} />
    <Drawer.Screen name={DrawerRouters.orders} component={MockComponent} />
  </Drawer.Navigator>
);

export const Application: React.FC = () => {
  const user = useSelector(getUserDataSelector);

  // TODO: Feature #0: Implement a new Header with using ReactNavigate
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user.token ? (
          <>
            <Stack.Screen name={StackRouters.main} component={drawerRoutes} />
            <Stack.Screen
              name={StackRouters.productDetails}
              component={ProductDetails}
            />
            <Stack.Screen
              name={StackRouters.mockComponent}
              component={MockComponent}
            />
          </>
        ) : (
          <>
            <Stack.Screen name={StackRouters.login} component={Login} />
            <Stack.Screen
              name={StackRouters.registration}
              component={Registration}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
