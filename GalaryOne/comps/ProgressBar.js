import React ,{useEffect} from 'react'
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

function ProgressBar(props) {
const {url, progress} = useStorage(props.file);
console.log(progress,url);
useEffect(()=>{
    if(url){
        props.setFile(null);
    }
},[url,props.setFile]);

  return (
    <motion.div className='progress-bar'
    initial={{width:0}}
    animate={{width: progress +'%'}}
    >
    </motion.div>
  )
}

export default ProgressBar