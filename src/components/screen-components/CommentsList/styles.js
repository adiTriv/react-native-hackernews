import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../global/styles';
import {theme} from '../../../global/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    paddingHorizontal: 15,
    paddingBottom: 50,
  },

  listHeader: {
    ...globalStyles.placeCenter,
    paddingVertical: 10,
    marginBottom: 30,
  },

  listHeaderText: {
    ...globalStyles.title,
    color: theme.colors.light.primary,
  },

  listFooter: {
    ...globalStyles.placeCenter,
    paddingVertical: 20,
  },

  commentItem: {
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: theme.colors.light.theme,
    elevation: 10,
    borderRadius: 7,
  },

  commentText: {
    fontSize: theme.fonts.fonSize.semiRegular,
  },

  commentDetails: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.light.grey,
  },

  desc: {
    fontSize: theme.fonts.fonSize.semiRegular,
    marginBottom: 10,
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
    fontFamily: theme.fonts.family.semibold,
  },

  noCommentsCont: {
    flex: 1,
    ...globalStyles.placeCenter,
  },

  noCommentsText: {
    fontSize: theme.fonts.fonSize.semiLarge,
    color: theme.fonts.color.danger,
    textAlign: 'center',
  },
});
