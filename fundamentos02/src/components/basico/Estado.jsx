import React, { useState } from 'react';

export default props => {
    const [curso, setCurso] = useState('Desenvolvimento de sistemas')
    const[aluno, setAluno] = useState('Bartholomew Jojo Simpson')

    return(
        <div>
            <h3>Curso: {curso}</h3>
            <h3>Aluno: {aluno}</h3>
        </div>
    )
}