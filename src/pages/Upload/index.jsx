import { useState } from 'react';
import logo from '../../img/Logo-Danasoft.png';

import './index.scss';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleChange = (evt) => {
    setFile(evt.target.files[0]);
  };
  const handleUploadFile = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('filename', file.name);

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const response = await fetch('http://localhost:8080/api/upload/file', payload);
      const data = await response.json();
      console.log(data);
      setImg(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uploadPage">
      <div className="uploadPage__container">
        <img className="uploadPage__img" src={logo} alt="logo" />
        <h2>Upload files</h2>
        {/* <input type="file" name="file" id="file" onChange={handleChange} multiple /*"/> */}
        <input type="file" name="file" id="file" onChange={handleChange} accept="image/*" />
        <button type="button" onClick={handleUploadFile}>
          Subir la imagen
        </button>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default UploadPage;
