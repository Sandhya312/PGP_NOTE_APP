

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ open, onClose }) => {
  const [grp_name, setGrpName] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const [color, setColor] = useState('black');
  const [groups, setGroup] = useState([]);

  useEffect(() => {
    // Load data from localStorage
    const Local_Storage_groups = JSON.parse(localStorage.getItem("groups"));

    if (Local_Storage_groups) {
      setGroup(Local_Storage_groups);
    }
  }, []);

  if (!open) return null;

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const group_name_handler = (e) => {
    if (e.target.value.trim().length !== 0) {
      setGrpName(e.target.value);
      setIsDisable(true);
    } else {
      setGrpName('');
      setIsDisable(false);
    }
  }

  const group_icon = (inputString)=>{
    const strArr = inputString.split(" ");
    const initialChar = strArr.map((item)=>item[0].toUpperCase());
    const icon = initialChar.join("");
    return icon;
  }

  const handleCreate = () => {
    let group = { "id":groups.length, "name": grp_name,"icon":group_icon(grp_name) ,  "icon_color": color,"content":[], };
    setIsDisable(false);
    setGrpName('');
    setGroup([...groups, group]);

    // Update localStorage with the new data
    localStorage.setItem("groups", JSON.stringify([...groups, group]));

    onClose();
  }

  const color_handler = (color) => {
    setColor(color);
  }

  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay} onClick={()=>{setIsDisable(false); onClose()}} />
      <div className={classes.modal_styles}>
        <div className={classes.create_group}>
          <h4>Create New Notes group</h4>
        </div>
        <div className={classes.group_name}>
          <h6>Group Name</h6>
          <input type="text" placeholder="Enter your group name..." onChange={(e) => group_name_handler(e)} value={grp_name} />
        </div>
        <div className={classes.group_color}>
          <h6>Choose Colour</h6>
          <div className={classes.color_selection}>
            {colors.map((item) => {
              return (
                <div
                  key={item}
                  onClick={() => color_handler(item)}
                  style={{
                    backgroundColor: item,
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className={classes.buttonParent}>
          <button disabled={!isDisable} onClick={handleCreate}>Create</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
