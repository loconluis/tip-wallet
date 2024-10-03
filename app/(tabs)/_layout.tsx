import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { View } from 'react-native';

export default function TabLayout() {
  const shadoOffset = {
    height: 10,
    width: 0,
  };
  return (
    <Tabs
      initialRouteName="crypto"
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors['light'].background,
          position: 'absolute',
          bottom: 30,
          justifyContent: 'center',
          alignSelf: 'center',
          height: 50,
          marginHorizontal: 140,
          paddingHorizontal: 10,
          paddingVertical: 5,
          paddingBottom: 8,
          borderRadius: 40,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: '#a2a2a2',
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: shadoOffset,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cash',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: focused
                  ? Colors['light'].tint
                  : Colors['light'].background,
              }}
            >
              <TabBarIcon
                size={18}
                name={focused ? 'cash' : 'cash-outline'}
                color={
                  focused ? Colors['light'].background : Colors['light'].icon
                }
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="crypto"
        options={{
          title: 'Bitcoin',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 30,
                backgroundColor: focused
                  ? Colors['light'].tint
                  : Colors['light'].background,
              }}
            >
              <TabBarIcon
                size={18}
                name={'logo-bitcoin'}
                color={
                  focused ? Colors['light'].background : Colors['light'].icon
                }
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
