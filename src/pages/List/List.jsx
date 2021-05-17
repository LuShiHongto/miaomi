// 列表
import React, { Component } from 'react';
import './Listcss.css';

class List extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div className="List">
                列表
            </div>
        );
    }
}
export default List;
