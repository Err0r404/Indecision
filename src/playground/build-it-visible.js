const app = {
    title: "Visibility Toggle",
    visible: false,
    details: "Here are the details",
};

const toggleVisiblity = () => {
    app.visible = !app.visible;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisiblity}>
                {app.visible ? "Hide details" : "Show details"}
            </button>
            {app.visible && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};
render();