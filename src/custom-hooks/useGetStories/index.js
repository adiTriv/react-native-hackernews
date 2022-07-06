import {useState, useEffect} from 'react';

import {fetchTS} from '../../API/stories';

export const useGetStories = () => {
  const [topStories, setTopStories] = useState(null);

  useEffect(() => {
    fetchTS(stories => setTopStories(stories));
  }, []);

  return topStories;
};
