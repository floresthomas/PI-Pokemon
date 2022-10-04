import React from 'react';
import s from "./Loading.module.css"

const Loading = () => {
    let url  = 'https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'
  return (
    <div className={s.loading}>
      <img className={s.pikachu} src={url} alt="loading" width='300px' heigth='200px' />
    </div>
  )
}

export default Loading