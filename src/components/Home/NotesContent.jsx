/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import classes from "./NotesContent.module.css";
import send from "../../assets/send.png";
import { useEffect, useState } from "react";

const NotesContent = (props) => {
  const [localStorageItems, setLocalStorageItems] = useState([]);
  const [noteContent, setNoteContent] = useState([]);

  // useEffect(() => {
  //   let content = JSON.parse(localStorage.getItem("groups"));
  //   if (props.id != 0) {
  //     console.log("content", content[props.id].content, "propd id", props.id);
  //     let selectGroup = content[props.id].content;
  //     console.log("selectedgroup", selectGroup);

  //     setLocalStorageItems(selectGroup);
  //   }
  // }, [props.id]);
  useEffect(() => {
    let content = JSON.parse(localStorage.getItem("groups"));
    if (props.id != 0 && content[props.id] && content[props.id].content) {
      console.log("content", content[props.id].content, "propd id", props.id);
      let selectGroup = content[props.id].content;
      console.log("selectedgroup", selectGroup);
  
      setLocalStorageItems(selectGroup);
    }
  }, [props.id]);
  

  console.log("local items,", localStorageItems);

  const noteSubmited = (e) => {
    let content = JSON.parse(localStorage.getItem("groups"));
    e.preventDefault();
    const textarea = document.querySelector("textarea[name='notes']");
    const currentDateTime = new Date(); // Create a new Date object with the current date and time
    const currentTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const currentDate = currentDateTime.toLocaleDateString([], {  month: 'long',day: 'numeric', year: 'numeric' });
  
    const noteText = {
      body: textarea.value,
      date: currentDate,
      time: currentTime,
    };

    content[props.id].content=[noteText,...content[props.id].content];

    console.log("content notetext,",content);

    localStorage.setItem("groups",JSON.stringify(content));


    console.log("note submitted", noteText);
    setNoteContent([...noteContent,noteText]);
    
  console.log("usestate items,", noteContent);
    // Now you can do something with the `noteText` value, like saving it to state or sending it to the server.
  };

  return (
    <div className={classes.notesContainer}>
      <div className={classes.note_header}>
        <div className={classes.icon}>
          <h4>{props.body.icon} </h4>{" "}
        </div>
        <div className={classes.note_name}>
          <p> {props.body.name} </p>
        </div>
      </div>

      <div className={classes.notes}>
        {localStorageItems.map((item, i) => {
          return (
            <div className={classes.note1} key={i}>
              <div className={classes.time}>
                <p>{item.time}</p>
                <p> {item.date} </p>
              </div>

              <div className={classes.content}>
                <p>{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.notes_input}>
        <textarea
          name="notes"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your text here....."
        ></textarea>
        <button className={classes.send_btn} onClick={(e) => noteSubmited(e)}>
          <img src={send} alt="send"  />
        </button>
      </div>
    </div>
  );
};

export default NotesContent;
