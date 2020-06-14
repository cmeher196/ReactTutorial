import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h1>My name is {person.name}. I am {person.age} years old. I stay at {person.city}</h1>
        </div>
    )
}
