import "tailwindcss/tailwind.css"
import {Header} from './components/index';
import {Home} from './pages/index';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App h-full w-full bg-green-100 text-gray-600 font-mono">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

