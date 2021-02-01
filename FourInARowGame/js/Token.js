class Token {
    constructor(owner, index){
        this.owner = owner;//this property will hold a reference to the player object that ownes the token
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

            
    
}