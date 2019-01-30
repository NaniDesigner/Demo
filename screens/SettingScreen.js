import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class SettingsScreen extends Component{
   render() {
       return (
           <View>
               <Header style={{marginTop:10}}>
                   <Left style={{marginLeft:-150,marginTop:10}}>
                       <Icon name='menu' onPress={() =>
                        this.props.navigation.openDrawer()} />
                   </Left>
               </Header>
               <Text>SettingScreen</Text>
           </View>
       );
   }
}
export default SettingsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });