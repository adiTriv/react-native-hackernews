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
    color: theme.fonts.color.accent
  },

  storyDetails: {
    marginTop: 10,
  },

  desc: {
    fontSize: theme.fonts.fonSize.semiRegular,
    marginBottom: 10
  },

  score: {
    fontSize: theme.fonts.fonSize.xsmall,
  },

  commentsCont: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.light.grey,
    paddingTop: 8,
    marginTop: 10, 
  },

  comments: {
    fontSize: theme.fonts.fonSize.semiRegular,
  },

  authorTime: {
    ...globalStyles.flexrow,
  },

  author: {
    fontFamily: theme.fonts.family.semibold
  },
});
