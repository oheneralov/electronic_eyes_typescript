import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import './BirthdayStyles.css';
import Birthday from './Birthday';


it('should render  title of link Birthday', () => {
const titleBirthday = shallow(<Birthday/>);
const findBirthday = titleBirthday.find('h2');
const resultBirthday = findBirthday.text();

expect(resultBirthday).toBe('Birthday Present');
});





