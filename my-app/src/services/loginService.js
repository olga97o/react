import {logIn, logOut} from "../store/actions/cardsData";

export function isLogin(dispatch, user) {
    dispatch(logIn(user))
}

export function isLogout(dispatch) {
    dispatch(logOut())
}