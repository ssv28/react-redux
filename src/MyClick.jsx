import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement} from './CounterReducer'
import { inceByfive } from './NewReducer'


const MyClick = () => {
    const data = useSelector(state => state.counter.value)
    const val = useSelector(state => state.newaction.value)

    const dispatch = useDispatch ()
    
    return (
        <div>
            <h1>{data}</h1>
            <h1>{val}</h1>
            <button onClick = {() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch (inceByfive())}>ince 5</button>
        </div>
    )
}

export default MyClick