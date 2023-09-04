import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  container: insets => ({
    flex: 1,
    backgroundColor: '#09090F',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 16,
    paddingRight: insets.right + 16,
  }),
});
