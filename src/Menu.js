import React from "react";

function Menu ({ items, onAdd }) {

  
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <button  onClick={() => onAdd(item)} className="add-btn" type="add">Add to Order</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

