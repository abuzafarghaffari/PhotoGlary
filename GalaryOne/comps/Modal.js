import React from 'react'
import {motion} from 'framer-motion';

function Modal(props) {
console.log(props.selectedImg);

const handleClick =(event)=>{
    if(event.target.classList.contains('backdrop')){
        props.setSelectedImg(null);
    }

}

  return (
<motion.div className='backdrop' onClick={handleClick}
initial={{opacity:0}}
animate={{opacity:1}}
>
    <motion.img src={props.selectedImg} alt="enlarge" 
    initial={{y:'-100vh'}}
    animate={{y:0}}
    />
</motion.div>
  )
}

export default Modal