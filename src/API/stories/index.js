import constants from '../Constants';

export const fetchStoryItems = async (ids) => {
  const storyItems = await Promise.all(
    ids.map(async id => {
      const res = await fetch(
        `${constants.apiConstants.BASE_URL}/item/${id}.json`,
      );
      const item = res.json();
      return item;
    }),
  ).catch(err => pprint(err));

  return storyItems;
};

export const fetchTopStories = async () => {
  const result = await fetch(
    `${constants.apiConstants.BASE_URL}/topstories.json`,
    {
      method: 'GET',
      headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    },
  );
  const ids = await result.json();
  const stories = await fetchStoryItems(ids);

  return stories;
};


