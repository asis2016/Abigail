import * as React from 'react';
import {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';

interface IValues {
    [key: string]: any;
}

interface IFormState {
    id: number;
    customer: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
};

class CustomerDetail extends Component<RouteComponentProps<any>, IFormState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customer: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    };

    componentDidMount(): void {
        axios.get(`http://localhost:3000/customers/${this.state.id}`)
            .then(data => {
                this.setState({customer: data.data});
            })
    };

    render() {
        return <>
            {this.state.customer && <h2>{this.state.customer.name} </h2>}
        </>
    }
}

export default withRouter(CustomerDetail)