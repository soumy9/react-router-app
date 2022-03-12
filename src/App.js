import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDeatils';
function App() {
  return (
    <React.Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
