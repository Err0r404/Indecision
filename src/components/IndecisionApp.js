import React from "react";

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: ['Take a break', 'Keep working'],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        console.log('Delete ', optionToRemove);

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        this.setState(() => ({selectedOption: option}));
        // alert("Choose " + option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

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
        // Saving data to localStorage if necessary
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = "Put your life in the hand of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>

                <div className="container">
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

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;