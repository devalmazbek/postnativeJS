const formItems = document.querySelector('form');

const createNewPost = async (e) => {
    e.preventDefault();
    const postDate = {
        postTitle: formItems.title.value,
        postImg: formItems.img.value,
        postText: formItems.body.value,
    };

    await fetch('http://localhost:3000/post', {
    method: 'POST',
    body: JSON.stringify(postDate),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/index.html');
}




window.addEventListener('submit', createNewPost);