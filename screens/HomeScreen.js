import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Body, Right, 
    Button, Icon, Title, Footer, FooterTab, Card, CardItem } from 'native-base';

const { height, width } = Dimensions.get('window')
    
class HomeScreen extends Component{

    static navigationOption = {
        drawerIcon : ({tintColor}) => (
            <Icon name='home' style={{fontSize:24, color:tintColor}} />
        )
    }

   render() {
       return (
           <View styles={styles.container}>
               <Header style={{backgroundColor: '#3e5b8e', marginTop:10 }}>
                   <Left style={{marginLeft:-150,marginTop:10}}>
                       <Icon name='menu' onPress={() =>
                        this.props.navigation.openDrawer()} />
                   </Left>
                   {/* <Body>
                       <Title>HomeScreen</Title>
                   </Body> */}
               </Header>
                                  
                        <Card>
                            <CardItem>
                            <ScrollView scrollEventThrottle={16}>
                            <View style={{ flex:1, backgroundColor: 'white', paddingTop: 20 }}>
                                <Text style={{fontSize: 24, fontWeight: '700', 
                                      paddingHorizontal:20}}>
                                    We Are Here to Find Some Thing?
                                </Text>
                                <View style={{ height: 130, marginTop: 20 }}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                      <View style={{ height: 130, width: 130, marginLeft:20, 
                                        borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 2 }}>
                                          <Image source={require
                                          ('../assets/splash2.jpg')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 130, width: 130, marginLeft:20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 2 }}>
                                          <Image source={require
                                          ('../assets/image2.png')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>
                                      <View style={{ height: 130, width: 130, marginLeft:20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                          <View style={{ flex: 2 }}>
                                          <Image source={require
                                          ('../assets/image.png')} 
                                          style={{flex:1, height: null, width: null, resizeMode: 'cover'}}/>
                                          </View>
                                          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                                              <Text>Hello</Text>
                                          </View>
                                      </View>                                   
                                    </ScrollView>
                                </View>
                            </View>
                        </ScrollView>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                            <ScrollView scrollEventThrottle={16}>
                            <View style={{ flex:1, backgroundColor: 'white', paddingTop: 20 }}>
                                    <Text style={{fontSize: 24, fontWeight: '700', 
                                      paddingHorizontal:20}}>
                                        We Are Here to Find Some Thing?  
                                    </Text>
                                    <Text style={{fontWeight: '100', marginTop: 10, paddingHorizontal:20}}>
                                        We Are Here to Find Some Thing?
                                        We Are Here to Find Some Thing?We Are Here to Find Some Thing?
                                    </Text>
                                    <View style={{ width: 200, height:200, marginTop: 20 }}>
                                    <Image source={require
                                          ('../assets/image5.png')} 
                                          style={{ flex:1, height: null, height: null, resizeMode: 'cover' }} />
                                    </View>      
                                </View>
                            </ScrollView>
                            </CardItem>
                        </Card>
                      
                    

               {/* <Footer>
                   <FooterTab  style={{backgroundColor:'white'}}>
                   <Button>
                       <Icon name='home' style={{color:'black'}}/>
                       <Text>Home</Text>
                   </Button>
                   <Button>
                       <Icon name='settings' style={{color:'black'}}/>
                       <Text>Settings</Text>
                   </Button>
                   <Button>
                       <Icon name='camera' style={{color:'black'}}/>
                       <Text>Camera</Text>
                   </Button>
                   <Button>
                       <Icon name='aperture' style={{color:'black'}}/>
                       <Text>picture</Text>
                   </Button>
                   </FooterTab>
               </Footer> */}
               
           </View>
       );
   }
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

      },
  });