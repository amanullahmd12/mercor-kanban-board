import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import Board from '../Board/Board';
import Editable from '../Editabled/Editable';
import Title from "./Title";

import addBoard from "../../Assets/body-icons/addBoard.svg"
import fourDot from "../../Assets/body-icons/fourDots.svg"
import demo from "../../Assets/body-icons/demo.svg"


const Body = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  
  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });



  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);





 
  return (
    <div>
    <Navbar/>
    <hr/>
    <Title/>
  
    <div className="app">
      <div className="app_boards d-flex ">
        {boards.map((item) => (
          <Board
            key={item.id}
            board={item}
            addCard={addCardHandler}
            removeBoard={() => removeBoard(item.id)}
            removeCard={removeCard}
            dragEnded={dragEnded}
            dragEntered={dragEntered}
            updateCard={updateCard}
          />
        ))}   
      </div>
    </div>
    <div className="app_boards_last">
    <Editable
      displayClass="app_boards_add-board"
      editClass="app_boards_add-board_edit"
      placeholder="Enter Board Name"
      text="Add New Board"
      buttonText="Add Board"
      onSubmit={addboardHandler}
    />
    <p>To see all the functionalty of kanban board first add new board or no. of complete boards you want to add.</p>
    <p>It exactly looks like this</p>
    <img src={demo} width="720px" />
  </div>
    </div>
  )
}

export default Body