import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [searchval , setSearchval] = useState('')

  const saveValue = (e)=>{
    const searchedVal = e.target.value
    setSearchval(searchedVal)
  }

  return (
    <>
    <div className='Search'>
      <h1 className='searchheading'>Search Here</h1>
      <input type="text" className='search' placeholder='Search' onChange={saveValue}/>
      <h2>The searched value is: {searchval}</h2>
    </div>
    </>
  )
}

export default App



//Note
//First create simple search bar
//take the input of the user using onChange function
//And then store it in the state using useState