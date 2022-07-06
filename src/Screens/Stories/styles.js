import {StyleSheet} from 'react-native';
import { globalStyles } from '../../global/styles';
import {theme} from '../../global/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    paddingHorizontal: 15,
    marginVertical: 50,
  },

  storyItem: {
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: theme.colors.light.theme,
    elevation: 10,
    borderRadius: 7,
  },

  title: {
    fontSize: theme.fonts.fonSize.semiLarge,
  },

  storyDetails: {
    marginTop: 20,
  },

  desc: {
    fontSize: theme.fonts.fonSize.small,
    marginBottom: 10
  },

  comments: {
    fontSize: theme.fonts.fonSize.semiRegular,
  },

  authorTime: {
    ...globalStyles.flexrow,
    justifyContent: 'space-between',
  }
});
