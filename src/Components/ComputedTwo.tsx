import React from 'react'
import './index.less'
import { add } from '../Utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedOne(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)

  return <p className='computed-one'>{`Hi, I'm computed two, my sum is ${sum}.`}</p>
}

export default ComputedOne