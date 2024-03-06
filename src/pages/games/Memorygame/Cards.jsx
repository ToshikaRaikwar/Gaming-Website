import { useState } from 'react';
import Card from './Card';
import './Memory.css'
import html from './html.png';
import css from './css.png';
import vue from './vue.png';
import js from './js.png';
import react from './react.png';
import scss from './scss.png';
import angular from './angular.png';
import node from './node.png';
function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: html, stat: "" },
        { id: 1, img: html, stat: "" },
        { id: 2, img: css, stat: "" },
        { id: 2, img: css, stat: "" },
        { id: 3, img: js, stat: "" },
        { id: 3, img: js, stat: "" },
        { id: 4, img: scss, stat: "" },
        { id: 4, img: scss, stat: "" },
        { id: 5, img: react, stat: "" },
        { id: 5, img: react, stat: "" },
        { id: 6, img: vue, stat: "" },
        { id: 6, img: vue, stat: "" },
        { id: 7, img: angular, stat: "" },
        { id: 7, img: angular, stat: "" },
        { id: 8, img: node, stat: "" },
        { id: 8, img: node, stat: "" }
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState(-1);

    function check(current) {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);
        }
    }

    return (
        <div className="newcontainer">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}

export default Cards;
