import React from 'react'

const Hello = (props) => {
  return (
    <>
        <h1>Hay Nama saya adalah {props.name}</h1>
        <h2>Saya Kuliah di {props.university}</h2>
        <p>Saya mengambil jurusan {props.major}</p>
    </>
  )
}

export default Hello