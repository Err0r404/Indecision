import React from "react";

class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (event) => {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}));

        if(!error){
            event.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p><i>{this.state.error}</i></p>}
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add new option"/>
                    <button className='btn'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddOption;