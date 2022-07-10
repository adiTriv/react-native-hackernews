import moment from 'moment';

export const pprint = raw => {
  console.log(JSON.stringify(raw, null, 4));
};

export const getTimeAgo = time => {
  return moment(time).fromNow();
};


export const getSlicedArrByPageNo = (arr, page) => {
  const startIndex = page * 10;
  const endIndex = startIndex + 10;

  console.log({startIndex, endIndex});

  return arr.slice(startIndex, endIndex);
}