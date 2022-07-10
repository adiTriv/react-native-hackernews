import {useState, useEffect} from 'react';

import {fetchStoryItems} from '../../API/stories';

export const useGetComments = (ids, page, setDataLoading) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {

      if (ids && ids.length) {
        setDataLoading(true);

        const fetchedComments = await fetchStoryItems(ids, page);

        if (page === 0) {
          setComments(fetchedComments);
        } else {
          setComments(oldComments => [...oldComments, ...fetchedComments]);
        }

        setDataLoading(false);
      }
    };

    getComments();
  }, [page]);

  return comments;
};
