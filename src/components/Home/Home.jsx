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
        console.log("item in home: ",item.id);
       setContent(item);
       setId(item.id);
    }

    return <div className={classes.home} onClick={()=>console.log("clicked")} >
       <HomeLeft open={setIsOpen} itemHandler={LeftitemHandler} />
       <HomeRight content={content} clickedItemId={id}  />
       <Modal open={isOpen} onClose={()=>setIsOpen(false)} />

    </div>
}


export default Home;
