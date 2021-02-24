const cell = document.querySelectorAll('.cell');
const playerText = document.querySelector('.player');
const oText = "O";
const xText = "X";
let currentPlayer = xText;
let turn = true;
let gameOver = false;
const spaces = ["", "", "", "", "", "", "", "", ""];
const winValue = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const winCheck = (results) => {
    console.log(results);
    winValue.map((elm) => {
        console.log(elm);
        const [x, y, z] = elm;
        if (results[x] && results[x] === results[y] && results[y] === results[z]) {
            gameOver = true;
            playerText.textContent = `${results[x]} won!!`;

        } else {
            if (!results.includes("") && !gameOver) {
                gameOver = true;
                playerText.textContent = "Draw";
            }
        }
    });
};
function gameStart() {
    playerText.textContent = `${currentPlayer}'s Turn!!`

    cell.forEach(cell => cell.addEventListener('click', () => {
        console.log(cell.getAttribute('id'));
        if (cell.textContent === "" && !gameOver) {

            if (currentPlayer === xText) {
                cell.innerHTML = currentPlayer;
                spaces[cell.getAttribute('id')] = xText;
                currentPlayer = oText;

                if (!gameOver) {
                    playerText.innerHTML = `${currentPlayer} ' turn!!`;
                }
                winCheck(spaces);

            } else {
                cell.innerHTML = currentPlayer;
                spaces[cell.getAttribute('id')] = oText;
                currentPlayer = xText;
                if (!gameOver) {
                    playerText.innerHTML = `${currentPlayer} ' turn!!`;
                }
                winCheck(spaces);
            }
        } else {

            if (gameOver) {
                winCheck(spaces);
            } else {
                playerText.textContent = "Heyy, it's not empty bro";
                cell.style.border = "2px solid #2ed573";
                setTimeout(() => {
                    playerText.textContent = `${currentPlayer} ' turn!!`;
                    cell.style.border = "";
                }, 2500)
            }
        }
    }))
}
function restart() {
    location.reload();
}
gameStart();
