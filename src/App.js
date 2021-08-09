import { useState } from "react";
import "./App.css";

import Panel from "./components/Panel";
import Menu from "./components/Menu";
import List from "./components/List";
import Notes from "./components/Notes";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [items, setItems] = useState([]);
  const [actualIndex,setActualIndex] = useState(-1);

  const handleClick = () => {
    const note = {
      id: items.length,
      title: "",
      text: "# Hola a todos",
      pinned: false,
      created: Date.now(),
    };

    // "...items" significa agregar todo lo que ya existe en el array items
    setItems([...items, note]);
  };

  return (
    <div className="App container">
      <Panel>
        <Menu handleClick={() => handleClick()} />
        <List>
          {items.map((item, index) => {
            return (
              <Notes
                item={item}
                key={item.id}
                index={index}
                onHandlePinned={handlePinned}
                onHandleSelectNote={handleSelectNote}
              />
            );
          })}
        </List>
      </Panel>

      <div>
        <Editor />
        <Preview />
      </div>
    </div>
  );
}

export default App;
