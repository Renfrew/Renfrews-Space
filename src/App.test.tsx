import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Testing the App', () => {
  it('The entired app renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
