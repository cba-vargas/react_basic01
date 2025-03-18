import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify'; //https://www.npmjs.com/package/react-toastify
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './example/MyComponent.js';
import ListTodo from './todos/ListTodo.js';
import Nav from './Nav/Nav.js';
import Home from './example/Home.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/todo' element={<ListTodo/>} />
      <Route path='/about' element={<MyComponent/>} />
      </Routes>
        
      </header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </BrowserRouter>
  );
}
export default App;
