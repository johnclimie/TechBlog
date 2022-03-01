// Deletes post
const deletePostFormHandler = async (event) => {
    event.preventDefault();
// Uses id off of URL
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
// Inputs ID into body in order to be deleted
    if (id) {
        const response = await fetch (`/api/delete/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                post_id: id
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

document.querySelector('#deleteFtn').addEventListener('submit', deletePostFormHandler);
document.querySelector('#deletebtn').addEventListener('click', deletePostFormHandler);