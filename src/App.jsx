import {useState, useEffect} from "react";
import {React, useState} from "react";
const App = () => {

    const [counter, setCounter] = React.useState(60);

    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="app">
            <div className="captcha">
                <img className="captcha-img" src={require("./assets/captcha.png")} alt="captcha"/>
                <h4 className="captcha-income">
                    499$
                </h4>
                <h4>
                    {counter}
                </h4>
            </div>
        </div>
    );
}

export default App;
