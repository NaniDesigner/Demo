import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems, createBottomTabNavigator} from 'react-navigation'


import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingScreen'
import PageScreen from './screens/PageScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerNavigator = (props) =>(
  <SafeAreaView style={{ flex:1 }}>
    <View style={{height: 150, backgroundColor: 'while', alignItems: 'center',
    justifyContent: 'center'}}>
    <Image source={require('./assets/splash.png')} style={{height: 120, width: 120, borderRadius: 60 }}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Pages: PageScreen
},{
  contentComponent: CustomDrawerNavigator,
  contentOptions:{
    activeTintColor: 'orange'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
