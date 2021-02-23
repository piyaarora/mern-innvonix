import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserContext from './components/context/UserContext';
import MainPage from './components/MainPage';


function App() {
  const [contextUserData, setContextUserData] = useState({
    token: undefined,
    user: undefined
  });
  
  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{contextUserData, setContextUserData}}>
      <Switch>
        <Route exact path="/"><MainPage/> </Route>
        <Route path="/register"><Register/></Route>
        <Route path="/login"><Login /></Route>
        </Switch>
        </UserContext.Provider>
      </BrowserRouter>
      {/* <Navigation/> */}
    </div>
  );
}

export default App;
