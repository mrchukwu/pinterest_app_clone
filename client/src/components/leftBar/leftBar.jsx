import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <a href="/" className='menuIcon'>
        <img src="/general/pinterest_logo.jpg" alt="" />
        </a>
        <a href="/" className='menuIcon'>
        <img src="/general/home.svg" alt="" />
        </a>
        <a href="/" className='menuIcon'>
        <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className='menuIcon'>
        <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className='menuIcon'>
        <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className='menuIcon'>
        <img src="/general/messages.svg" alt="" />
        </a>
    </div>
  )
}

export default LeftBar