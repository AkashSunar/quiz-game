import './App.css'
import Category from './Category/Category';
import CategoryCard from './Category/categoryCard';
import Login from './LogInPage/Login';
import DIsplayQuestion from './Question/DIsplayQuestion';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/category' element={<Category />} />
        <Route exact path='/:id' element={<DIsplayQuestion />} />
      </Routes>
     </BrowserRouter>
    // <Category />
    // <CategoryCard />
    
  )
}

export default App
