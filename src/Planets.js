import React, { Component } from 'react';

class Planets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            planets: []
        };
    }


    loadData() {
    fetch(`https://swapi.co/api/planets`)
        .then(resp => resp.json()) 
        .then(planets => {
            console.log(planets.results[0]);
            this.setState ({
                planets: planets.results,
            });
        });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const planet = this.state.planets.map(planet => {
            console.log(this.state.planets.name)
            console.log(this.state.planets)
            return (
                <div className="thePlanets"> 
                <p>Name: {planet.name} </p>
                <p>Climate: {planet.climate} </p>
                <p>Population: {planet.population}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>URL: {planet.url} </p>
            </div>
            )
        }) 
        return (
            <div className="planetSection">
                {planet}
            </div>
            
        )
    };
}

export default Planets