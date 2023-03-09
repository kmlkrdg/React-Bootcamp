import {useState, useEffect } from "react";
import React from "react";

function Users() {

    const [users, setUSers] = useState([]);

    useEffect(() => {
    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((number) => number + 2)
            .then((number) => console.log(number));
    
}, [])

    return (
        <div>
            Users
 
            loading...
        </div>
        
        users.map((user)) => (
            <div key={user.id}>{user.name}</div>
        ))
        }
    
}

export default Users;