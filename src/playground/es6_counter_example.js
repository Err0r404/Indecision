// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

let count = 0;
const addOne = () => {
    console.log('Add one');
    count++;
    renderCounterApp();
};
const minusOne = () => {
    console.log('Minus one');
    count--;
    renderCounterApp();
};
const reset = () => {
    console.log('Reset');
    count = 0;
    renderCounterApp();
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};