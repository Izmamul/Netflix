import React from "react";
import ReactDOM from "react-dom";

import {Card} from "./Card";
import "./index.css";
import {Sdata} from "./Sdata";


function ncard(val){
    return(
<Card  imgsrc={val.imgsrc}
sname={val.sname}
title={val.title}
link={val.link} />


    );

}


ReactDOM.render(

<>

<h1 className="heading_style">List of top five Netflix Series 2022</h1>






{Sdata.map(ncard)}
</>,

document.getElementById("root")


);
