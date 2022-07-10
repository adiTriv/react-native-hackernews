import {getSlicedArrByPageNo} from '../../Utils';
import constants from '../Constants';


/**
 * * here front-end side pagination is used so that app does not 
 * * have to fetch all the stories that are not even visible to users.
 * 
 * * Only a chunk of 10 story ids are fetched at a time from the API
 */

/**
 * 
 * @param {Array} ids 
 * @param {Number} pageNo 
 * @returns
 * 
 * fetches story items by calling HackerNews API
 */

export const fetchStoryItems = async (ids, pageNo = 0) => {
  // get next 10 story ids from the list of ids
  const arr = getSlicedArrByPageNo(ids, pageNo);

  if (arr && arr.length) {
    const storyItems = await Promise.all(
      arr.map(async id => {
        const res = await fetch(
          `${constants.apiConstants.BASE_URL}/item/${id}.json`,
        );

        if (res.status === 200) {
          const item = res.json();
          return item;
        }

        return null;
      }),
    );

    return storyItems;
  }

  return [];
};


/**
 * 
 * @returns Returns Top Stories ids fetched from the HackerNews API 
 */

export const fetchTopStories = async () => {
  const result = await fetch(
    `${constants.apiConstants.BASE_URL}/topstories.json`,
    {
      method: 'GET',
      headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    },
  );

  if (result.status === 200) {
    const ids = await result.json();

    return ids;
  }

  return [];
};
