const newFormHandler = async (event) => {
    event.preventDefault();
    const comments = document.querySelector('#comments').value.trim();
    if (comments && event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      //(`Button selected. id = ${id} and comments = ${comments}`);
      const response = await fetch(`/api/posts/${id}`, {//Need to update Pull request
        method: 'PUT',
        body: JSON.stringify({ comments }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
        alert('comment added');
      } else {
        alert('Failed to create comment');
    }
} 
};