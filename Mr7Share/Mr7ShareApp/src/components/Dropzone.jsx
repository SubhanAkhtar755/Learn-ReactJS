import {useDropzone} from 'react-dropzone'

import "./index.scss";
function DropZone({title , onDrop}) {
  
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className='DropZone-Box' {...getRootProps()}>
    <input {...getInputProps()} />
   
       {title}

  </div>

  )};
export default DropZone;









