import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '../Text';

import {theme} from '../../../global/Theme';
import {globalStyles} from '../../../global/styles';

const DefaultButton = ({title, btnStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyle]}>
      <Text style={styles.btnTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: theme.colors.light.primary,
    borderRadius: 10,
    ...globalStyles.placeCenter,
  },
  btnTitleStyle: {
    fontFamily: theme.fonts.family.semibold,
    color: theme.fonts.color.light,
    textAlign: 'center',
    marginBottom: 5,
  },
});
