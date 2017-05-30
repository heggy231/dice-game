import React from 'react';
import { mount } from 'enzyme'; //eslint-disable-line
import HoldButton from '../../js/components/holdButton';

function setup() {
  const props = {
        rounds: { player: 0 },
        togglePlayer: jest.fn(),
        addScoreToGlobal: jest.fn() 
  };

  const enzymeWrapper = mount(<HoldButton {...props} />);

  return {
    props,
    enzymeWrapper
  };
}
   

describe('HoldButton', () => {
    it('renders the hold button', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('button')).toHaveLength(1);
    });
});
