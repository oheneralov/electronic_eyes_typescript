import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import './CartoonizerStyles.css';
import Cartoonizer from './Cartoonizer';


it('should render  title of link Cartoonizer', () => {
const titleCartoonizer = shallow(<Cartoonizer/>);
const findCartoonizer = titleCartoonizer.find('h2');
const resultCartoonizer = findCartoonizer.text();

expect(resultCartoonizer).toBe('Convert your photo into a cartoon');
});





