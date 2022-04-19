import React from "react";
//import"./Button.css"
import styled from "styled-components";
import 'antd/dist/antd.css';


const Button=styled.button`
    border:${(props) => ( props.type === "primary" ? "dashed" :"1 px solid black" )};
    background:${(props)=>(props.type==="backgr" ? "rgb(36,144,254)":"white" )};
    border:${(props)=>(props.type==="Text" ? "none" :"1px solid black"  )};
   color:${(props)=>(props.type==="Link"?"rgb(36,144,254)":"black")};
    border-radius:7px;
    margin:10px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; 
    }
`;
export  {Button}


