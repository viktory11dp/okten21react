import {useEffect, useState} from "react";

export default function Users(){

   // // let usersList = [];
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json())
    //     .then(value => {
    //         console.log(value);
           // // usersList = value;
    //});

    let [usersList, setUsersList] = useState([]);
      //////let state = useState([]);
      //////let usersList = state[0];
      //////let setUsersList = state[1];

      useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(response => {
            console.log(response);
            setUsersList(response);
        });

       }, []);

    return(
        <div>
            {
                // // usersList.map(value => <div>user</div>)
                usersList.map(value => <div>{value.id} - {value.name}</div>)
            }
        </div>
    );
}