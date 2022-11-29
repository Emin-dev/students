import React from 'react'
import List from './List'

export default function Todo({todos}) {
  return (
    todos.map(list =>  {
      return <List list={list} />
    })
    )
}
