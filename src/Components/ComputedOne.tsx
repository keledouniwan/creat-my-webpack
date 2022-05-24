import React, {useEffect} from 'react'
import './index.less'
import { add } from '../Utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedOne(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)
  useEffect(() => {
    console.log('effect')
    fetch('/api/facts/random?animal_type=cat&amount=2').then(res => {
      console.log(123321,res)
    })
  })
  return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default ComputedOne