import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';
import { Header, Wrapper, Title, Button } from '../styles/homepage/Homepage.css';

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
      expect(wrapper.find('Button').text()).toEqual('MENU');
    });

    it('has the correct styles', () => {
      expect(shallow(<Wrapper />)).toMatchSnapshot();
      expect(shallow(<Header />)).toMatchSnapshot();
      expect(shallow(<Title />)).toMatchSnapshot();
      expect(shallow(<Button />)).toMatchSnapshot();
    });
  });

  describe('Open menu', () => {
    describe('When MENU is clicked', () => {
      it('should call openMenu()', () => {
        const wrapper = shallow(<Homepage />);
        wrapper.instance().setState({menuOpen: false});
        wrapper.find('Button').simulate('click');
        expect(wrapper.instance().state.menuOpen).toBe(true);
      });
    });

    describe('When menu is open', () => {
      let wrapper;
      beforeAll(() => {
        wrapper = shallow(<Homepage />);
        wrapper.instance().setState({menuOpen: true});
      });

      it('Should display the menu', () => {
        expect(wrapper.find('Menu').exists()).toBe(true);
      });

      it('Should not display the Title content', () => {
        expect(wrapper.find('TitleWrapper').exists()).toBe(false);
      });
    });

    describe('When menu is closed', () => {
      let wrapper;
      beforeAll(() => {
        wrapper = shallow(<Homepage />);
        wrapper.instance().setState({menuOpen: false});
      });

      it('should not display the menu', () => {
        expect(wrapper.find('Menu').exists()).toBe(false);
      });

      it('should display the title content', () => {
        expect(wrapper.find('TitleWrapper').exists()).toBe(true);
      });
    });
  });
});