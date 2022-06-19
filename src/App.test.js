import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  describe('rendering', () => {
    it('render correctly', async () => {
      const tree = TestRenderer.create(<App />);

      const app = await tree.root.findByProps({
        'data-testid': 'app',
      });
      expect(app.props.children.length).not.toBe(0);
    });
  });
});
