import React, { Component } from 'react';
import './SolutionStyles.css';

class Solution extends Component {
 /* constructor(props){
      super(props);
      this.state = {content: 'Loading'}
  }
  componentDidMount(){
      fetch('/backend/solution')
      .then(function(response){
           return response.json();
       }
       )
       .then((data) => this.setState({content: data.data}))
  }*/

  render() {
    return (
      <div>
        <p></p>
        <h2 className="titleSolution">Solution For Blind People</h2>
        <p>
        The project goal is to create
        <strong> electronic eyes </strong>
         for <strong></strong>
          blind  <strong></strong>
           people  <strong></strong>
            which  <strong></strong>
             will  <strong></strong>
              be  <strong></strong>
              provided  <strong></strong>
               free  <strong></strong>
               of  <strong></strong>
               charge to them.  <strong></strong>
               <strong> Electronic eyes </strong>
                will be an electronic appliance which can function on the basis of the artificial intelligence. Since blind people cannot see, the artificial intelligence can see instead of them and voice the surrounding objects.
<br></br><br></br>
2.2 billion people have a vision impairment or blindness
<br></br>
The majority of people with vision impairment are over the age of 50 years.
<br></br>
Blindness is a very serious problem. It is the inability to see anything even light.
        </p>
        <p>
          <a className="linkSolution" href="https://www.patreon.com/electroniceyes">Support on patreon</a>
        </p>
        <p></p>
      </div>
    //<div>{this.state.content}</div>
    );
  }
}

export default Solution;
