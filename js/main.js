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
    if(e.target.parentNode.className.match('custom-select__input')) return;
    document.querySelectorAll('.custom-select__input.active').forEach(function (elem) {
        elem.classList.remove('active');
    })
});