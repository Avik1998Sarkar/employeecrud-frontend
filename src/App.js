import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
    <>
    <h1>CRUD REACT APP</h1>

    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ViewUsers/>} exact={true}/>
      <Route path={"/viewusers"} element={<ViewUsers/>} exact={true}/>
      <Route path={"/adduser"} element={<ViewUsers/>} exact={true}/>
      <Route path={"/updateuser"} element={<ViewUsers/>} exact={true}/>
      <Route path={"/deleteuser"} element={<ViewUsers/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
