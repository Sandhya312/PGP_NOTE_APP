/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import classes from "./HomeRight.module.css";
import pocket_img from "../../assets/pocket_notes.svg";
import lock from "../../assets/encrypt.png";
import NotesContent from "./NotesContent";
import { useEffect, useState } from "react";



const HomeRight = (props) => {
  //   console.log("props data: ", props.content);

  const [noteContent, setNoteContent] = useState(null);

console.log("id in right",props.clickedItemId);

  useEffect(()=>{
    if (Object.keys(props.content).length>0) {
        console.log(" if", props.content);
    
        setNoteContent(
        <NotesContent body={props.content} id={props.clickedItemId} />
        );

        console.log(" if", props.content);
      }else{
        setNoteContent(
            <>
            <div className={classes.notes_content}>
              <img src={pocket_img} alt="pocket_img" />
              <h1>Pocket Notes</h1>
              <p>
                Send and receive messages without keeping your phone online. Use
                Pocket Notes on up to 4 linked devices and 1 mobile phone
              </p>
            </div>
            <div className={classes.encryption}>
              <img src={lock} alt="lock" />
              <p>end-to-end encrypted</p>
            </div>
          </>
        )
      }


  },[props.content,props.clickedItemId]);

  //   let notesContent = (

  //   );

  console.log("before if", props.content);



  console.log("after if", noteContent);

  return <div className={classes.right}>{noteContent}</div>;
};

export default HomeRight;
