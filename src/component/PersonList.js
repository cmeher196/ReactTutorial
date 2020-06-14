import React, { Component } from 'react'
import Person from './Person'

export default class PersonList extends Component {
    render() {
        const nameList=[
            {
                id:1,
                name: "John",
                age: 31, 
                city: "New York"
            },
            {
                id:2,
                name: "Jack",
                age: 30, 
                city: "Old York"
            },
            {
                id:3,
                name: "Jonny",
                age: 20, 
                city: "New Jersey"
            },
            {
                id:4,
                name: "Wiley",
                age: 35, 
                city: "Green Park"
            },
        ]
        // without using props
       // const personList = nameList.map(person=><h1>My name is {person.name}. I am {person.age} years old. I stay at {person.city}</h1>)
       
       //using props
       const personList = nameList.map(person=>
           <Person key={person.id} person={person}/>)
       
       return (
            <div>
                {personList}
            </div>
        )
    }
}
