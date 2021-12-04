import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {StudentForm} from './components/Form';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {LoadStudent} from './pages';
import './bootstrap.css';

function App() {
  return (
    <div>
      <Router>
        <>
          <Header/>
          <Footer/>
          <Switch>
              <Route path="/" exact component={StudentForm}/>
              <Route path="/load"  exact component={LoadStudent}/>
          </Switch>
       </>
      </Router>
   
    </div>
  );
}

export default App;
