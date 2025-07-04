const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.classList = "delete"
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        li.append(deleteButton);
        list.append(li);

        input.value = '';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
});