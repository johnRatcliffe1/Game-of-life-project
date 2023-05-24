function gameOfLife(Status, Neighbors) {
    if (Status == 1 && Neighbors > 1 && Neighbors < 4){
        return true;
    } else if (Neighbors === 3){
        return true;
    } else {
        return false;
    }
}
export {gameOfLife}

