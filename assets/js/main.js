// Oyun tahtası ve oyun durumu (başlangıçta tüm hücreler boş)
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

// Hücreye hamle yapma fonksiyonu
function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        
        if (checkWin()) {
            alert(currentPlayer + ' kazandı!');
            resetBoard();
        } else if (board.indexOf('') === -1) {
            alert('Berabere!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Oyun durumunu kontrol etme fonksiyonu
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey
        [0, 4, 8], [2, 4, 6] // Çapraz
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

// Oyun tahtasını sıfırlama fonksiyonu
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
