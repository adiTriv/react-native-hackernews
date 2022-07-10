import React from 'react';
import {StatusBar} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import {theme} from './src/global/Theme';

import Stories from './src/Screens/Stories/Stories';

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar
        backgroundColor={theme.colors.light.theme}
        barStyle={'dark-content'}
      />
      <Stories />
    </ErrorBoundary>
  );
}
