import React from 'react';

import CommentsList from '../../components/screen-components/CommentsList';
import {useGetComments} from '../../custom-hooks/useGetComments';

import WithPagination from '../../components/HOCs/PaginatedList';

const PaginatedComments = ({commentIds}) =>
  WithPagination(CommentsList, useGetComments, commentIds);

const Comments = () => {
  return <PaginatedComments />;
};

export default Comments;
