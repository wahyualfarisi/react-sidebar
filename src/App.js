import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Report from './pages/Report';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
         <Navbar />
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/reports" component={Report} />
            <Route path="/products" component={Products} />
         </Switch>
      </Router>
    </>
  );
}

export default App;
