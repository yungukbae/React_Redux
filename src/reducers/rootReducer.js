

const initState = {
    posts:[
        {id: '1',title:'One title',body:'falejfoaiejfioawejfiowejfi'},
        {id: '2', title:'second title',body:'aefaefaefloeiafjio'},
        {id: '3', title:'third title',body:'aefkajwefjkahejijkjeof'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer