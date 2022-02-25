async function addCommentFormHandler(event) {
    event.preventDefault();

    const commentcontent = document.querySelector('#commentcontent').value.trim();

    console.log(commentcontent);

    if (commentcontent) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({
                commentcontent
            }),
            headers: {
                'content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('success');
            
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#addcomment').addEventListener('submit', addCommentFormHandler);