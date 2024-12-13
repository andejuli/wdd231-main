window.addEventListener('load', () => {
    let saveNote = localStorage.getItem('note');
    if (saveNote) {
        document.querySelector('#noteInput').value = saveNote;
    }
})

document.querySelector('#saveBtn').addEventListener('click', function() {
    let note = document.querySelector('#noteInput').value;
    localStorage.setItem('note', note);
    alert('Note saved');
});

document.querySelector('#clearBtn').addEventListener('click', function() {
    document.querySelector('#noteInput').value = '';
    localStorage.removeItem('note');
    alert('Note removed');
});