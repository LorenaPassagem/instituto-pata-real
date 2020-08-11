import React from 'react';
import './styles/setting/colors.css';
import './styles/setting/reset.css';
import './styles/setting/sizing.css';

import Header from './objects/Header';
import WrapperButton from './objects/WrapperButton';

import Banner from './components/Banner';
import WrapperPet from './objects/WrapperPet';
import WrapperFooter from './objects/WrapperFooter';


const App = () => (
<>
  <Header  /> 
  <Banner />
  <WrapperButton />
  <WrapperPet />
  <WrapperFooter />
  
</>
)

export default App;
