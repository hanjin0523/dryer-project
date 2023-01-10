import * as React from 'react';
import { Button, Dimensions, View, Image, StyleSheet } from 'react-native';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomSidebarMenu from './front/CustomSidebarMenu';
import 'react-native-gesture-handler';
import HomeScreen from './front/HomeScreen';
import NotificationsScreen from './front/NotificationsScreen';

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

function NotificationsScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="testBack" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Drawer.Navigator
        initialRouteName="Home" 
        drawerContent={( props ) => <CustomSidebarMenu {...props}/>} 
        screenOptions={{
          drawerType:'permanent',
          drawerActiveTintColor: "#763AFF",
          drawerStyle: {
            width: width/6.4814,
            borderTopRightRadius:25,
          },
          drawerItemStyle:{
            borderRadius: 50,
            width: width/7.9,
            height: height/20,
            marginBottom:height/70,
          }
        }}>
        <Drawer.Screen
        name="Home" 
        component={HomeScreen}
        options={{ 
          drawerLabel: 'Home',
          headerStyle: {
            backgroundColor: '#49319E',
            height: height / 27.375, 
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -10,
            width: width/7.8651,
            height: height/34.3720,
            fontWeight:"bold",
            marginTop:3
          },
          drawerIcon: ({focused}) => (
            <Image 
            source={
              !focused ? 
              require('./front/assets/image/homebtn.png') : 
              require('./front/assets/image/puplehome.png')}
            style={{width: width/84.8484, height: height/54.75, marginLeft:"7%", marginBottom:"2%"}}
            />)}}
        />
        <Drawer.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{drawerLabel: '건조기 관리',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
          width: width/7.8651,
          height: height/34.3720,
          fontWeight:"bold",
          marginTop:3,
        },
        drawerIcon: ({focused}) => (
          <Image 
          source={ 
            !focused ? 
            require('./front/assets/image/drybtn.png') :
            require('./front/assets/image/drybtnOff.png')}
          style={{width: width/84.8484, height: height/54.75, marginLeft:"7%", marginBottom:"2%"}}
          />)
        }}
        
        
        />
        <Drawer.Screen 
        name="Notifications1" 
        component={NotificationsScreen1} 
        options={{drawerLabel: '레시피 설정',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
          width: width/7.8651,
          height: height/34.3720,
          fontWeight:"bold",
          marginTop:3
        },
        drawerIcon: ({focused}) => (
          <Image 
          source={
            !focused ?
            require('./front/assets/image/programbtn.png') :
            require('./front/assets/image/programbtnOff.png')}
          style={{
            width: width/84.8484, 
            height: height/54.75, 
            marginLeft:"7%",
            marginTop:"-3%",            
          }}
          />)
        }}
        
        />
        <Drawer.Screen 
        name="Notifications2" 
        component={NotificationsScreen1} 
        options={{drawerLabel: '데이터 관리',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
          width: width/7.8651,
          height: height/34.3720,
          fontWeight:"bold",
          marginTop:3
        },
        drawerIcon: ({focused}) => (
          <Image 
          source={
            !focused ?
            require('./front/assets/image/chartbtn.png') :
            require('./front/assets/image/chartbtnOff.png')}
          style={{width: width/84.8484, height: height/54.75, marginLeft:"7%", marginTop:"-4%"}}
          />)
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerLabelStyle: {        
          fontSize: 16,
          marginLeft: -10,
          width: width/7.8651,
          height: height/34.3720,
          fontWeight:"bold",
          marginTop:3
  }
})