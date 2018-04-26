// live-server public
// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    toggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && <p>Here are the details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));