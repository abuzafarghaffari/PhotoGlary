import React , {useState} from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
const [file, setFile] = useState(null);
const [error, setError] = useState(null);
const types =['image/png', 'image/jpeg'];

    const changeHandler =(event)=>{
 let selected = event.target.files[0];

 if(selected && types.includes(selected.type)){
    setFile(selected);
    setError(null);
 } else {
    setFile(null);
    setError('Please select an image file(png/jpeg)');
 }
    }

  return (
    <form>
        <input type="file" onChange={changeHandler}/>
        <div className='output'>
         {error && <div className='error'>{error}</div>}
         {file && <div>{file.name} </div>}
         {file && <ProgressBar file ={file} setFile ={setFile}/>}
         </div>
    </form>
  )
}

export default UploadForm