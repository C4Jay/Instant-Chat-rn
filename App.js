import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './screens/chat';

export default function App() {
  return (
    <View style={styles.container}>
    <ChatScreen></ChatScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
