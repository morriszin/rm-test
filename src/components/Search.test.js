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

  describe('events', () => {
    it('calls onChange', async () => {
      const fn = jest.fn();
      fn('test');

      const tree = TestRenderer.create(<Search onChange={fn} />);
      const search = await tree.root.findByProps({
        'data-testid': 'search-input',
      });
      TestRenderer.act(() => {
        search.props.onChange({ target: { value: 'test' } });
      });

      expect(fn.mock.calls).toEqual([['test']]);
    });
  });

  it('calls onKeyUp', async () => {
    const fn = jest.fn();
    fn('test');

    const tree = TestRenderer.create(<Search onChange={fn} />);
    const search = await tree.root.findByProps({
      'data-testid': 'search-input',
    });
    TestRenderer.act(() => {
      search.props.onKeyUp({ target: { value: 'test' } });
    });

    expect(fn.mock.calls).toEqual([['test']]);
  });
});
