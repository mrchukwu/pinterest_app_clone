import './galleryItem.css'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
        <img src={item.media} alt="media image" />
        {/* Math.ceil(item.height/100) = result */}
        {/* Math.ceil(1200/100) = 12 */}
    </div>
  )
}

export default GalleryItem;