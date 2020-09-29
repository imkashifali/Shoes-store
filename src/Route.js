import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import ProductItems from './components/ProductItems';
import Navbar from './components/Navbar';
import NavBar from './components/Navbar';



function App() {

  return (
    <div>
       <Router>
           <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItems}/>
                <Route path="*" component={ () => <h2>404 Page Not Found.</h2>}/>

            </Switch>
       </Router>
    </div>
  );
}

export default App;
