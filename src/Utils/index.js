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

  return [...arr].slice(startIndex, endIndex);
}

export const stripHtml = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, '');
};