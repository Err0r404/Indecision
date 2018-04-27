// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount(){
        // fetching data
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        // saving data
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions(){
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove){
        console.log('Delete ', optionToRemove);

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert("Choose "+option);
    }

    handleAddOption(option){
        if(!option){
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

    render(){
        const subtitle = "Put your life in the hand of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
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

/*
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
*/

// Stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>

            {
                props.options.map((option) => {
                    return <Option key={option} text={option} handleDeleteOption={props.handleDeleteOption} />;
                })
            }

        </div>
    );
};

/*
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
*/

// Stateless functional component
const Option = (props) => {
    return (
        <div>
            {props.text}
            <button onClick={(e) => {props.handleDeleteOption(props.text)}}>
                Delete
            </button>
        </div>
    );
};

/*
class Option extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
*/

class AddOption extends React.Component {
    constructor(props){
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error : undefined
        }
    }

    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        event.target.elements.option.value = '';

        // this.setState(() => {
        //     return {
        //         error: error
        //     };
        // });

        this.setState(() => ({error: error}));
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
