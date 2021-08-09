
const Menu = ({...props}) => {

    const nuevaNota = () => {
        props.handleClick(); 
    }

    return (
        <div className="menu">
          <input className="search" placeholder="search..." />
          <button className="btn" onClick={(e) => nuevaNota()}>
            Nueva Nota
          </button>
        </div>
    )
}

export default Menu;