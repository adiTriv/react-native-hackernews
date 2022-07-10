import {useState, useEffect} from 'react';

import {fetchStoryItems, fetchTopStories} from '../../API/stories';

export const useGetStories = (page, setDataLoading) => {
  const [topStoriesIds, setTopStoriesIds] = useState(null);
  const [topStories, setTopStories] = useState(null);

  useEffect(() => {
    const getStoriesIds = async () => {
      const storyIds = await fetchTopStories();

      setTopStoriesIds(storyIds);
    };

    getStoriesIds();
  }, []);

  useEffect(() => {
    const getStories = async () => {

      if (topStoriesIds && topStoriesIds.length) {
        setDataLoading(true);

        const stories = await fetchStoryItems(topStoriesIds, page);

        if (page === 0) {
          setTopStories(stories);
        } else {
          setTopStories(oldStories => [...oldStories, ...stories]);
        }

        setDataLoading(false);
      }
    };

    getStories();
  }, [page, topStoriesIds]);

  return topStories;
};
