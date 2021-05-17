//首页
import React, { Component } from 'react';
import './Indexcss.css';
import Header from '../../compoments/Header/Header';
import Navigation from '../../compoments/Navigation/Navigation';

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div className="Index">
                <Header />
                <Navigation />
            </div>
        );
    }
}
export default Index;
