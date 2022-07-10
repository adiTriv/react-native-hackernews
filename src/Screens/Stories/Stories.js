import React, {useCallback, useState} from 'react';

import StoryList from '../../components/screen-components/StoryList/StoryList';
import FullPageLoader from '../../components/UI/Loaders/FullPage';

import {useGetStories} from '../../custom-hooks/useGetStories';

const Stories = () => {
  const [page, setPage] = useState(0);
  const [moreDataLoading, setMoreDataLoading] = useState(false);

  const stories = useGetStories(page, setMoreDataLoading);

  const onListEndReached = useCallback(() => {
    if (!moreDataLoading) {
      setPage(oldPage => oldPage + 1);
    }
  }, []);

  if (stories) {
    return <StoryList stories={stories} onEndReached={onListEndReached} />;
  } else {
    return <FullPageLoader />;
  }
};

export default Stories;
