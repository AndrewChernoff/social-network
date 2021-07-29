import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;