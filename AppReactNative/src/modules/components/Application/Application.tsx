import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import {
  LoginScreen,
  MainScreen,
  ProductDetailsScreen,
  RegistrationScreen,
} from '../../../constans';
import { Login, Registration, Main, ProductDetails } from '..';
import { getUserDataSelector } from '../../../selectors';

const Stack = createStackNavigator();

export const Application: React.FC = () => {
  const user = useSelector(getUserDataSelector);

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(!!user.token);
  }, [user, user.token]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name={MainScreen} component={Main} />
            <Stack.Screen
              name={ProductDetailsScreen}
              component={ProductDetails}
            />
          </>
        ) : (
          <>
            <Stack.Screen name={LoginScreen} component={Login} />
            <Stack.Screen name={RegistrationScreen} component={Registration} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
