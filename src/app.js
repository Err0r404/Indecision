// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hand of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <p>Options here</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));