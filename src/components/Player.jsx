import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
    const [customName, setCustomName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing((prev) => !prev)
    }

    const handleChangeName = (event) => {
        setCustomName(event.target.value)
    }

    const playerName =  !isEditing ? <span className="player-name">{customName}</span> : <input type="text" required defaultValue={customName} onChange={handleChangeName} />

    return (
    
      <li className={isActive? 'active' : undefined}>
        <span className="player">
          { playerName }
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
      </li>

  );
};

export default Player;
