import React from 'react';
import TestRenderer from 'react-test-renderer';
import Image from './Image';

describe('Image', () => {
  describe('rendering', () => {
    it('renders correct', async () => {
      const tree = TestRenderer.create(
        <Image {...{ avatar_url: 'https://via.placeholder.com/150' }} />
      );
      const image = await tree.root.findByProps({
        'data-testid': 'image-avatar',
      });
      expect(image.props.src).toBe('https://via.placeholder.com/150');
    });
  });
});
