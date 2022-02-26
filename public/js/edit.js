async function editPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postcontent = documnet.querySelector('#postcontent').value.trim();

    if (title && postcontent) {
        const response = await fetch ('/api/posts/', {
            method: 'PUT',
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

            documnet.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#editpost').addEventListener('submit', editPostFormHandler);