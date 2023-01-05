const newFormHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comments').value.trim();
    if (content && post_id) {
      //(`Button selected. id = ${id} and comments = ${comments}`);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
        alert('comment added');
      } else {
        alert('Failed to create comment');
    }
} 
};