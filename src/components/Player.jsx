import {useState} from 'react';

export default function Player({initialName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleClick() {
        setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = (<span className="player-name">{playerName}</span>);

    if (isEditing) {
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange} />);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}

                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>{isEditing == true ? "Save" : "Edit"}</button>
            </span>
        </li>
    )
}

// NOTE TO SELF: REVIEW MODULE 82 LIFTING STATE UP