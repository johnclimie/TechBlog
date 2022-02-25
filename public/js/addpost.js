async function addPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postcontent = document.querySelector('#postcontent').value.trim();

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

        if (response.ok) {
            console.log('success');

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#addpost').addEventListener('submit', addPostFormHandler);
