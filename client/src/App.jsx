import './app.css'
import Gallery from './components/gallery/gallery'
import TopBar from './components/topBar/topBar'
import LeftBar from './components/leftBar/leftBar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  )
}

export default App