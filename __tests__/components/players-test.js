import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; //eslint-disable-line
import Players from '../../js/components/players';
import Player from '../../js/components/player';

function setup() {
  const props = {
    players: [
      { id: 0, currentScore: 0, totalScore: 0 },
      { id: 1, currentScore: 0, totalScore: 0 }
    ],
    rounds: { player: 0 },
    winnerPlayer: jest.fn()
  };

  const enzymeWrapper = shallow(<Players {...props} />);

  return {
    props,
    enzymeWrapper
  };
}
   

describe('Players', () => {
    it('renders the div wrapper', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div')).toHaveLength(1);
    });
    
    it('renders the the two players', () => {
        const { props } = setup();
        const tree = renderer.create(
          <Players {...props} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
