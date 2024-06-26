




let container = document.getElementById('posts');

// task1

// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(Response => Response.json() )
//     .then(data=>{
//         let template = '';
//         data.forEach(posts =>{
//             template+=
//             `
//             <div class="post">
//             <h3>${posts.title}</h3>
//             <h3>${posts.body}</h3>
//             </div>
//             `
//         });
//         container.innerHTML = template;
//     })
// }



// task2

// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     .then(Response => Response.json() )
//     .then(data=>{
//         let template = '';
//         data.forEach(posts =>{
//             template+=
//             `
//             <div class="post">
//             <p>${posts.body}</p>
//             <h4>${posts.email}</h4>
//             </div>
//             `
//         });
//         container.innerHTML = template;
//     })
// }

// task3



// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
//     .then(Response => Response.json() )
//     .then(data=>{
//         let template = '';
//         data.forEach(posts =>{
//             template+=
//             `
//             <div class="post">
//             <h3>${posts.title}</h3>
//             <h3>${posts.body}</h3>
//             </div>
//             `
//         });
//         container.innerHTML = template;
//     })
// }



// task4

// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/photos?albumId=1 ')
//     .then(Response => Response.json() )
//     .then(data=>{
//         let template = '';
//         data.forEach(posts =>{
//             template+=
//             `
//             <div class="post">         
//             <h3>${posts.body}</h3>
//              <img src="${posts.thumbnailUrl}" alt="">
//              <img src="${posts.thumbnailUrl}" alt="">
//              <img src="${posts.thumbnailUrl}" alt="">
//             </div>
//             `
//         });
//         container.innerHTML = template;
//     })
// }


// task5 Not completed
// task5 Not completed

// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(Response => Response.json() )
//     .then(data=>{
//         let template = '';
//         data.forEach(posts =>{
//             template+=
//             `
//             <div class="post">         
//             <h4>${posts.body}</h4>
//             <h4>${posts.todos}</h4>
//             </div>
//             `
//         });
//         container.innerHTML = template;
//     })
// }


// task6

function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json() )
    .then(data=>{
        let template = '';
        data.forEach(posts =>{
            template+=
            `
            <div class="post">         
            <h3>Name:    ${posts.name}</h3>
            <h3>username:${posts.username}</h3>
            <h3>email:   ${posts.email}</h3>
            <h3>address: ${posts.address}</h3>

            </div>
            `
        });
        container.innerHTML = template;
    })
}



fetchData();










