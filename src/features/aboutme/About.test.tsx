import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('Testing About Page', () => {
  it('The NotFound page renders correctly', () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
