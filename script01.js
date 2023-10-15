// JavaScript (script.js)
const gameOverText = document.getElementById('game-over-text');
const gameOverImage = document.getElementById('game-over-image');
const backButton = document.getElementById('back-button');

// ゲームオーバー時のアニメーション開始
setTimeout(() => {
    gameOverText.style.top = '50%'; // 文字を中央に移動
    // 画像を表示して回転アニメーションを開始
    gameOverImage.style.width = '500px';
    gameOverImage.style.height = '700px';
    gameOverImage.style.opacity = '1';
    gameOverImage.style.transform = 'rotate(360deg)';
}, 1000); // 適切な遅延時間を設定

// 戻るボタンのリンク設定
backButton.addEventListener('click', () => {
    window.location.href = 'float.html'; // float.html に遷移
});

// script.js

// 画面遷移の4秒後にボタンを表示
setTimeout(() => {
    const backButton = document.getElementById('back-button');
    backButton.style.opacity = '1';
}, 4000); // 4秒後に実行

// ポップアップを表示する関数
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// ポップアップを非表示にする関数
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ゲームを開始する関数（この関数は実際のゲーム開始ロジックを追加する必要があります）
function startGame() {
    // ゲームの開始処理をここに追加する
    alert("Game started!");
}

// ページが読み込まれたときにポップアップを表示
window.onload = function() {
    openPopup();
}
