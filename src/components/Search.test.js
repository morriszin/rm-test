import React from 'react';
import TestRenderer from 'react-test-renderer';
import Search from './Search';

describe('Search', () => {
  describe('rendering', () => {
    it('renders correct', async () => {
      const tree = TestRenderer.create(<Search />);
      const search = await tree.root.findByProps({
        'data-testid': 'search-input',
      });

      expect(search.props.placeholder).toBe('Search..');
    });
  });
});
