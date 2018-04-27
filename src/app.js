// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        // Fetching data from localStorage
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options: options}));
            }
        }
        catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');

        // Saving data to localStorage if necessary
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        console.log('Delete ', optionToRemove);

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert("Choose " + option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {
        const subtitle = "Put your life in the hand of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['Take a break', 'Keep working']
};

// Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

/*
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
*/

// Stateless functional component
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
};

// Stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>

            {props.options.length === 0 && <p>Please add an option to get started</p>}

            {
                props.options.map((option) => {
                    return <Option key={option} text={option} handleDeleteOption={props.handleDeleteOption}/>;
                })
            }

        </div>
    );
};

// Stateless functional component
const Option = (props) => {
    return (
        <div>
            {props.text}
            <button onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>
                Delete
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(event) {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}));

        if(!error){
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p><i>{this.state.error}</i></p>}
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add new option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
