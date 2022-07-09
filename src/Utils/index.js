import moment from 'moment';

export const pprint = raw => {
  console.log(JSON.stringify(raw, null, 4));
};

export const getTimeAgo = time => {
  return moment(time).fromNow();
};
