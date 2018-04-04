import React from 'react'
import Hero from './Hero';

const heros = [
    {
        name: 'Iron Man',
        color: 'red, golden'
    },
    {
        name: 'Superman',
        color: 'blue, red'
    },
    {
        name: 'Batman',
        color: 'gray'
    },
    {
        name: 'Spiderman',
        color: 'red'
    },
    {
        name: 'Super Girl',
        color: 'blue, red'
    },
]

export default class HeroList extends React.Component {
    constructor(){
        super()
        this.state = {
            heros: heros
        }
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Hero List is here
                </div>

                { this.state.heros.map(function(item, index){
                    return <Hero key={index} item={item} />
                }) }
            </div>
        )
    }
}