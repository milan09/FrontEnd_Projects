class Board {
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = createSpaces();
    }

    
    /**
     * generates 2D Array
     * @return {{array}} An array of space objects
     */
    createSpaces(){
        const spaces = [];

        for (let x = 0; x < this.columns; x+=1) {
            const column = [];

            for (let y = 0; y < this.rows; y+=1) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }
    
}