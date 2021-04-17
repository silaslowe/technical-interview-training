import React, {useState, useEffect} from 'react'
import '../Comps/Board.css';

export const Board = () => {
 const [player, setPlayer] = useState(1)
 const [winningPlayer, setWinningPlayer] = useState(1)
 const [mark, setMark] = useState("X")
 const [winner, setWinner] = useState("")

 const [one, setOne] = useState("")
 const [two, setTwo] = useState("")
 const [three, setThree] = useState("")
 const [four, setFour] = useState("")
 const [five, setFive] = useState("")
 const [six, setSix] = useState("")
 const [seven, setSeven] = useState("")
 const [eight, setEight] = useState("")
 const [nine, setNine] = useState("")

const changePlayer = () =>{
    if (player === 1) {
        setWinningPlayer(2)
    } else {
        setWinningPlayer(1)
    }
}

const outcome = () => {
    if (one !== "" & two !== "" & three !== "" & four !== "" & five !== "" & six !== "" & seven !== "" & eight !== "" & nine !== "") {
        setWinner("Draw. Play Again")
    }
    if (one === two & two === three & one !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (four === five & five === six & five !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (seven === eight & eight === nine & seven !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (one === four & four === seven & one !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (two === five & five === eight & two !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (three === six & six === nine & three !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (one === five & five === nine & one !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    if (three === five & five === seven & three !== "") {
        setWinner(`Player ${winningPlayer} wins!!!`)
    }
    changePlayer()
}

const select = (meth, num) => {
    if (num) {
        return
    }
    meth(mark)

    if (player === 1) {
        setMark("O")
        setPlayer(2)
    } else {
        setMark("X")
        setPlayer(1)
    }
}

const resetGame = () => {
    setOne("")
    setTwo("")
    setThree("")
    setFour("")
    setFive("")
    setSix("")
    setSeven("")
    setEight("")
    setNine("")
    setWinner("")
    setPlayer(1)
    setWinningPlayer(1)
    setMark("X")
}

useEffect(() => {
    outcome()
}, [select])

    return (
    <div className="container">
        <div className="row">
            <div className="square" onClick={() => select(setOne, one)}><p>{one}</p></div>
            <div className="square" onClick={() => select(setTwo, two)}><p>{two}</p></div>
            <div className="square" onClick={() => select(setThree, three)}><p>{three}</p></div>
        </div>
        <div className="row">
            <div className="square" onClick={() => select(setFour, four)}><p>{four}</p></div>
            <div className="square" onClick={() => select(setFive, five)}><p>{five}</p></div>
            <div className="square" onClick={() => select(setSix, six)}><p>{six}</p></div>
        </div>
        <div className="row">
            <div className="square" onClick={() => select(setSeven, seven)}><p>{seven}</p></div>
            <div className="square" onClick={() => select(setEight, eight)}><p>{eight}</p></div>
            <div className="square" onClick={() => select(setNine, nine)}><p>{nine}</p></div>
        </div>

        <h3>{winner}</h3>
        {winner ? <button onClick={() => resetGame()}>Reset</button> : null}
    </div>
    )}