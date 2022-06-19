import React from 'react';
import TestRenderer from 'react-test-renderer';
import ImageList from './ImageList';

describe('ImageList', () => {
  describe('rendering', () => {
    it('renders correct', async () => {
      const tree = TestRenderer.create(
        <ImageList
          {...{
            profiles: [
              {
                id: '1',
                name: 'name',
              },
            ],
          }}
        />
      );
      const imageList = await tree.root.findByProps({
        'data-testid': 'image-list',
      });
      expect(imageList.props.children.length).toBe(1);
    });
  });
});
