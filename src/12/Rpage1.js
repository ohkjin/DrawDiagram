import React from 'react'
import { useParams } from 'react-router-dom'

export default function Rpage1() {
  const item = useParams().item;
  const emoji = {
    늑대:'🐺',
    여우:'🦊',
    쥐:'🐭',
  }
  return (
    <div>
      Page 1: {emoji[item]}
    </div>
  )
}
