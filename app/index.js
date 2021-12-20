    const posts = document.querySelector('.post')
    const renderPost = async () => {
        let url = 'http://localhost:3000/post?_sort=postTitle&_order=asc';
        const result = await fetch(url);
        const post = await result.json();
        let postTemplate = '';
        for(let prop of post){
            postTemplate += `
                <div class="postItems">
                    <h2 class="postTitle">${prop.postTitle}</h2>
                    <img src="${prop.postImg}" class="postImg">
                    <p class="postText">${prop.postText.slice(0, 200)}</p>
                    <a href="detail.html?id=${prop.id}">read more...</a>
                </div>
            `
        }

    posts.insertAdjacentHTML('afterbegin', postTemplate);
    }
    console.log(posts);





    window.addEventListener('DOMContentLoaded', () => renderPost() );