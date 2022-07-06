import React from 'react';
import {Text} from 'react-native';

import { globalStyles } from '../../../global/styles';


const DefaultText = ({children, style, ...props}) => {
  return (
    <Text
      ellipsizeMode={'tail'}
      allowFontScaling={false}
      style={[globalStyles.text, style]}
      {...props}>
      {children}
    </Text>
  );
};

export default DefaultText;
