import moment from 'moment';

export const pprint = raw => {
  console.log(JSON.stringify(raw, null, 4));
};

export const getTimeAgo = time => {
  return moment(time).fromNow();
};

/**
 * 
 * @param {Array} arr 
 * @param {Number} page 
 * @returns 
 * 
 * Sliced (a portion ) of arr, based on the page number
 */

export const getSlicedArrByPageNo = (arr, page) => {
  const startIndex = page * 10;
  const endIndex = startIndex + 10;

  return [...arr].slice(startIndex, endIndex);
}

/**
 * 
 * @param {String} str 
 * @returns 
 * 
 * HTML escaped string 
 */
export const stripHtml = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, '');
};