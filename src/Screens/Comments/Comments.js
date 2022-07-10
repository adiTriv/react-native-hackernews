import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';

import CommentsList from '../../components/screen-components/CommentsList';
import {useGetComments} from '../../custom-hooks/useGetComments';
import StackHeader from '../../components/UI/CustomHeaders/StackHeader';

import WithPagination from '../../components/HOCs/PaginatedList';
import {theme} from '../../global/Theme';

const Comments = ({route, navigation}) => {
  const {commentIds, numOfComments} = route.params;

  const PaginatedComments = useMemo(
    () =>
      WithPagination(
        props => <CommentsList {...props} numOfComments={numOfComments} />,
        useGetComments,
        commentIds,
      ),
    [commentIds],
  );

  const goBack = () => navigation.goBack();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.light.theme}
        barStyle={'dark-content'}
      />
      <StackHeader goBack={goBack} title={'Comments'} />
      <PaginatedComments numOfComments={numOfComments} />
    </>
  );
};

export default Comments;
