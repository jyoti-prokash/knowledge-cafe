import './App.css'
import Header from './Components/header/header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex gap-5 justify-between'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
