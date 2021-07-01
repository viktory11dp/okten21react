import {useEffect, useState} from "react";
import './Users.css'

export default function Users(){

    let [usersList, setUsersList] = useState([]);


      useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(response => {
            console.log(response);
            setUsersList(response);
        });

       }, []);

    return(
        <div className={'usWrap'}>
            {
                usersList.map(value => <div>{value.id} - {value.name}</div>)
            }
        </div>
    );
}