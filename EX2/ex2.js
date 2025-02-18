const Color = document.getElementById('Color');
const Size = document.getElementById('Size');
const Police = document.getElementById('Police');
const Paragraphe = document.getElementById('Paragraphe');

function changeTextColor() {
    Paragraphe.style.color = Color.value;
    colorDisplay.style.backgroundColor = Color.valur
}

function changeFontSize() {
    Paragraphe.style.fontSize = `${Size.value}px`;
}

function changeFontFamily() {
    Paragraphe.style.fontFamily = Police.value;
}

Color.addEventListener('input', changeTextColor);
Size.addEventListener('input', changeFontSize);
Police.addEventListener('change', changeFontFamily);