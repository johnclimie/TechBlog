// Crates post
async function addPostFormHandler(event) {
    event.preventDefault();
// Uses values from text in textboxes
    const title = document.querySelector('#title').value.trim();
    const postcontent = document.querySelector('#postcontent').value.trim();
// Value of textboxes are loaded into body
    if (title && postcontent) {
        const response = await fetch ('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title,
                postcontent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
// Redirects to dashboard if successful
        if (response.ok) {
            console.log('success');

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#addpost').addEventListener('submit', addPostFormHandler);
