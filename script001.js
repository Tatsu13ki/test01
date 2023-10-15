const topImage = document.getElementById('topImage');
const bottomImage = document.getElementById('bottomImage');
const newImage = document.getElementById('newImage');
let isClicked = false;

document.querySelector('.image-container').addEventListener('click', () => {
    if (!isClicked) {
        topImage.style.transform = 'translateY(-100%)';
        bottomImage.style.transform = 'translateY(100%)';
        topImage.style.opacity = 0;
        bottomImage.style.opacity = 0;

        // 新しい画像の表示とズームアップアニメーション
        newImage.classList.remove('hidden');
        newImage.style.maxWidth = '100%';
        newImage.style.maxHeight = '100%';

        topImage.style.transition = 'transform 1s ease, opacity 1s ease';
        bottomImage.style.transition = 'transform 1s ease, opacity 1s ease';
        newImage.style.transition = 'max-width 1s ease, max-height 1s ease';

        topImage.addEventListener('transitionend', () => {
            topImage.classList.add('hidden');
            bottomImage.classList.add('hidden');

            // ページ遷移
            window.location.href = 'scroll2.html';
        }, { once: true });
    }
    isClicked = !isClicked;
});
