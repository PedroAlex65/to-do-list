import styled from "styled-components";

import { FaRocketchat } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const ToDoList = styled.div`
background: white;
padding: 30px 20px;
border-radius: 5px;

ul{
    padding: 0;
    margin-top: 60px;
}

`

export const Button = styled.button`
background: #8052EC;
border-radius: 5px;
height: 40px;
border: none;
color: white;
line-height: 2px;
font-size:17px;
Width:130px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}

`

export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
height: 40px;
margin-right:10px;
Width:340px;
margin-right: 40px;



`

export const ListItem = styled.div`
border: 2px solid rgba(209, 211, 212, 0.4);
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
background: ${ props => props.infinished ? '#e8ff8b' : '#e4e4e4'};
padding: 0 10px;
Width:500px;

li{
    list-style: none;
}

`

export const Trash = styled(FaRocketchat)`
cursor: pointer;
`

export const Check = styled(FcEmptyTrash)`
cursor: pointer;
`