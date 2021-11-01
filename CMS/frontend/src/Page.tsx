import React, { Component } from 'react';
import './BirthdayStyles.css';
import {ThemeContext} from './theme-context';

class Page extends Component {
  props: any;
  constructor(props: object) {
    super(props)
  }

  componentDidMount() {
		try {
      // console.log('componentWillMount birthday: ')
 		} catch(err) {
			console.log('componentWillMount birthday: ' + err.message)
		}
	}


  render() {
    const path = this.props.location.pathname
    
    return (
        <ThemeContext.Consumer>
            { function(value) {
                            
                            const page : any = value.pages.find((item: {url: string}) => item.url === path)
                            // console.log(value.pages)
                            return page && <div>
                                <p>
                                    Language: {value.lang}
                                </p>
                                <h2 className="titleBirthday">{page.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: page.content }}></div>

                            </div>
            }  
            }
        </ThemeContext.Consumer>
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

//Birthday.contextType = ThemeContext

export default Page;
