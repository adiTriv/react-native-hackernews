import React, {useCallback, useState} from 'react';

import FullPageLoader from '../../UI/Loaders/FullPage';

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
