import React from 'react';
import renderer from 'react-test-renderer';
import NotFound404 from './NotFound404';

describe('Testing the NotFound Page', () => {
  it('The NotFound page renders correctly', () => {
    const tree = renderer.create(<NotFound404 />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
