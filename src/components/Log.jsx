const Log = ({log}) => {
  return (
    <ol id="log"> 
        {log.map((moveLog, logIndex) => 
            <li key={logIndex}>
                <p>{moveLog.playerName}</p>
                <p>Fila - {moveLog.square.row + 1} Columna - {moveLog.square.col + 1}  </p>
            </li>    
        ) }
    </ol>
  )
}

export default Log