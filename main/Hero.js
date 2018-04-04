import React from 'react'

export default function Hero(props) {
    return (
        <div className="panel-body">
            {props.item.name}  &nbsp;
            <span className="label label-info">
                {props.item.color}
            </span>
        </div>
    )
}