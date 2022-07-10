import React, {useCallback, useState} from 'react';
import WithPagination from '../../components/HOCs/PaginatedList';

import StoryList from '../../components/screen-components/StoryList/StoryList';
import FullPageLoader from '../../components/UI/Loaders/FullPage';

import {useGetStories} from '../../custom-hooks/useGetStories';

const PaginatedStories = WithPagination(StoryList, useGetStories);

const Stories = () => {
  return <PaginatedStories />;
};

export default Stories;
