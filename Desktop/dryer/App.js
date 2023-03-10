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
import RecipeSetting from './front/RecipeSetting';

import store from './src1/store'
import { Provider } from 'react-redux';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Drawer.Navigator
          initialRouteName="RecipeSetting" 
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
              height: height/16,
              marginBottom:height/90,
            }
          }}>
          <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            drawerLabel: 'Home',
            drawerLabelStyle: {
              fontSize: 16,
              marginLeft: -20,
              width: width/10,
              height: height/34.3720,
              fontWeight:"bold",
              marginBottom: 0,
              lineHeight: 22,
            },
            headerTitle:"crispy recipe",
            headerStyle: {
              backgroundColor: '#49319E',
              height: height / 22.1772, 
            },
            headerTitleStyle: {
              fontSize: 23,
              lineHeight: 28,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            drawerIcon: ({focused}) => (
              <Image 
              source={
                !focused ? 
                require('./front/assets/image/homebtn.png') : 
                require('./front/assets/image/puplehome.png')}
              style={{width: width/70.8484, height: height/40.75, marginLeft:"7%"}}
              />)}}
          />
          <Drawer.Screen 
          name="recipeSettin11g" 
          component={RecipeSetting} 
          options={{drawerLabel: '????????? ??????',
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -20,
            width: width/10,
            height: height/34.3720,
            fontWeight:"bold",
            marginBottom: 0,
            lineHeight: 22,
          },
          headerTitle:"crispy recipe",
            headerStyle: {
              backgroundColor: '#49319E',
              height: height / 22.1772, 
            },
            headerTitleStyle: {
              fontSize: 23,
              lineHeight: 28,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          drawerIcon: ({focused}) => (
            <Image 
            source={ 
              !focused ? 
              require('./front/assets/image/drybtn.png') :
              require('./front/assets/image/drybtnOff.png')}
              style={{width: width/70.8484, height: height/40.75, marginLeft:"7%"}}
            />)
          }}
          
          
          />
          <Drawer.Screen 
          name="RecipeSetting" 
          component={RecipeSetting} 
          options={{drawerLabel: '????????? ??????',
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -20,
            width: width/10,
            height: height/34.3720,
            fontWeight:"bold",
            marginBottom: 0,
            lineHeight: 22,
          },
          headerTitle:"crispy recipe",
            headerStyle: {
              backgroundColor: '#49319E',
              height: height / 22.1772, 
            },
            headerTitleStyle: {
              fontSize: 23,
              lineHeight: 28,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          drawerIcon: ({focused}) => (
            <Image 
            source={
              !focused ?
              require('./front/assets/image/programbtn.png') :
              require('./front/assets/image/programbtnOff.png')}
              style={{width: width/70.8484, height: height/40.75, marginLeft:"7%"}}
            />)
          }}
          
          />
          <Drawer.Screen 
          name="recipeSettin111g" 
          component={RecipeSetting} 
          options={{drawerLabel: '????????? ??????',
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -20,
            width: width/10,
            height: height/34.3720,
            fontWeight:"bold",
            marginBottom: 0,
            lineHeight: 22,
          },
          headerTitle:"crispy recipe",
            headerStyle: {
              backgroundColor: '#49319E',
              height: height / 22.1772, 
            },
            headerTitleStyle: {
              fontSize: 23,
              lineHeight: 28,
            },   
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          drawerIcon: ({focused}) => (
            <Image 
            source={
              !focused ?
              require('./front/assets/image/chartbtn.png') :
              require('./front/assets/image/chartbtnOff.png')}
              style={{width: width/70.8484, height: height/40.75, marginLeft:"7%"}}
            />)
          }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
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