import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';

import Homepage from './../screens/homepage';
import Login from './../screens/login';
import Register from './../screens/register';
import ForgotPassword from './../screens/forgotpassword';
import ConfirmPassword from './../screens/confirmpassword';
import ChangeYourPassword from './../screens/changeyourpassword';

import ScreenLevels from './../screens/screenlevels';
import ScreenControl from './../screens/screencontrol';
import ScreenUpdates from './../screens/screenupdates';
import ScreenProfile from './../screens/screenprofile';

import EditProfile from './../screens/editprofile';


const Stack = createStackNavigator();

const Rootstack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen name="Homepage" component={Homepage} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Register" component={Register} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ChangeYourPassword" component={ChangeYourPassword} options={{headerTitleAlign : 'center'}}/>

      <Stack.Screen name="ScreenLevels" component={ScreenLevels} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ScreenControl" component={ScreenControl} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ScreenUpdates" component={ScreenUpdates} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ScreenProfile" component={ScreenProfile} options={{headerTitleAlign : 'center'}}/>

      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerTitleAlign : 'center'}}/>

     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootstack;