import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import './HomeStyles.css';
import Home from './Home';

it('should render  title of link Home', () => {
const titleHome = shallow(<Home/>);
const findHomeh = titleHome.find('h2');
const resultHomeh = findHomeh.text();

expect(resultHomeh).toBe('Home');
});



it('should render  paragraph of link Home', () => {
const paragraphHome = shallow(<Home/>);
const findHomep = paragraphHome.find('p.homeParagraph').text();
        
expect(findHomep).toBe('The following products and services are offered for our customers:');
});




