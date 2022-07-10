import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../UI/Button';
import Text from '../UI/Text';

import {theme} from '../../global/Theme';
import { globalStyles } from '../../global/styles';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Todo: log error to some error reporting service like - Sentry
  }

  renderFallbackUI = () => {
    return (
      <>
        <View style={styles.cont}>
          <Text>Some Error Occured! Please try again</Text>
          <View style={styles.btnCont}>
            <Button
              titleStyle={styles.btn}
              onPress={() =>
                this.setState({
                  hasError: false,
                })
              }
              title={'Retry'}
            />
          </View>
        </View>
      </>
    );
  };

  render() {
    const RenderFallbackUI = this.renderFallbackUI;

    console.log({hasError: this.state.hasError});

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <RenderFallbackUI />;
      // return <Text>Something is wrong</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  ...globalStyles.placeCenter    
  },
  btnCont: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 15,
  },
  btn: {
    marginTop: 5,
    fontSize: theme.fonts.fonSize.semiLarge,
    fontFamily: theme.fonts.family.regular,
  },
});
