// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";
// import logo from "./logo.JPG";
// import Basket from "./Basket";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FirstPage from "./FirstPage";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [activeCategory, setActiveCategory] = useState("");
//   const [categories, setCategories] = useState(allCategories);
//   const [cartItems, setCartItems] = useState([]);



//   const filterItems = (category) => {
//     setActiveCategory(category);
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   function showMessage() {
//     alert("Item added to cart");
//   }

//   function onAdd(product) {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//         ),
//         showMessage()); 
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   }

//   function onRemove(product) {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   }

//   return (
//     <Router>
//       <Route exact path="/">
//         <FirstPage />
//       </Route>
//       <Switch>
//         <Route exact path="/sign-in">
//           <SignIn />
//         </Route>
//       </Switch>
//       <Switch>
//       <Route path="/home">
//       <div className="page">
//         <main>          
//         <form action="http://localhost:3000/">
//           <button className="login-page-btn" >Home</button>
//           </form>
//           <section className="menu section">
//             <div className="title">
//               <img className="logo" src={logo} alt="logo" />
//               <h2>Menu List</h2>
              
//               <div className="underline"></div>
//             </div>
//             <div></div>
            
//             <Categories
//               categories={categories}
//               activeCategory={activeCategory}
//               filterItems={filterItems}
//             />
//             <Menu items={menuItems} onAdd={onAdd} onRemove={onRemove} />
//             <div className="basket">
//               <hr></hr>
//             <Basket
//                   cartItems={cartItems}
//                   onAdd={onAdd}
//                   onRemove={onRemove}
//                 />
//             </div>
//           </section>
//         </main>
//       </div>
//       </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;