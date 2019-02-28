class Deck {
    constructor (){
        this.deck = new Array();
    }

    // Function to create a deck of cards 
    static load(){
        var suit = String();
        var value = String();
               
        // Loop 4 times, once for each suit
        for(let i = 1; i <= 4; i++){
            
            // Determine suit
            switch (i){
                case 1:
                suit = 'C';
                break;

                case 2:
                suit = 'D';
                break;

                case 3:
                suit = 'H';
                break;

                case 4:
                suit = 'S';
                break;

                default:
            }

            // Loop 13 times, once for each card for this suit
            for(let h = 1; h <= 13; h++){
                
                // Determine card number
                switch (h){
                    case 1:
                    value = 'A';
                    break;
        
                    case 11:
                    value = 'J';
                    break;
        
                    case 12:
                    value = 'Q';
                    break;
        
                    case 13:
                    value = 'K';
                    break;
        
                    default:
                    value = h;
                }
            }

            // Add this card to our deck
            let card = new Card(value, suit);
            this.deck.push(card);
        }

        return this;
    }
}