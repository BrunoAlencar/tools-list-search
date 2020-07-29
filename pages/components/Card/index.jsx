import React from 'react'

const Card = ( { props: { id, title, link, description, tags } }) => {
    return (
        <div >
            <div>
                <h3><a href={ link }>{ title }</a></h3>
                <button onClick={() => console.log(id)}>X Remover</button>
            </div>
            <p>{ description }</p>
            <span><b>{ tags ? tags.join(' #') : null }</b></span>

        </div>
    )
}

export default Card;