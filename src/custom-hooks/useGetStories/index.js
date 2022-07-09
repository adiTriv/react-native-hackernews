import {useState, useEffect} from 'react';

import {fetchTopStories} from '../../API/stories';

export const useGetStories = () => {
  const [topStories, setTopStories] = useState(null);

  useEffect(() => {
    const getStories = async () => {
      const stories = await fetchTopStories();

      setTopStories(stories);
    };

    getStories();
  }, []);

  return topStories;
};
