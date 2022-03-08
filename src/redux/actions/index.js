// export const fetchUsers = (users) => {
//     return {type: 'FETCH_USERS',payload: users}
// }
// export const loaded = () => {
//     return {type: 'LOADED',task: false}
// }
// export const deleteUser = () => {
//     return {type: 'DELETE_USER',payload: users}
// }
export const addSelectedUser = (user) => {
    return {type: 'ADD_SELECTED_USER',payload: user}
}