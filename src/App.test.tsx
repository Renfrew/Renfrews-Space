import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Testing the Home page', () => {
  it('The home page renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
