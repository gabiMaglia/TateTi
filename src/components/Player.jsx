import { useRef, useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [customName, setCustomName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onChangeName(symbol, customName);
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      onChangeName(symbol, customName);
      setIsEditing(false);
    }
  };
  const handleChangeName = (event) => {
    setCustomName(event.target.value);
  };

  const playerName = !isEditing ? (
    <span className="player-name">{customName}</span>
  ) : (
    <input
      ref={inputRef}
      type="text"
      required
      defaultValue={customName}
      onKeyDown={(e) => e.key === "Enter" && handleEdit()}
      onChange={handleChangeName}
      onBlur={handleBlur}
    />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {playerName}
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
