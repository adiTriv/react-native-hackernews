import React, {useCallback} from 'react';

import StoryList from '../../components/screen-components/StoryList/StoryList';

import WithPagination from '../../components/HOCs/PaginatedList';

import {useGetStories} from '../../custom-hooks/useGetStories';

// Story list with paginated data
const PaginatedStories = WithPagination(StoryList, useGetStories);

const Stories = ({navigation}) => {

  /**
   * goToComments - navigate to comments of a story
   */
  const goToComments = useCallback(
    (commentIds, numOfComments) =>
      navigation.navigate('comments', {commentIds, numOfComments}),
    [],
  );

  return <PaginatedStories goToComments={goToComments} />;
};

export default Stories;
