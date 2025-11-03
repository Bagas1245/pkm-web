const search = document.getElementById('search');
const items = document.querySelectorAll('#items-list li');
const itemsList = document.getElementById('items-list');

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase();

    
    if (term === '') {
        itemsList.classList.add('hidden');
        items.forEach(item => item.classList.add('hidden'));
        return;
    }

    if (itemsList.classList.contains('hidden')) {
        itemsList.classList.remove('hidden');
    }

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(term)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

items.forEach(item => {
    item.addEventListener('click', () => {
        alert('Item terpilih: ' + item.textContent);
    });
});
