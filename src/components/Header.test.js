import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  describe('rendering', () => {
    it('renders correct', async () => {
      const tree = TestRenderer.create(<Header />);
      const header = await tree.root.findByProps({
        'data-testid': 'header-name',
      });
      expect(header.props.children).toBe('User Search');
    });

    it('renders h1', async () => {
      const tree = TestRenderer.create(<Header />);
      const header = await tree.root.findByProps({
        'data-testid': 'header-name',
      });
      expect(header.type).toBe('h1');
    });
  });
});
