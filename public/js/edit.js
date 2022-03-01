async function editPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postcontent = document.querySelector('#postcontent').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (title && postcontent) {
        const response = await fetch (`/api/edit/${id}`, {
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

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#editpost').addEventListener('submit', editPostFormHandler);