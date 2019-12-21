import * as React from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import {Row} from "react-bootstrap";
import {Component} from "react";

interface IState {
    customers: Array<any>;
}

class Customer extends Component<RouteComponentProps, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            customers: [],
        }
    };

    componentDidMount(): void {
        axios.get(`http://localhost:3000/customers`)
            .then(data => {
                this.setState({customers: data.data})
            })
    };

    deleteCustomer(id: number) {
        axios.delete(`http://localhost:3000/customers/${id}`)
            .then(data => {
                const index = this.state.customers.findIndex(customer => customer.id === id);
                this.state.customers.splice(index, 1);
                this.props.history.push('/');
            })
    }

    render() {
        const customers = this.state.customers;
        return (
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>No customer found at the moment</h2>
                    </div>
                )}
                <Row>
                    <table>
                        <tbody>
                        {customers && customers.map(customer =>
                            <tr key={customer.id}>
                                <td>
                                    <Link to={`view/${customer.id}`}>{customer.name}</Link>
                                </td>
                                <td>
                                    <Link to={`edit/${customer.id}`}>Edit Customer </Link>
                                    <button onClick={() => this.deleteCustomer(customer.id)}>
                                        Delete Customer
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </Row>
            </div>
        )
    }
};

export default withRouter(Customer);