const Log = ({log}) => {
  return (
    <ol id="log"> 
        {log.map((moveLog, logIndex) => 
            <li key={logIndex}>
                <p>Jugador: {moveLog.player}</p>
                <p>Fila - {moveLog.square.row} Columna - {moveLog.square.col} </p>
            </li>    
        ) }
    </ol>
  )
}

export default Log