import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl font-bold">Count: {state.count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className={`px-4 py-2 rounded text-white ${
            state.count === 0 ? 'bg-gray-400' : 'bg-red-500'
          }`}
          disabled={state.count === 0}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {state.count === 10 && (
        <p className="text-green-600 text-xl font-medium">🎉 You reached 10!</p>
      )}
    </div>
  );
}

export default CounterWithReducer;
