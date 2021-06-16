import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';


  
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavMenu from './components/NavMenu';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Cart/>
        <NavMenu/>
        <Switch>
        <Route exact path="/" > 
          <HomePage />
        </Route>
        <Route path = "/products/:handle">
          <ProductPage />
        </Route>
        <Route path = "/about">
          <About />
        </Route>     
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
