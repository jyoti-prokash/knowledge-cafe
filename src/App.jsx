import './App.css'
import Header from './Components/header/header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
  }
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex gap-5 justify-between'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
