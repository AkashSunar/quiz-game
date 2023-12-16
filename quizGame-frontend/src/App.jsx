import './App.css'
import Login from './LogInPage/Login';
import DIsplayQuestion from './Question/DIsplayQuestion';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/quiz' element={ <DIsplayQuestion />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App
