//https://reacttraining.com/react-router/web/example/basic
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, /*Link,*/ NavLink } from "react-router-dom";
import Page from './Page';
import Header from './Header';
import Manager from './Manager';
import {ThemeContext, themes} from './theme-context';
import ApiService from './apiService';
        
interface IapiService {
	getPages(): object; 
  }

interface IData {
	pages: object;
}

class App extends Component {
  apiService: IapiService;

  constructor(props: object) {
		super(props);
		this.state = {
			pages: [],
			showCreatePageForm: false,
			showEditPageForm: false
		};
		this.apiService = new ApiService();
	}

	componentDidMount() {
		try {
			// console.log('app componentWillMount: ')
			this.fetchPages();
		} catch(err) {
			console.log('app componentWillMount: ' + err.message)
		}
	}

	fetchPages = async () => {
		try {
			const data: any = await this.apiService.getPages()
				// console.log('fetchPages', data.data.pages.data.pages)
				themes.en.pages = data.data.pages.data.pages
				this.setState({
					pages: data.pages
				});

		} catch(err) {
			console.log('fetch Pages error ' + err.message)

		}
	}
	
   /* 
  storePage = (data) => {
	  try {
		this.apiService.storePage(data)
		.then(() => {
		  this.fetchPages()
		  this.toggleShowCreatePageForm()
		})
	  } catch(err) {
	    console.log(err.message)

	  }
  }

  updatePage = (data) => {
	try {
	  this.apiService.updatePage(data)
	  .then(() => {
		this.fetchPages()
		//this.toggleShowEditPageForm(data.id)
		this.setState({
			showEditPageForm: !this.state.showEditPageForm
		});
	  })
	} catch(err) {
	  console.log(err.message)

	}
}


  deletePage = (id) => {
    this.apiService.deletePage(id)
      .then(() => {
        this.fetchPages()
      })
  }

  editPage = (id) => {
    this.apiService.editPage(id)
      .then(() => {
        this.fetchPages()
      })
  }

	toggleShowCreatePageForm = () => {
		this.setState({
			showCreatePageForm: !this.state.showCreatePageForm
		});
	};

	toggleShowEditPageForm = (id) => {
		// load the data for this edit form from the server
		this.apiService.editPage(id).then(({ data }) => {
			console.log('data ', data)
			this.setState({
				page: data,
				showEditPageForm: !this.state.showEditPageForm
			});
	    });
			
	};
*/

  render() {
    return (
       <ThemeContext.Provider value={themes.en}>
          <Header>
          </Header> 
       <Router>
      <div className="container mx-auto px-4 mt-8">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
             <span className="navbar-toggler-icon"></span>
             </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">  
            <NavLink  exact={true} to="/frontend" className="nav-link nav-item homeLink home-link">Home</NavLink>
            <NavLink to="/frontend/solution" className="nav-link nav-item solutionLink solution-link">Solution for Blind People</NavLink>
            <NavLink to="/frontend/birthday" className="nav-link nav-item birthdayLink birthday-link">Birthday Present</NavLink> 
            <NavLink to="/frontend/cartoonizer" className="nav-link nav-item cartoonizerLink cartoonizer-link">Cartoonizer</NavLink>
            <NavLink to="/frontend/contact" className="nav-link nav-item contactLink contact-link">Contact Us</NavLink>
			<NavLink to="/frontend/manage" className="nav-link nav-item manageLink manage-link">Manage</NavLink>
        </div>
        </div>
        </nav> 
        <Route exact path="/" component={Page} />
        <Route exact path="/frontend" component={Page} />
        <Route exact path="/frontend/solution" component={Page} />
        <Route exact path="/frontend/birthday" component={Page} />
        <Route exact path="/frontend/cartoonizer" component={Page} />
        <Route exact path="/frontend/contact" component={Page} />
        <Route exact path="/frontend/header" component={Header} />
		<Route exact path="/frontend/manage" component={Manager} />
        </div>
    </Router>
    </ThemeContext.Provider>
    );
  }
}

export default App;
