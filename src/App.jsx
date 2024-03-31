import { Routes, Route } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Layout/AppLayout'
import { Login } from './Pages/Login/login'
import { Home } from './Pages/Home/home'
import { Category } from './Pages/category/category'
import { CategoryPage } from './Pages/category/categoryPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/app' element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path='category' element={<Category />} />
        <Route path='categorypage' element={<CategoryPage />} />
      </Route>

    </Routes>
  )
}

export default App
