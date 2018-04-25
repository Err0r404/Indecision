// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
    title: "Indecision",
    subtitle: "React app",
    options: []
};


const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert("Choose "+option);
};

const appRoot = document.getElementById('app');

const numbers = [1, 2, 3, 4, 5];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "There are " + app.options.length + " options:" : "No options"}</p>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={onRemoveAll}>Remove all options</button>

            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Add new option"/>
                <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
render();