import './mainLayout.css'
import { Outlet } from 'react-router'
import TopBar from '../../components/topBar/topBar'
import LeftBar from '../../components/leftBar/leftBar'

const MainLayout = () => {
    return (
        <div className='app'>
          <LeftBar />
          <div className="content">
            <TopBar />
            <Outlet />
          </div>
        </div>
      )
}

export default MainLayout