import { useState,useEffect} from "react";
import classes from "./HomeLeft.module.css";


const HomeLeft = (prop) => {

  const [items, setItems] = useState([]); 

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("groups"));
    if (localStorageItems) {
      setItems(localStorageItems);
    }
  }, []);

  return (
    <div className={classes.left}>
      <h3>Pocket Notes</h3>
      <div className={classes.btnDiv}>
        <button onClick={()=>prop.open(true)} >+ Create Notes group </button>
      </div>
      <div className={classes.item_container}>
        {items.map((item) => {
          return (
            <div
              className={classes.item}
              key={item.id}
              onClick={() => prop.itemHandler(item)}
            >
              <div className={classes.icon} style={{backgroundColor:item.icon_color}} >
                <h4>{item.icon} </h4>{" "}
              </div>
              <div className={classes.note_name}>
                <p> {item.name} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeLeft;

