import React from 'react';
import renderer from 'react-test-renderer';
import Contact from './Contact';
import Personal from './Personal';
import SendMesssage from './SendMessage';

describe('Testing the Contact page', () => {
  it('The Personal module renders correctly', () => {
    const tree = renderer.create(<Personal />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('The send message  module renders correctly', () => {
    const tree = renderer.create(<SendMesssage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('The entired contact module renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
