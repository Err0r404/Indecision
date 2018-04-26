// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        };
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert("Choose "+option);
    }

    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hand of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>

                {
                    this.props.options.map((option) => {
                        return <Option key={option} text={option}/>;
                    })
                }

            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        if (option) {
            console.log(option);
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add new option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));