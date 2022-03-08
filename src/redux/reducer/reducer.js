import { v4 as uuidv4 } from 'uuid';
var initialState = {
    loading: true,
    selectedUser: null,
    users: [
        {
            id: uuidv4(),
            first_name: 'John1',
            last_name: 'Wick1',
            email: 'john1@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Active",
            role: "Owner"
        },
        {
            id: uuidv4(),
            first_name: 'John2',
            last_name: 'Wick2',
            email: 'john2@example.com',
            avatar: "https://reqres.in/img/faces/2-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John3',
            last_name: 'Wick3',
            email: 'john3@example.com',
            avatar: "https://reqres.in/img/faces/3-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John4',
            last_name: 'Wick4',
            email: 'john4@example.com',
            avatar: "https://reqres.in/img/faces/4-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John5',
            last_name: 'Wick5',
            email: 'john5@example.com',
            avatar: "https://reqres.in/img/faces/5-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John6',
            last_name: 'Wick6',
            email: 'john6@example.com',
            avatar: "https://reqres.in/img/faces/6-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John7',
            last_name: 'Wick7',
            email: 'john7@example.com',
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John8',
            last_name: 'Wick8',
            email: 'john8@example.com',
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            status: "Inactive",
            role: "Read"
        }
    ]
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case "ADD_SELECTED_USER" : return {...state,selectedUser: action.payload};
        case "REMOVE_SELECTED_USER" : return {...state,selectedUser: null};
        case "DELETE_USER": 
            let selectUser = state.selectedUser;
            if (state.selectedUser.id === action.payload) {
                selectUser = null;
            }
            let userList = state.users;
            userList = userList.filter((user) => {
                return !(user.id === action.payload)
            })
            return {...state,users: userList,selectedUser: selectUser};
        // case 'FETCH_USERS': {users: [...state.users,action.payload]}
        // case 'LOADED': return {...state,loading: action.task}
        default: return state;
    }
}
export default reducer;