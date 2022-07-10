import React, {useCallback, useState} from 'react';

import FullPageLoader from '../../UI/Loaders/FullPage';

/**
 * 
 * @param {React.Component} WrappedComponent 
 * @param {Function} getDataHook - Custom React hook 
 * @param {Object} hookProps - props to pass to the hook 
 * @returns 
 * 
 * React.Component wrapped with Pagination logic - 
 * Initially first 10 story items are fetched, as these story items are reached
 * through scrolling, only then we fetch the next page (i.e., next 10 items).
 * Decreasing the loading time of the app, as well as unnecessary api calls
 */

const WithPagination = (WrappedComponent, getDataHook, hookProps = {}) => {
  return props => {
    const [page, setPage] = useState(0);
    const [moreDataLoading, setMoreDataLoading] = useState(false);

    const data = getDataHook(page, setMoreDataLoading, hookProps);

    const onListEndReached = useCallback(() => {
      if (!moreDataLoading) {
        setPage(oldPage => oldPage + 1);
      }
    }, []);

    if (data) {
      return (
        <WrappedComponent
          data={data}
          onEndReached={onListEndReached}
          {...props}
        />
      );
    } else {
      return <FullPageLoader />;
    }
  };
};

export default WithPagination;
