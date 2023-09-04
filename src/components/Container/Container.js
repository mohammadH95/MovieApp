import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Container.styles';

const Container = ({children, style}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container(insets), style]}>
      <StatusBar barStyle="light-content" backgroundColor={'#09090F'} />
      {children}
    </View>
  );
};

export default Container;
