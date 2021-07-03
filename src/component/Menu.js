import React, {useState} from 'react'
import classNames from 'classnames';

const Menu = () => {
  const [over,setOver] = useState(false);
  const onMouseOver = () =>{
    setOver(!over)
  }
  return (
    <>
      <div className='menu_box'>
        <button>HOME</button>
        <button>THE BOYZ</button>
        <button className='discography' onMouseOver={onMouseOver} onMouseOut={onMouseOver}>DISCOGRAPHY &#9660;</button>
        <button>PHOTO &#9660;</button>
        <button>VIDEO</button>
        <button>NOTICE</button>
        <button>SCHEDULE</button>
      </div>
      <div className={classNames('drop_menu',{view_drop:over})} onMouseOver={onMouseOver} onMouseOut={onMouseOver}>
        <button>DRIFT</button>
      </div>
    </>
  )
}

export default Menu
