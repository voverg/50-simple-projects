const $faqContainer = document.querySelector('.faq-container');

function createBlock(data) {
    const block = `
    <div class="faq">
        <h3 class="faq-title">
            ${data.title}
        </h3>
        <p class="faq-text">
            ${data.text}
        </p>
        <button class="faq-toggle">
            <i class="fas fa-chevron-down" data-btn="toggle"></i>
            <i class="fas fa-times" data-btn="toggle"></i>
        </button>
    </div>
    `
    return block;
}

model.forEach(data => {
    const block = createBlock(data);
    $faqContainer.insertAdjacentHTML('beforeend', block);
});

$faqContainer.children[0].classList.add('active');

function toggleBtnHandler(event) {
    if (event.target.dataset.btn === 'toggle') {
        event.target.closest('.faq').classList.toggle('active');
    }
}

$faqContainer.addEventListener('click', toggleBtnHandler);