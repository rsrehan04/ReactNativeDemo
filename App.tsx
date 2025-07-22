/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { CounterState } from './src/store';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: CounterState)=> state.count);

  return (
    <View>
      <Text>Hello React Native World!</Text>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch({ type: 'INCREMENT' })}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: 'DECREMENT' })}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
