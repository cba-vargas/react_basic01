import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent.js';
import ListTodo from './todos/ListTodo.js';
import { ToastContainer } from 'react-toastify'; //https://www.npmjs.com/package/react-toastify
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo App width react.js
        </p>
        {/* <MyComponent/> */}
        <ListTodo/>
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
  );
}
export default App;
