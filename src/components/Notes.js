const Notes = ({ ...props }) => {
  function handlePinned(item, index) {
    props.onHandlePinned(item, index);
  }

  function handleClick(item, e) {
    props.onHandleSelectNote(item, e);
  }

  return (
    <div
      key={props.item.id}
      className="note"
      onClick={(e) => handleClick(props.item, e)}
    >
      <div>
        {props.item.title === ""
          ? "[Sin Titulo]"
          : props.item.title.substring(0, 20)}
      </div>
      <div>
        <button
          className="pinButton"
          onClick={() => handlePinned(props.item, props.index)}
        >
          {props.item.pinned ? "Pinned" : "Pin"}
        </button>
      </div>
    </div>
  );
};

export default Notes;
