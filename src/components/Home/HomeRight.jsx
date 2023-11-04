/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import classes from "./HomeRight.module.css";
import pocket_img from "../../assets/pocket_notes.svg";
import lock from "../../assets/encrypt.png";
import NotesContent from "./NotesContent";

const DefaultContent = () => {
  return (
    <div className={classes.notes_defaultContent}>
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
    </div>
  );
};

const HomeRight = (props) => {
  return (
    <div className={classes.right}>
      {Object.keys(props.content).length > 0 ? (
        <NotesContent body={props.content} LeftitemHandler={props.LeftitemHandler} id={props.clickedItemId} />
      ) : (
        <DefaultContent />
      )}
    </div>
  );
};

export default HomeRight;
