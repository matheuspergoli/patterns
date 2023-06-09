import React from 'react'
import { CounterContext } from '../context'

export const useCounter = () => React.useContext(CounterContext)
