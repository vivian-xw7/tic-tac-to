import {useState} from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing(!isEditing);
    }

    let playerName = (<span className="player-name">{name}</span>);

    if (isEditing) {
        playerName = (<input type="text" required value={name} />);
    }

    return (
        <li className="player">
            {playerName}

            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEditing == true ? "Save" : "Edit"}</button>
        </li>
    )
}