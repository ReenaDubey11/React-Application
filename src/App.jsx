import React from 'react';
import Login from './component/logincomponent';
import Home from './component/homecomponent';
const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    );
}

const App = () => {
    const name = 'Peter';
    const age = 10;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
            <Login/>
            <Home/>

        </div>
    );
};

export default App;
