import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function MessageScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text
                onPress={() => navigation.navigate('Explore')}
                style={{fontSize: 26, fontWeight: 'bold'}}> Message Screen</Text>
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