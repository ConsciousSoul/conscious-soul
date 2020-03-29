import React from 'react';
import {shallow} from 'enzyme';
import Homepage from '../components/Homepage';

it('renders without crashing', () => {
  shallow(<Homepage/>);
});