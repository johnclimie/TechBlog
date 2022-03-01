// Creates comment
async function addCommentFormHandler(event) {
    event.preventDefault();
// Uses value form text in textbox
    const commentcontent = document.querySelector('#commentcontent').value.trim();
// Value of textbox is loaded into body
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
// Reloads if successful
        if (response.ok) {
            console.log('success');
            
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#addcomment').addEventListener('submit', addCommentFormHandler);