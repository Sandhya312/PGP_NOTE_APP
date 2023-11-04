/* eslint-disable no-unused-vars */

import { useState } from 'react';
import classes from './Home.module.css';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import Modal from '../Modal/Modal';
const Home = () =>{
    const [content,setContent] = useState({});
    const [isOpen,setIsOpen] = useState(false);
   const [id,setId] = useState(0);
    const LeftitemHandler=(item)=>{
       setContent(item);
       setId(item.id);
    }

    return <div className={classes.home} >
       <HomeLeft open={setIsOpen} isOpen={isOpen} itemHandler={LeftitemHandler} />
       <HomeRight content={content} LeftitemHandler={LeftitemHandler} clickedItemId={id}  />
       <Modal open={isOpen} onClose={()=>setIsOpen(false)} />

    </div>
}


export default Home;
