import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ExploreScreen from './screens/ExploreScreen';
import SellScreen from './screens/SellScreen';
import MessageScreen from './screens/MessageScreen';
import RequestsScreen from './screens/RequestsScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const exploreName = "Explore";
const sellName = "Sell";
const messageName = "Message";
const requestName = "Request";
const profileName = "Profile";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={exploreName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === exploreName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === sellName) {
                iconName = focused ? 'cube' : 'cube-outline';
            } else if (routeName == messageName) {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (routeName == requestName) {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
            } else if (routeName == profileName) {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#9747FF',
          inactiveTintColor: '#9DB2CE',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>


        <Tab.Screen name={requestName} component={RequestsScreen} />
        <Tab.Screen name={sellName} component={SellScreen} />
        <Tab.Screen name={exploreName} component={ExploreScreen} />
        <Tab.Screen name={messageName} component={MessageScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;