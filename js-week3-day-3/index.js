




let container = document.getElementById('posts');

function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json() )
    .then(data=>{
        let template = '';
        data.forEach(posts =>{
            template+=
            `
            <div class="post">
            <h3>${posts.title}</h3>
            <h3>${posts.body}</h3>
            </div>
            `
        });
        container.innerHTML = template;
    })
}

fetchData();










