import React from "react";

const colors=
[{
    color: "Red",
    style: "red"
},
{
    color: "Green",
    style: "green"
},
{
    color: "Blue",
    style: "blue"
},
{
    color: "Brown",
    style: "brown"
},
{
    color: "Yellow",
    style: "yellow"

},];

const RandomColors =  (arr) => {
    const randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem;
};


function Buttons(props){
    let butonClass = "renkliButon ";
    const butonColor = RandomColors(colors);;
    butonClass += butonColor.style;
    
    return(
        <button className={butonClass} onClick={(e)=>{
            e.preventDefault();
            props.renkDegistirme(butonColor);
        }}>

            {butonColor.color} Button
        </button>
    );
        
}

export default Buttons;