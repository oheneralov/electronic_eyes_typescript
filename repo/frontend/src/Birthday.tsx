import React, { Component } from 'react';
import './BirthdayStyles.css';
import {ThemeContext} from './theme-context';

class Birthday extends Component {
  constructor(props: object) {
    super(props)

  }

  componentWillMount() {
		try {
			console.log('context ', this.context)
		} catch(err) {
			console.log('componentWillMount birthday: ' + err.message)
		}
	}


  render() {
    return (
      <div>
        <p>
        Language: {this.context.lang}
        </p>
      <h2 className="titleBirthday">Birthday Present</h2>
      <p>Just imagine how your child or friend will be happy if he/she will be congratulated by a cartoon heroe in Youtube.</p>
     <p>It will be really cool!</p>
     <p>Contact us and it will be done just for 10$.</p>
     <p></p>
      </div>
    /*<div>
               Language: {this.context.lang}
              
<div>
    <form action="/backend/upload" enctype="multipart/form-data" method="post">
      <label for="category">Category</label>
      <div><input name="category" id="category" type="text" placeholder="category"/></div>
      <div><input type="file" name="file-to-upload"/></div>
      <div><input type="submit" value="Upload"/></div>
    </form>
</div>
           </div>*/
           );
  }
}

Birthday.contextType = ThemeContext

export default Birthday;
