
export const goToHomePage = (history) =>{
    history.push("/")
};

export const goToFeedPage = (history) =>{
    history.push("/feed")
};

export const goToSignUpPage = (history) =>{
    history.push("/signup")
};

export const goToPostPage = (history, idPost) =>{
    history.push(`/post/${idPost}`)
}