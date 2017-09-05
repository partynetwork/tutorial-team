import React,{Component} from 'react';
import {connect} from 'react-redux';
class TodoPage extends Component {
    
    render() {
        const {title,todo} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {todo.map( (item,i)=> <li key={i}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        todo : state.todo
    }
}
export default connect(mapStateToProps)(TodoPage)