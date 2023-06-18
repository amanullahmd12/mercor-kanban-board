import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="board m-4">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span className="count">{props.board?.cards?.length || 0}</span>
        </p>
        <button className="btn editBtn">
        <Editable
          text="+"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
        </button>
      </div>
      <div className="board_cards custom-scroll ">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Board;
