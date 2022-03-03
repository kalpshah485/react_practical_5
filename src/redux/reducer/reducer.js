var initialState = {
    loading: true,
    users: [
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Active",
            Access: "Owner"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/2-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/3-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/4-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/5-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/6-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            status: "Inactive",
            Access: "Read"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            status: "Inactive",
            Access: "Read"
        }
    ]
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        // case 'FETCH_USERS': {users: [...state.users,action.payload]}
        // case 'LOADED': return {...state,loading: action.task}
        default: return state;
    }
}
export default reducer;