import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('testing Quote', () => {
  const item = (
    <Quote
      item={
        {
          quote: '“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”',
          name: 'MATTIJS TEN BRINK – CEO, TRANSAVIA'
        }
      }
    />
  );

  it('Renders correctly', () => {
    const renderItem = renderer.create(item).toJSON();
    expect(renderItem).toMatchSnapshot();
  });
});
