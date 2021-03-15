import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Search from './components/Search';
import About from './components/About';
import Detail from './components/Detail';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/search" component={Search}/>
          <Route path="/detail" component={Detail}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
