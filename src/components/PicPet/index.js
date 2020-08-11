import React from 'react';
import './styles.css';

const PicPet = ({src, description='imagem de bicho para adoção'}) => (
   <> 
    <img className='picpet' src={src} alt={description}></img>
    
  </>  
)
export default PicPet;