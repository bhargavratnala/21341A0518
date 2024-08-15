import { useState } from 'react'
import Nav from './Nav'
import Product from './Product';
import './App.css'

function App() {

  let [company, setCompany] = useState('AMZ');
  let [category, setCategory] = useState('Phone');

  let changeCompany = (company) => {
    setCompany(company)
  }

  let changeCategory = (category) => {
    setCategory(category)
  }

  return (
    <>
      <Nav setCategory={changeCategory} setCompany={changeCompany}/>
      <Product company={company} category={category} />
    </>
  )
}

export default App
