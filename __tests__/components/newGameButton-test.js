import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NewGameButton from '../../js/components/newGameButton';

const NewGameButtonComponent = () => {
    const props = {
        players: [
            { id: 0, currentScore: 0, totalScore: 0 },
            { id: 1, currentScore: 0, totalScore: 0 }
        ],
        resetPlayers: () => {},
        resetRounds: () => {},
        resetDice: () => {}
    };
    return shallow(<NewGameButton {...props} />);
};


describe('NewGameButton', () => {
    it('renders the new game button', () => {
        const RenderedNewGameButton = NewGameButtonComponent();
        expect(RenderedNewGameButton.find('.btn-new')).toHaveLength(1);
    });

    it('clicks the button', () => {
        const ButtonClick = sinon.spy();
        const ButtonComponent = NewGameButtonComponent();
        ButtonComponent.find('button').simulate('click');
        expect(ButtonClick.calledOnce).toEqual(true);
    });
});
