import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getValueSelector } from '../../../selectors';
import { changeValue } from '../../../actions';

export const Wrapper: React.FC = () => {
  const dispatch = useDispatch();

  const valueState = useSelector(getValueSelector);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  counter: {
    fontSize: 36,
    fontWeight: '700',
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
