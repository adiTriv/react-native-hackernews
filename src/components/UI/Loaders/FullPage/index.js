import {StyleSheet, ActivityIndicator, View, Modal} from 'react-native';
import React from 'react';
import {theme} from '../../../../global/Theme';

const FullPageLoader = ({visible, onClose}) => {
  return (
    <View style={styles.cont}>
      <Modal transparent={true} visible={visible} onDismiss={onClose}>
        <View style={styles.loaderCont}>
          <View style={styles.loaderOuter}>
            <ActivityIndicator
              size={'large'}
              color={theme.colors.light.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FullPageLoader;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  loaderCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dde7f55e',
  },
  loaderOuter: {
    width: '25%',
    height: '12%',
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});
