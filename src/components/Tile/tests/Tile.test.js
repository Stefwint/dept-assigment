import React from 'react';
import renderer from 'react-test-renderer';
import Tile from '../Tile';

describe('testing Tile', () => {
  const item = (
    <Tile
      title="A summer island in the Netherlands"
      client="bol.com"
      link="https://www.deptagency.com"
      image="bolcom.png"
    />
  );

  it('Renders correctly', () => {
    const renderItem = renderer.create(item).toJSON();
    expect(renderItem).toMatchSnapshot();
  });
});
