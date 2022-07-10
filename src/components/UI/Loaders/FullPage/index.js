import {
  StyleSheet,
  ActivityIndicator,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import React from 'react';
import {theme} from '../../../../global/Theme';

const WIDTH = Dimensions.get('window').width * 0.3;

const FullPageLoader = ({onClose}) => {
  console.log('rendering loader');

  return (
    <View style={styles.cont}>
      <Modal transparent={true} visible={true} onDismiss={onClose}>
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

export default React.memo(FullPageLoader);

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
    width: WIDTH,
    height: WIDTH,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});
