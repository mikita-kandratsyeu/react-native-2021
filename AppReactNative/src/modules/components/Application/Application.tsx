import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NetInfo from '@react-native-community/netinfo';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Login,
  Registration,
  Main,
  ProductDetails,
  MockComponent,
  CustomDrawer,
  ModalWindow,
  OrdersList,
  Map,
  OrderDetails,
} from '..';
import { getUserDataSelector } from '../../../selectors';
import {
  StackRouters,
  DrawerRouters,
  errorInternetConnection,
  userToken,
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
    <Drawer.Screen name={DrawerRouters.orders} component={OrdersList} />
  </Drawer.Navigator>
);

export const Application: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserDataSelector);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isAccess, setIsAccess] = useState<boolean>(false);

  const checkAccessStatus = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const token = await AsyncStorage.getItem(userToken);

      if (credentials) {
        dispatch(
          setUserData(credentials.username, credentials.password, token || ''),
        );

        setIsAccess(true);
      } else {
        setIsAccess(false);
      }
    } catch (err) {
      console.error(err);

      setIsAccess(false);
    }
  };

  useEffect(() => {
    checkAccessStatus();

    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setIsModalVisible(true);
      } else {
        setIsModalVisible(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user.token) {
      setIsAccess(false);
    } else {
      setIsAccess(true);
    }
  }, [user.token]);

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
          {isAccess ? (
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
              <Stack.Screen
                name={StackRouters.orderDetails}
                component={OrderDetails}
              />
              <Stack.Screen name={StackRouters.mapView} component={Map} />
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
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        isBackButtonBlock
      />
    </>
  );
};
