const detailPost = document.querySelector('.details');
const postId = new URLSearchParams(window.location.search).get('id');
const deleteSinglePost = document.querySelector('.deletePost');

const renderSinglePost = async () => {
    let url = 'http://localhost:3000/post/';
    const requestPost = await fetch(url + postId);
    const getPost = await requestPost.json();
    
    const singlePostTemplate = `
        <h1>${getPost.postTitle}</h1>
        <img src="${getPost.postImg}" />
        <p>${getPost.postText}</p>
    `;

    detailPost.insertAdjacentHTML('afterbegin', singlePostTemplate);
}

const deletePost = async () => {
    const deletePost = await fetch('http://localhost:3000/post/' + postId, {
        method: 'DELETE'
    });

    window.location.replace('/index.html');
}

deleteSinglePost.addEventListener('click', deletePost);

window.addEventListener('DOMContentLoaded', () => renderSinglePost() );