import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import Text from '../../Text';

import {theme} from '../../../../global/Theme';
import {globalStyles} from '../../../../global/styles';

const StackHeader = ({title, goBack}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.left} />
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      {/* here an Icon should be added to perform back operation,
       but for the purpose of this projectI have added only text */}
      <Pressable onPress={goBack} style={styles.right}>
        <Text style={styles.backbtn}>Back</Text>
      </Pressable>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  cont: {
    ...globalStyles.flexrow,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: theme.colors.light.theme,
  },

  left: {
    width: '20%',
    ...globalStyles.placeCenter,
  },

  right: {
    width: '20%',
    backgroundColor: theme.colors.light.light,
    ...globalStyles.placeCenter,
    marginRight: 10,
    borderRadius: 5,
  },

  center: {
    width: '60%',
    ...globalStyles.placeCenter,
  },

  title: {
    ...globalStyles.textHeading,
    fontSize: theme.fonts.fonSize.large,
    marginBottom: 5,
  },

  backbtn: {
    fontSize: theme.fonts.fonSize.semiRegular,
    color: theme.fonts.color.danger,
    marginBottom: 5,
  },
});
