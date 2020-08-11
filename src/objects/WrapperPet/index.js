import React from 'react';
import './styles.css';

import baby from '../../img/filhote.png';
import cat from '../../img/gatinho.png';
import puppypet from '../../img/bebe.jpg';

import PicPet from '../../components/PicPet'
import PetAdoption from '../../components/PetAdoptin';
import PetDescription from '../../components/PetDescription';

const WrapperPet = () => (
  <wrapperpet className='wrapperpet'>  
    <PetAdoption />
    <wall className='wall'>
      <PicPet src={baby} description='foto de cachorrinho para adoção' />    
      <PicPet src={cat} description='gatinho pra adoção'/>      
      <PicPet src={puppypet} description='cachorro para adoção'/>     
    </wall>
    <description className='description'> 
      <PetDescription />
      <PetDescription />
      <PetDescription />
    </description>
 </wrapperpet>
)
export default WrapperPet