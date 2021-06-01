import React, { Component } from 'react';
import  { shallow } from 'enzyme';
import './SolutionStyles.css';
import Solution from './Solution';


it('should render  title of link Solution', () => {
const titleSolution = shallow(<Solution/>);
const findSolution = titleSolution.find('h2');
const resultSolution = findSolution.text();

expect(resultSolution).toBe('Solution For Blind People');
});





