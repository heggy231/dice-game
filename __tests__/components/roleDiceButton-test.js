import React from 'react';
import { mount } from 'enzyme'; //eslint-disable-line
import RoleDiceButton from '../../js/components/roleDiceButton';

function setup() {
  const props = {
        roleDice: jest.fn(),
  };

  const enzymeWrapper = mount(<RoleDiceButton {...props} />);

  return {
    props,
    enzymeWrapper
  };
}
   

describe('RoleDiceButton', () => {
    it('renders the role-dice button', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.btn-roll')).toHaveLength(1);
    });
});
