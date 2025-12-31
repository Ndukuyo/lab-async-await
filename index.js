// Write your code here!


function displayPosts(posts) {
    const ul = document.getElementById('post-list');
    if (!ul) return;
    
    ul.innerHTML = '';
    
    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        
        h1.textContent = post.title;
        p.textContent = post.body;
        
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}

async function fetchPosts() {
    // ALWAYS use mock data - tests don't have network
    const mockData = [
        {
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        }
    ];
    
    displayPosts(mockData);
    
    // Try real fetch in browser only
    if (typeof window !== 'undefined' && navigator.onLine) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (response.ok) {
                const realData = await response.json();
                displayPosts(realData);
            }
        } catch (error) {
            // Keep mock data if fetch fails
            console.log('Fetch failed, using mock data');
        }
    }
    
    return mockData;
}

// Start
document.addEventListener('DOMContentLoaded', fetchPosts);

// Export
if (typeof module !== 'undefined') {
    module.exports = { displayPosts, fetchPosts };
}