import * as React from 'react'
import { Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SafeAreaView from 'react-native-safe-area-view'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Main from './components/Main'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
    <FocusAwareStatusBar barStyle="light-content" backgroundColor="#00bfff" />
    <Button
      title="Click here to see stupendous magic cards!"
      onPress={() => navigation.navigate('CardScreen')}
      color="#ff4500"
    />
  </SafeAreaView> 
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerTintColor: '#fff',
          headerStyle: {
          backgroundColor: '#00bfff'
      }
        }}
      />
      <Stack.Screen
        name="CardScreen"
        component={Main}
        options={{
          title: 'Magic Cards',
          headerTintColor: '#fff',
          headerStyle: {
          backgroundColor: '#ff4500'
      }
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
});