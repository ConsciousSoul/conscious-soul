import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/Menu';
import {MenuWrapper, Button} from '../styles/menu/MenuStyles.css.js';

describe('Menu component', () => {
  describe('renders', () => {
    it('should not crash', () => {
      shallow(<Menu />);
    });

    it('should have a return button', () => {
      const wrapper = shallow(<Menu />);
      expect(wrapper.find('Button').text()).toEqual('Return to Main Page');
    });

    it('should have the correct styles', () => {
      expect(shallow(<MenuWrapper />)).toMatchSnapshot();
      expect(shallow(<Button />)).toMatchSnapshot();
    });
  });
});