function onChangeSelect(label, val, t) {
    let newLabel = document.getElementById(label);
    newLabel.querySelector('input').value = val;
    newLabel.querySelector('.text').innerHTML = t.innerHTML;
    newLabel.classList.remove('active');
}

function onToggleSelect(t) {
    document.querySelectorAll('.custom-select__input').forEach(function (elem) {
        if(elem != t){
            elem.classList.remove('active');
        }
    });
    t.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    if(e.target.parentNode.className.length){
        if(e.target.parentNode.className.match('custom-select__input') || e.target.parentNode.className.match('autocomplete-select')) return;
        document.querySelectorAll('.custom-select__input.active, .input.active').forEach(function (elem) {
            elem.classList.remove('active');
        })
    }
});

function toggleTabs(id, t) {
    document.querySelector('.admin_tab.active').classList.remove('active');
    document.querySelector('.admin_content.active').classList.remove('active');
    document.getElementById(id).classList.add('active');
    t.classList.add('active');
}

function onAutocomplete(id, t) {
    document.getElementById(id).value = t.innerHTML;
    document.getElementById(id).classList.remove('active');
}