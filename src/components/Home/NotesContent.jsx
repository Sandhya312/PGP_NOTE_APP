/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import classes from "./NotesContent.module.css";
import send from "../../assets/send.png";

const NotesContent = (props) => {
  const noteSubmited = (e) => {
    e.preventDefault();
    const textarea = document.querySelector("textarea[name='notes']");
    const currentDateTime = new Date();
    const currentTime = currentDateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const currentDate = currentDateTime.toLocaleDateString([], {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const noteText = {
      body: textarea.value,
      date: currentDate,
      time: currentTime,
    };

    //Storing in local storage
    let content = JSON.parse(localStorage.getItem("groups"));
    content[props.id].content = props.body.content;
    localStorage.setItem("groups", JSON.stringify(content));
    textarea.value = "";

    //Storing in state
    let newObject = { id: 0, name: "", icon: "", icon_color: "", content: [] };
    newObject.content = [noteText, ...props.body.content];
    newObject = {...newObject, id: props.body.id, name: props.body.name, icon: props.body.icon, icon_color: props.body.icon_color}

    props.LeftitemHandler(newObject);
  };

  return (
    <div className={classes.notesContainer}>
      <div className={classes.note_header}>
        <div
          className={classes.icon}
          style={{ backgroundColor: props.body.icon_color }}
        >
          <h4>{props.body.icon} </h4>{" "}
        </div>
        <div className={classes.note_name}>
          <p> {props.body.name} </p>
        </div>
      </div>

      <div className={classes.notes}>
        {props.body.content.map((item, i) => {
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
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default NotesContent;
