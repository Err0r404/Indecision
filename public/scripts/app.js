"use strict";

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: "Indecision",
    subtitle: "React app",
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    alert("Choose " + option);
};

var appRoot = document.getElementById('app');

var numbers = [1, 2, 3, 4, 5];

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? "There are " + app.options.length + " options:" : "No options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove all options"
        ),
        React.createElement(
            "form",
            { action: "", onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option", placeholder: "Add new option" }),
            React.createElement(
                "button",
                null,
                "Add"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
render();
