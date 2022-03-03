var initialState = {
    users: [
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            first_name: 'John',
            last_name: 'Wick',
            email: 'john@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        }
    ]
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        // case 'FETCH_USERS': {users: [...state.users,action.payload]}
        default: return state;
    }
}
export default reducer;