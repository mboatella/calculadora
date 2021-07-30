import React from 'react';
import './App.css';
import Display from './Display';
import Buttons from './Buttons';
import Button from './Button';


class App extends React.Component {
    state = { operations: [] }

    onClickChange = (label) => {
        let expReg = /\+|-|\/|\*|%/;
        let lastChar = this.state.operations[this.state.operations.length - 1];

        switch (label) {
            case '0':
                if (this.state.operations.length === 0 || lastChar.toString().match(expReg)) {
                    return
                } else {
                    this.setState(() => this.state.operations.push(Number(label)));
                }            
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState(() => this.state.operations.push(Number(label)));
                break;

            case '.':
            case '+':
            case '-':
                this.setState(() => this.state.operations.push(label));
                break;
            case '*':
            case '/':
            case '%':
                if (this.state.operations.length === 0) {
                    return
                } else {
                    this.setState(() => this.state.operations.push(label));
                }            
                break;

            case 'Clear':
                this.setState({ operations: [] });
                break;
            
            case 'Delete': 
                this.setState(() => this.state.operations.pop())
                break;
            
            case '=':
                //this.equalOperation();
                let string = this.state.operations.join("");
                this.setState( { operations: [eval(string)] });
                if (eval(string) === 0) return this.setState({ operations: [] });
                break;

            default:
                console.log("error")
         };
    }

    // equalOperation = () => {
    //     let string = this.state.operations.join("");
    //     this.setState( { operations: [eval(string)] })
    // }

    render () {
        return (
            <div id="calculator" className="container">
                {/* <Buttons> */}
                    <Button label="1" class="one" onClickChange={this.onClickChange} />
                    <Button label="2" class="two" onClickChange={this.onClickChange} />
                    <Button label="3" class="three" onClickChange={this.onClickChange} />
                    <Button label="4" class="four"onClickChange={this.onClickChange} />
                    <Button label="5" class="five" onClickChange={this.onClickChange} />
                    <Button label="6" class="six" onClickChange={this.onClickChange} />
                    <Button label="7" class="seven" onClickChange={this.onClickChange} />
                    <Button label="8" class="eigth" onClickChange={this.onClickChange} />
                    <Button label="9" class="nine" onClickChange={this.onClickChange} />
                    <Button label="0" class="zero" onClickChange={this.onClickChange} />
                    <Button label="+" class="add" onClickChange={this.onClickChange} />
                    <Button label="-" class="sustract" onClickChange={this.onClickChange} />
                    <Button label="*" class="multiply" onClickChange={this.onClickChange} />
                    <Button label="/" class="divide" onClickChange={this.onClickChange} />
                    <Button label="%" class="module" onClickChange={this.onClickChange} />
                    <Button label="." class="dot" onClickChange={this.onClickChange} />
                    <Button label="=" class="equal" onClickChange={this.onClickChange} />
                    <Button label="Clear" class="clear" onClickChange={this.onClickChange} />
                    <Button label="Delete" class="delete" onClickChange={this.onClickChange} />
                {/* </Buttons> */}

                <Display cont={this.state.operations} />
                
            </div>
        )    
    }
}

export default App;