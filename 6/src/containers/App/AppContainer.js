import React from 'react';
import {connect} from "react-redux";



import App from "../../App";
import {AddUser, DeleteUser, SetEmployessThunk} from "../../Redux/EmployeesReducer";

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.SetEmployessThunk()
    }
    render() {
        return (<App employess={this.props.employess}
                     DeleteUser={this.props.DeleteUser}
                     AddUser={this.props.AddUser}
                     isFething={this.props.isFetching} />)
    }

}

let mapStateToProps = (state) => ( {
    isFetching: state.EmployessReducer.isFetching,
    employess:state.EmployessReducer.employess,
});


export default  connect(mapStateToProps, {SetEmployessThunk, DeleteUser,AddUser})(AppContainer);
