import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
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
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
