import {useEffect, useState} from "react";
import './Comments.css'

export default function Comments() {
    let [commentsList, setCommentsList] = useState([]);


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(response => {
                console.log(response);
                setCommentsList(response);
            });

    }, []);

    return(
        <div className = {'comwrap'}>
            {

                commentsList.map(value => <div>{value.postId} - {value.id} - {value.name} - {value.email} - {value.body}</div>)
            }
        </div>
    );
}