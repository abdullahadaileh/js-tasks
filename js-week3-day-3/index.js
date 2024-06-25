function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        displayPosts(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      
      const postTitle = document.createElement('h3');
      postTitle.textContent = post.title;
      
      const postBody = document.createElement('p');
      postBody.textContent = post.body;
      
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      
      postsContainer.appendChild(postDiv);
    });
  }
    fetchData();
  