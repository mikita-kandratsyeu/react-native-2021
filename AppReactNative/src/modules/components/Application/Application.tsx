/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { Login, Registration, Main, ProductDetails, MockComponent } from '..';
import { getUserDataSelector } from '../../../selectors';
import { defaultStyles } from '../../../constans';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Application: React.FC = () => {
  const user = useSelector(getUserDataSelector);

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(!!user.token);
  }, [user, user.token]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MockComponent} />
        <Drawer.Screen name="Notifications" component={MockComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   {/* <Drawer.Navigator initialRouteName="Main"> */}
    //   {/*  <Drawer.Screen name="Main" component={Main} /> */}
    //   {/* </Drawer.Navigator> */}
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: defaultStyles.colors.blue,
    //       },
    //       headerTintColor: defaultStyles.colors.white,
    //     }}>
    //     {isLogin ? (
    //       <>
    //         {/* <Stack.Screen name="Main" component={drawerNavigation} /> */}
    //         <Stack.Screen name="ProductDetails" component={ProductDetails} />
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen
    //           name="Login"
    //           component={Login}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen
    //           name="Registration"
    //           component={Registration}
    //           options={{ headerShown: false }}
    //         />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
