import React, { Component } from "react";
import { rgba } from 'polished';
import { api } from '../api.js'
import { register } from '../javascripts/authRequests'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        register(this.state.firstname, this.state.lastname, this.state.email, this.state.password, this.state.username)
            .then((res) => {
                console.log(res);
                // else: TODO
            })
            .catch((err) => {
                // TODO
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    callAPI() {
        fetch(`${api.url}/testAPI`)
            .then(res => res.text())
            .then(res => this.setState({ visibility: 1-this.x }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
        <div className="uk-cover-container uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-overflow-hidden uk-light" data-uk-height-viewport>
            <div className ="uk-border-rounded uk-width-large uk-padding-large uk-position-z-index" uk-scrollspy="cls: uk-animation-fade" style={{backgroundColor: rgba(253, 253, 253, 0.253)}}>
                <div className ="uk-text-center uk-margin"> <img src={require('../images/photogram.png')} alt="Logo"></img></div>
                <h4 className ="uk-heading-line uk-text-center" style= {{color: rgba(255, 255, 255, .8)}}><span> Registration </span></h4>
                <form onSubmit={this.handleSubmit} className="toggle-class">
                    <fieldset className ="uk-fieldset">
                        <div className ="uk-margin-small">
                            <div className ="uk-inline uk-width-1-1">
                                <span className ="uk-form-icon uk-form-icon-flip"></span>
                                <input onChange={this.handleChange} id="firstname" name="firstname" className="uk-input uk-border-pill" placeholder="First Name" type="text" required></input>
                            </div>
                        </div>
                        <div className ="uk-margin-small">
                            <div className ="uk-inline uk-width-1-1">
                                <span className ="uk-form-icon uk-form-icon-flip"></span>
                                <input onChange={this.handleChange} id="lastname" name="lastname" className="uk-input uk-border-pill" placeholder="Last Name" type="text" required></input>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                                <input onChange={this.handleChange} id="email" name="email" className="uk-input uk-border-pill" placeholder="Email" type="email" required></input>
                            </div>
                        </div> 
                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                                <input onChange={this.handleChange} id="username" name="username" className="uk-input uk-border-pill" placeholder="Username" type="text" required></input>
                            </div>
                        </div>
                        <div className ="uk-margin-small">
                            <div className ="uk-inline uk-width-1-1">
                                <span className ="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                                <input onChange={this.handleChange} id="password" name="password" className="uk-input uk-border-pill" placeholder="Password" type="password" required></input>
                            </div>
                        </div>
                        <div className ="uk-margin">
                            <div className ="uk-inline uk-width-1-1" uk-form-custom="target: true">
                                <input id="image" name="image" type="file" accept="image/*"></input>
                                <input className="uk-input uk-border-pill" type="text" placeholder="Select profile image"></input>
                            </div>
                        </div>
                        <div className ="uk-margin-bottom" style= {{textAlign: "center"}}>
                        <button className ="uk-button uk-button-primary uk-border-pill uk-width-1-1"
                                id="submit">Register</button>
                        <p>Already have an account? <a href="/login" id="login" className ="uk-position-relative">Login</a></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        )
    }
}

export default Registration;
