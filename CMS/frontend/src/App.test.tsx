import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './App.css';
import  { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render Header', () => {
  const wrapper = shallow(<App/>);
  const header = wrapper.find(Header);
  
  expect(header.exists()).toBe(true);
  });


it('should be NavLink  Home in App', () => {
  const wrapperHome = shallow(<App/>);
  const linkHome = wrapperHome.find('NavLink.home-link');
 
  expect(linkHome.props().to).toBe('/frontend');
  });


it('cheking name NavLink Home', () => {
const chekingHome = shallow(<App/>);
const insideHome = chekingHome.find('NavLink.home-link').text();
          
expect(insideHome).toBe('Home');
});


it('should be NavLink  solution in App', () => {
const wrapperSolution = shallow(<App/>);
const linkSolution = wrapperSolution.find('NavLink.solution-link');
     
expect(linkSolution.props().to).toBe('/frontend/solution');
});


it('cheking name NavLink Solution for Blind People', () => {
const chekingSolution = shallow(<App/>);
const insideSolution = chekingSolution.find('NavLink.solution-link').text();
          
expect(insideSolution).toBe('Solution for Blind People');
});


it('should be NavLink  birthday in App', () => {
const wrapperBirthday = shallow(<App/>);
const linkBirthday = wrapperBirthday.find('NavLink.birthday-link');
             
expect(linkBirthday.props().to).toBe('/frontend/birthday');
});


it('cheking name NavLink Birthday Present', () => {
const chekingBirthday = shallow(<App/>);
const insideBirthday = chekingBirthday.find('NavLink.birthday-link').text();
            
expect(insideBirthday).toBe('Birthday Present');
});

it('should be NavLink  cartoonizer in App', () => {
const wrapperCartoonizer = shallow(<App/>);
const linkCartoonizer = wrapperCartoonizer.find('NavLink.cartoonizer-link');
          
expect(linkCartoonizer.props().to).toBe('/frontend/cartoonizer');
});


it('cheking name NavLink Cartoonizer', () => {
const chekingCartoonizer = shallow(<App/>);
const insideCartoonizer = chekingCartoonizer.find('NavLink.cartoonizer-link').text();
              
expect(insideCartoonizer).toBe('Cartoonizer');
});
  
it('should be NavLink  Contact in App', () => {
const wrapperContact = shallow(<App/>);
const linkContact = wrapperContact.find('NavLink.contact-link');
                
expect(linkContact.props().to).toBe('/frontend/contact');
});


it('cheking name NavLink Contact Us', () => {
const chekingContact = shallow(<App/>);
const insideContact = chekingContact.find('NavLink.contact-link').text();
                
expect(insideContact).toBe('Contact Us');
});

it('should be NavLink  Manage in App', () => {
  const wrapperManage = shallow(<App/>);
  const linkManage = wrapperManage.find('NavLink.manage-link');
                  
  expect(linkManage.props().to).toBe('/frontend/manage');
  });
  
  
  it('cheking name NavLink Manage', () => {
  const chekingManage = shallow(<App/>);
  const insideManage = chekingManage.find('NavLink.manage-link').text();
                  
  expect(insideManage).toBe('Manage');
  });
  

