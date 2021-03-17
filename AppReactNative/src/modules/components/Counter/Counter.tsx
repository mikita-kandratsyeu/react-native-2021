import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getValueSelector } from '../../../selectors';
import { changeValue } from '../../../actions';

import styles from './CounterStyles';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();

  const valueState: number = useSelector(getValueSelector);

  const [value, setValue] = useState<number>(0);

  const incrementHandler = () => {
    dispatch(changeValue(1));
  };

  const decrementHandler = () => {
    dispatch(changeValue(-1));
  };

  useEffect(() => {
    setValue(valueState);
  }, [valueState]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.counter}>{value}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Plus (+)" color="#ff5252" onPress={incrementHandler} />
        </View>
        <View>
          <Button title="Minus (-)" onPress={decrementHandler} />
        </View>
      </View>
    </View>
  );
};
