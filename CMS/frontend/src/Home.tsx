import React, { Component, /*lazy, Suspense*/ } from 'react';
import './HomeStyles.css';

//const HomeContent = lazy(() => import('./HomeContent'));
//import HomeContent from './HomeContent';

export default class Home extends Component{
  props: any;
  constructor(props: object) {
    super(props)

  }
  render() {
    console.log(this.props.location.pathname)
    return (
<div className="HomeBlock">
<p></p>
<h2 className="titleHome">Home</h2>
<p  className="homeParagraph">The following products and services are offered for our customers:</p>
<ol>
  <li>
  Application which helps blind people to 'see' the surrounding objects with the help of AI-based software.
  </li>
  <li>
  Service which converts your photo into a cartoonized one.
  </li>
  <li>
  Congratulation on the behalf of a cartoon.
  </li>
</ol>
<p></p>
</div>
//<Suspense fallback="<div>... Loading</div>">
//<HomeContent>
//</HomeContent> 
//</Suspense>
);
  }
}


