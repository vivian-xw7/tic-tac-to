import {useState} from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing(true);
    }

    let playerName = (<span className="player-name">{name}</span>);

    if (isEditing) {
        playerName = (<input type="text" />);
    }

    return (
        <li className="player">
            {playerName}

            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>Edit</button>
        </li>
    )
}