import React,{ useContext } from 'react'

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

import '../scss/Main.scss';
import { ItemContext } from '../contexts/ItemContext';

const Main = () => {
  const {main} = useContext(ItemContext)

  return ( 
    <main className="main" ref={main}>
      <SectionOne />
      <SectionTwo />
    </main>
   );
}
 
export default Main;