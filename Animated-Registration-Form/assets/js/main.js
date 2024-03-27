let label = document.querySelectorAll('label').forEach(label => {
    label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 50}ms">${letters}</span>`).join('');
});
