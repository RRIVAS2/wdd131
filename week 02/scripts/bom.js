const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function () {
        // Code to execute when the element is clicked
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value.trim();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
              });
            li.append(deleteButton);
            list.appendChild(li);
            input.value = '';
        }
        else input.focus();
    });





input.value = '';
input.focus();