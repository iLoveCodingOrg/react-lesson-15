import React from 'react'
import ReactDOM from 'react-dom'
import HeroList from './HeroList'

function App(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <HeroList />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)