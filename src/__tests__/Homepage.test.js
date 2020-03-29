import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';
import { Header, Wrapper, Title, MenuButton } from '../styles/homepage/Homepage.css';

describe('Homepage component', () => {
  describe('renders', () => {
    it('does not crash', () => {
      shallow(<Homepage />);
    });

    it('has a title', () => {
      const wrapper = shallow(<Homepage />);
      expect(wrapper.find('Title').text()).toEqual('Conscious Soul');
    });

    it('has a subtitle', () => {
      const wrapper = shallow(<Homepage />);
      expect(wrapper.find('#subtitle').text()).toEqual('Food that awakens');
    });
  
    it('has a menu button', () => {
      const wrapper = shallow(<Homepage />);
      expect(wrapper.find('MenuButton').text()).toEqual('MENU');
    });

    it('has the correct styles', () => {
      expect(shallow(<Wrapper />)).toMatchSnapshot();
      expect(shallow(<Header />)).toMatchSnapshot();
      expect(shallow(<Title />)).toMatchSnapshot();
      expect(shallow(<MenuButton />)).toMatchSnapshot();
    });
  });

  describe('Open menu', () => {
    describe('When MENU is clicked', () => {
      it('should call openMenu()', () => {
        const wrapper = shallow(<Homepage />);
        wrapper.instance().setState({menuOpen: false});
        wrapper.find('MenuButton').simulate('click');
        expect(wrapper.instance().state.menuOpen).toBe(true);
      });
    });
  });
});