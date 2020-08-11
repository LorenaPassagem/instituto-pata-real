import React from 'react';
import FindPet from '../../components/FindPet';
import FindOther from '../../components/FindOther';
import './styles.css';

const WrapperButton = () => (
   <wrapperbutton className='wrapperbutton'> 
    <FindPet description="find dog" />
    <FindPet description="find cat" />
    <FindOther description="find other pet" />
  </wrapperbutton>  
)
export default WrapperButton