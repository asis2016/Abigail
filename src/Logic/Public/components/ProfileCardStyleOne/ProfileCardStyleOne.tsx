import React, {Component} from 'react';

interface IProps {
}

interface IState {
    firstName: string;
}

class ProfileCardStyleOne extends Component<IProps, IState>{

    constructor(props:IProps){
        super(props);
        this.state = {
            firstName: 'none',
        }
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';

        /* fetch().then() */
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            firstName: data.results[0].name.first
        })
    };

    render(){
        return (<h3>{this.state.firstName}</h3>)
    }
}

export default ProfileCardStyleOne;