//引入路由模块
import { Route, Redirect, Switch } from "react-router-dom";
//引入你要切换的组件
import Details from './pages/Details/Details';
import Index from './pages/Index/Index';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Purchase from './pages/Purchase/Purchase';
import Settlement from './pages/Settlement/Settlement';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/index" component={Index} />
        <Route path="/list" component={List} />
        <Route path="/login" component={Login} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/settlement" component={Settlement} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Redirect from='/' to='/login' />
      </Switch>
    </div>
  );
}

export default App;
