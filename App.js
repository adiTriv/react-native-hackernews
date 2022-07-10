import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './src/Navigation/Stack';

import ErrorBoundary from './src/components/ErrorBoundary';

export default function App() {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <RootStack />
      </ErrorBoundary>
    </NavigationContainer>
  );
}
