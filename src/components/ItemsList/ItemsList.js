import React, { Fragment } from "react";

import "./ItemsList.css";

import ListControls from "../ListControls/ListControls";
import Item from "../Item/Item";

const itemsList = (props) => {
  const items = props.itemsValues.map((item, index) => {
    return (
      <Item
        key={item.itemName + index}
        itemId={index + 1}
        itemName={item.itemName}
        amount={item.amount}
        date={item.date}
        category={item.category}
        itemDeleted={(event) => props.clickedDeleted(index, event)}
        clicked={() => props.descriptionToggle(index)}
      />
    );
  });

  return (
    <Fragment>
      <section className="itemList__container">
        <ListControls openForm={props.clickedOpened} />
        <section className="itemList__tags">
          <span>Id</span>
          <span>Nombre</span>
          <span>Cantidad</span>
          <span>Fecha</span>
          <span>Categoria</span>
          <span></span>
        </section>
        {items}
      </section>
    </Fragment>
  );
};

export default itemsList;
