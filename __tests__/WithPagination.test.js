/**
 * @format
 */
import React from 'react';
import {View, Text} from 'react-native';
import {render, screen} from '@testing-library/react-native';

import WithPagination from '../src/components/HOCs/PaginatedList';

import useGetStories from '../src/custom-hooks/useGetStories';

const MOCK_DATA = ['test-story-1', 'test-story-2', 'test-story-3'];

jest.mock('../src/custom-hooks/useGetStories', () => {
  return jest.fn(() => MOCK_DATA);
});

const MockWithPaginationComponent = WithPagination(({data}) => {
  return (
    <View>
      {data.map((item, i) => (
        <Text testID={`item-${i}`} key={i}>
          {item}
        </Text>
      ))}
    </View>
  );
}, useGetStories);

describe('WithPagination', () => {
  test('should have data from mocked custom hook', () => {
    render(<MockWithPaginationComponent />);

    expect(screen.getByTestId('item-0').props.children).toBe('test-story-1');
    expect(screen.getByTestId('item-1').props.children).toBe('test-story-2');
    expect(screen.getByTestId('item-2').props.children).toBe('test-story-3');
  });
});
