import "tailwindcss/tailwind.css"
import {Header} from './components/index';
import {Home, Quiz} from './pages/index';
import { Login, Signup} from "./pages/Register";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App bg-green-100 text-gray-600 font-mono">
      <Header/>
      <div className="sm:w-9/12 mx-auto px-3 sm:px-0 pb-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/q/:quizId" element={<Quiz/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<Signup/>}/>   
        </Routes>
      </div>
    </div>
  );
}

export default App;

