function chessboard(size){
    let boardContent = "";
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
        ((i+j) % 2  == 0 ) ? boardContent += " " : boardContent += "#";
        }
        boardContent += "\n";
    }
    console.log(boardContent);
}

chessboard(8);