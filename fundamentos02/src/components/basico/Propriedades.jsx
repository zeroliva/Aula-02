import React from 'react';

export default function Propriedades(props) {
    return(
        <div>
            <h2>Nome: { props.nome }{ props.sobrenome }</h2>
            <h3>Idade: { props.idade }</h3>
        </div>
    )
}