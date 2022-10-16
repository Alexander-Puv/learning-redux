import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDecrementCreator, asyncIncrementCreator } from './countReducer'
import { fetchUsers } from './userReducer'

export const SecondApp = () => {
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => dispatch(asyncIncrementCreator())}>INCREMENT</button>
                <button onClick={() => dispatch(asyncDecrementCreator())}>DECREMENT</button>
                <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
            </div>
            <div>
                {users.map(user =>
                    <div key={user.name}>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    );
}