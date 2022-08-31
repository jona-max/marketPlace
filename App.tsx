/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Image} from 'react-native';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

import Back from './src/assets/Images/back.png';

const Stacks = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator initialRouteName="Second">
        {/* <Stacks.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Carbon Marketplace',
            headerShown: true,
          }}
        /> */}
        <Stacks.Screen
          name="Second"
          component={SecondScreen}
          options={({navigation}) => ({
            headerShown: false,
            title: 'Carbon Marketplace',
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate('First')}>
                <Image
                  source={Back}
                  style={{height: 20, width: 20, marginRight: 5}}
                />
              </Pressable>
            ),
          })}
        />
        <Stacks.Screen
          name="First"
          component={FirstScreen}
          options={({navigation}) => ({
            headerShown: false,
            title: 'Carbon Quests',
            headerLeft: () => (
              <Pressable onPress={() => navigation.navigate('Second')}>
                <Image
                  source={Back}
                  style={{height: 20, width: 20, marginRight: 5}}
                />
              </Pressable>
            ),
          })}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default App;
