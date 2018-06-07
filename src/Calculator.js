import React, { Component } from 'react';

import './Calculator.css';
import Display from './Components/Display/Display';
import Clear from './Components/Clear/Clear';
import Operators from './Components/Operators/Operators';
import NumPad from './Components/NumPad/NumPad';

const print = console.log;

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: '0',
            output: '',
        }
    }

    updateInput = event => {
        const val = event.target.id;
        if(this.state.display === '0' && ['/','-','+'].includes(val)){
            return;
        }
        this.setState(prevState => {
                if(this.state.display === '0') {
                return { display: val };
                } else {
                return { display: prevState.display + val };
                }
        });
    }

    handleClear = () => {
        this.setState({
            display: '0',
            output: '',
        })
    }

    evaluateDisplay = () => {
        if(this.state.display === '0') return
        let postfix = [];
        let stack = [];
        let temp = '';
        const PREC = {
            '+': 0,
            '-': 0,
            '*': 1,
            '/': 1,
            '(': 2,
        }
        for(let x=0; x<this.state.display.length; x++) {
            let val = this.state.display.charAt(x);
            if(!['*','/','-','+'].includes(val)) {
                temp = temp + val;
                if(x === this.state.display.length-1) postfix.push(parseInt(temp, 10));
            } else {
                postfix.push(parseInt(temp, 10));
                temp = '';
                if(PREC[stack[stack.length-1]] === PREC[val] || 
                    PREC[stack[stack.length-1]] > PREC[val]) {
                        while(stack.length !== 0) {
                            postfix.push(stack.pop());
                        }
                }
                stack.push(val);
            }
        }
        while(stack.length !== 0) {
            postfix.push(stack.pop());
        }
        // console.log('Postfix: ', postfix);

        // let ouput = 0;
        let output_stack = [];
        for(let x=0; x<postfix.length; ++x) {
            if(!['*','/','-','+'].includes(postfix[x])) {
                output_stack.push(postfix[x]);
            } else {
                let second = output_stack.pop();
                let first = output_stack.pop();
                switch(postfix[x]) {
                    case '*':
                        output_stack.push(first*second);
                        break;
                    case '/':
                    output_stack.push(first/second);
                        break;
                    case '+':
                    output_stack.push(first+second);
                        break;
                    case '-':
                        output_stack.push(first-second);
                        break;
                    default:
                        print('Something\'s Seriously Wrong!');
                }
            }
        }
        // print('Output Stack: ', output_stack);
        let output = '';
        parseInt(output_stack[0], 10) ===  Number(output_stack[0].toFixed(5)) 
            ? output = parseInt(output_stack[0], 10)
            : output = output_stack[0].toFixed(10);
        this.setState({ output: Number(output.toString()) });
    }

    handleDelete = () => {
        this.setState(prevState => {
            if(prevState.display.length === 1) {
                return { display: '0' }
            }
            return { display: prevState.display.slice(0, prevState.display.length-1) };
        })
    }

    keyboardHandle = event => {
        event.stopImmediatePropagation();
        const keys = ['*','/','+','-','0','1','2','3','4','5','6','7','8','9','='];
        if(keys.includes(event.key) || event.keyCode === 13 || event.key === 'Backspace') {
            const e = {
                target: {
                    id: event.key
                }
            }
            if(event.key === '=' || event.key === 'Enter'){
                this.evaluateDisplay();
            } else if(event.key === 'Backspace'){
                event.preventDefault();
                this.handleDelete();
            } else{
                this.updateInput(e);
            } 
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyboardHandle);
    }

    render() {
        const { display, output } = this.state
        return (
            <div className="calculator" >
                <Display display={ display } output={ output }/>
                <div className="grid">
                                            
                    <div className="item1">
                        <Clear click={this.handleClear}/>
                    </div>
                    <div className="item2">
                        <Operators click={ this.updateInput } evaluate={ this.evaluateDisplay }/>
                    </div>
                    <div className="item3">
                        <NumPad click={ this.updateInput }/>
                    </div>
                </div>
            </div>
        );
    }
}