class Player {
    constructor(name, id, color, isturn = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.isturn = isturn;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates Token Objects for player
     * @param {{integer}} num - Number of Token Objects to be created 
     * @return {{array}} tokens - an array of new token objects
     */

    createTokens(num){
        const tokens = [];
        for (let i = 1; i <= num; i+=1){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

}