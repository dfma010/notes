const Notes = ({...props}) => {
  return (
    <div key={props.item.id} className="note">
      <div>
        {props.item.title === "" ? "[Sin Titulo]" : props.item.title.substring(0, 20)}
      </div>
      <div>
        <button className="pinButton">{props.item.pinned ? "Pinned" : "Pin"}</button>
      </div>
    </div>
  );
};

export default Notes;
