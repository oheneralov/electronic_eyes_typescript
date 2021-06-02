import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import Header from './Header';

it('should render  title of the page', () => {
const wrapper = shallow(<Header/>);
const header = wrapper.find('h1');
const result = header.text();

expect(result).toBe('electronic eyes');
});

it('should render  paragraph of the page', () => {
const wrapper2 = shallow(<Header/>);
const header2 = wrapper2.find('p');
const result2 = header2.text();
    
expect(result2).toBe('Help for visually impaired people');
});

