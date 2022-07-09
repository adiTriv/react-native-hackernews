import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './src/global/Theme';

import Stories from './src/Screens/Stories/Stories';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.light.theme}
        barStyle={'dark-content'}
      />
      <Stories />
    </>
  );
}
