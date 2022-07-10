import {useState, useEffect} from 'react';

import {fetchStoryItems} from '../../API/stories';

/**
 *
 * @param {integer} page - page number of data pagination
 * @param {Function} setDataLoading
 * @param {Array} ids - Ids of comments
 * @returns
 *
 * comments
 */
export const useGetComments = (page, setDataLoading, ids) => {
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
