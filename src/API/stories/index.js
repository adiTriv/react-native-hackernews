import {getSlicedArrByPageNo} from '../../Utils';
import constants from '../Constants';

export const fetchStoryItems = async (ids, pageNo = 0) => {
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
