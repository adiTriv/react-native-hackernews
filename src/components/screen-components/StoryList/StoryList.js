import React, {useCallback} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import RenderStoryItem from './StoryItem';

import Text from '../../UI/Text';

import {styles} from './styles';
import {theme} from '../../../global/Theme';

const RenderListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.listHeaderText}>Top Stories</Text>
  </View>
);

const RenderListEmpty = () => (
  <View style={styles.noStoriesCont}>
    <Text numberOfLines={2} style={styles.noStoriesText}>
      {'There are no stories available on HackerRank! Please try again later'}
    </Text>
  </View>
);

const RenderListFooter = () => (
  <View style={styles.listFooter}>
    <ActivityIndicator color={theme.colors.light.primary} size={'large'} />
  </View>
);

const StoryList = ({stories, onEndReached}) => {
  const RenderItem = useCallback(props => <RenderStoryItem {...props} />, []);

  console.log('rendering stories', {len: stories?.length});

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        contentContainerStyle={styles.list}
        renderItem={RenderItem}
        keyExtractor={(item, index) => item?.id || index}
        ListHeaderComponent={RenderListHeader}
        ListEmptyComponent={RenderListEmpty}
        ListFooterComponent={RenderListFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default React.memo(StoryList);
