import React,{ useContext } from 'react'

import SectionOneW from "./SectionOneW";
import SectionTwoW from './SectionTwoW';

import '../scss/Main.scss';
import { ItemContext } from '../contexts/ItemContext';

const MainW = () => {
  
  const {mainW} = useContext(ItemContext)

  return ( 
    <main className="main" ref={mainW}>
      <SectionOneW />
      <SectionTwoW />
    </main>
   );
}
 
export default MainW;