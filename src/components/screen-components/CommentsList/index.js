import React, {useCallback} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import RenderCommentItem from './CommentItem';

import Text from '../../UI/Text';

import {styles} from './styles';

import {theme} from '../../../global/Theme';

const RenderListHeader = () => (
  <View style={styles.listHeader}>
    <Text>Recent Comments for this story</Text>
  </View>
);

const RenderListEmpty = () => (
  <View style={styles.noCommentsCont}>
    <Text numberOfLines={2} style={styles.noCommentsText}>
      {'There are no comments available on this Story...'}
    </Text>
  </View>
);

const RenderListFooter = ({dataLength, endOfList}) => {
  // Only render loader if there is data or its not the end of list
  if (dataLength && !endOfList) {
    return (
      <View style={styles.listFooter}>
        <ActivityIndicator color={theme.colors.light.primary} size={'large'} />
      </View>
    );
  }
  return null;
};

const CommentsList = ({data, onEndReached, numOfComments}) => {
  console.log('rendering comments...');

  const RenderFooter = useCallback(
    () => (
      <RenderListFooter
        dataLength={data?.length}
        endOfList={data?.length === numOfComments}
      />
    ),
    [data],
  );

  const RenderItem = useCallback(props => <RenderCommentItem {...props} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        renderItem={RenderItem}
        keyExtractor={(item, index) => item?.id || index}
        ListHeaderComponent={RenderListHeader}
        ListEmptyComponent={RenderListEmpty}
        ListFooterComponent={RenderFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default React.memo(CommentsList);
