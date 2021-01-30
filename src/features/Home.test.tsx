import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Testing the Home page', () => {
  it('The home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
