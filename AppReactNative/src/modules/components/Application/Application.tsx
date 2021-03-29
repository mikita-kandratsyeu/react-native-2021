import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NetInfo from '@react-native-community/netinfo';
import {
  Login,
  Registration,
  Main,
  ProductDetails,
  MockComponent,
  CustomDrawer,
  ModalWindow,
} from '..';
import { getUserDataSelector } from '../../../selectors';
import {
  StackRouters,
  DrawerRouters,
  errorInternetConnection,
  defaultLoginTitle,
} from '../../../constans';
import { setUserData } from '../../../actions';

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
  const dispatch = useDispatch();

  const user = useSelector(getUserDataSelector);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setIsModalVisible(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
      <ModalWindow
        modalType="warning"
        description={errorInternetConnection}
        buttonTitle={defaultLoginTitle}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        onPress={() => dispatch(setUserData('', ''))}
        isBackButtonBlock
      />
    </>
  );
};
