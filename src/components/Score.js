import React, { Component } from 'react'

export default class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
             scoreTop: 0,
             scoreBottom: 0,
        }
    }
    score = (team, type) => {
        let count;
        if(team === 'top') {
            count = this.state.scoreTop;
            if(type === 'add') {
                count++;
            }
            else if((type === 'sub')&&(count !== 0)) {
                count--;
            }
            this.setState({scoreTop: count});
        }
        else if(team === 'bottom') {
            count = this.state.scoreBottom;
            if(type === 'add') {
                count++;
            }
            else if((type === 'sub')&&(count !== 0)) {
                count--;
            }
            this.setState({scoreBottom: count});
        }
    }
    restart = () => {
        this.setState({
            scoreTop: 0,
            scoreBottom: 0,
        });
    }
    render() {
        return (
            <div id='score-box'>
                <div className='score'>
                    <p>TEAM 1 <i className="far fa-edit"></i></p>

                    <div className='buttons'>
                        <button className='button-left' onClick={() => this.score('top','sub')}>-</button>
                        <button className='button-center'>{this.state.scoreTop}</button>
                        <button className='button-right' onClick={() => this.score('top','add')}>+</button>
                    </div>
                    <p>TEAM 2 <i className="far fa-edit"></i></p>
                    <div className='buttons'>
                        <button className='button-left' onClick={() => this.score('bottom','sub')}>-</button>
                        <button className='button-center'>{this.state.scoreBottom}</button>
                        <button className='button-right' onClick={() => this.score('bottom','add')}>+</button>
                    </div>
                    <button id='restart' onClick={() => this.restart()}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                    
                </div>
            </div>
        )
    }
}
