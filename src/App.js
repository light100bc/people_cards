import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.<br/>
//           hi there
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state={
      people:[],
      searchField:''
    };
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({people:users}));    
    }


  handleChange(e){
    this.setState({searchField:e.target.value});
  }

  // handleChange=(e)=>{
  //   this.setState({searchField:e.target.value});
  // }

  render(){
      const {people, searchField}=this.state;
      const filteredPeople=people.filter(person=>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
      <div className="App">
        <h1>People Cards</h1>
        <SearchBox 
        placeholder='search people' 
        handleChange={this.handleChange}
        />
        <CardList people={filteredPeople}>
        </CardList>
      </div>
    );
  }

}

export default App;
