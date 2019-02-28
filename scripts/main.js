// Declaration for Card
class Card {
    constructor(rank, suit, value) {
        this.rank= rank;
        this.suit = suit;
        this.value = value;
    }

    cardCreateNode() {

        var cardNode, frontNode, indexNode, spotNode, tempNode, textNode;
        var indexStr, spotChar;

        var cardImg0 = new Image(); cardImg0.src= "images/cardback.gif";
        var cardImg1 = new Image(); cardImg1.src= "images/jack.gif";
        var cardImg2 = new Image(); cardImg2.src= "images/queen.gif";
        var cardImg3 = new Image(); cardImg3.src= "images/king.gif";
      
        // This is the main node, a DIV tag.
      
        cardNode = document.createElement("DIV");
        cardNode.className = "card";
      
        // Build the front of card.
      
        frontNode = document.createElement("DIV");
        frontNode.className = "front";
      
        // Get proper character for card suit and change font color if
        // necessary.
      
        spotChar = "\u00a0";
        switch (this.suit) {
          case "C" :
            spotChar = "\u2663";
            break;
          case "D" :
            frontNode.className += " red";
            spotChar = "\u2666";
            break;
          case "H" :
            frontNode.className += " red";
            spotChar = "\u2665";
            break;
          case "S" :
            spotChar = "\u2660";
            break;
        }
      
        // Create and add the index (rank) to the upper-left corner of the
        // card.
      
        indexStr = this.rank;
        if (this.toString() == "")
          indexStr = "\u00a0";
        spotNode = document.createElement("DIV");
        spotNode.className = "index";
        textNode = document.createTextNode(indexStr)
        spotNode.appendChild(textNode);
        spotNode.appendChild(document.createElement("BR"));
        textNode = document.createTextNode(spotChar)
        spotNode.appendChild(textNode);
        frontNode.appendChild(spotNode);
      
        // Create and add spots based on card rank (Ace thru 10).
      
        spotNode = document.createElement("DIV");
        textNode = document.createTextNode(spotChar);
        spotNode.appendChild(textNode);
        if (this.rank == "A") {
          spotNode.className = "ace";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "3" || this.rank == "5" || this.rank == "9") {
          spotNode.className = "spotB3";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "2" || this.rank == "3") {
          spotNode.className = "spotB1";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "2" || this.rank == "3") {
          spotNode.className = "spotB5";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "4" || this.rank == "5" || this.rank == "6" ||
            this.rank == "7" || this.rank == "8" || this.rank == "9" ||
            this.rank == "10") {
          spotNode.className = "spotA1";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotA5";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC1";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC5";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "6" || this.rank == "7" || this.rank == "8") {
          spotNode.className = "spotA3";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC3";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "7" || this.rank == "8" || this.rank == "10") {
          spotNode.className = "spotB2";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "8" || this.rank == "10") {
          spotNode.className = "spotB4";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
        if (this.rank == "9" || this.rank == "10") {
          spotNode.className = "spotA2";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotA4";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC2";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC4";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
      
        // For face cards (Jack, Queen or King), create and add the proper
        // image.
      
        tempNode = document.createElement("IMG");
        tempNode.className = "face";
        if (this.rank == "J")
          tempNode.src = "images/jack.gif";
        if (this.rank == "Q")
          tempNode.src = "images/queen.gif";
        if (this.rank == "K")
          tempNode.src = "images/king.gif";
      
        // For face cards, add suit characters to the upper-left and
        // lower-right corners.
      
        if (this.rank == "J" || this.rank == "Q" || this.rank == "K") {
          frontNode.appendChild(tempNode);
          spotNode.className = "spotA1";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
          spotNode.className = "spotC5";
          tempNode = spotNode.cloneNode(true);
          frontNode.appendChild(tempNode);
        }
      
        // Add front node to the card node.
      
        cardNode.appendChild(frontNode);
      
        // Return the card node.
      
        return cardNode;
      }
}

// Declaration for Player
class Player {
    constructor(playerNum, name) {
        this.playerNum = playerNum;
        this.name = name;
        this.hand = new Array(); 
        this.value = new Number(0);
        this.altValue = new Number(0);
    }

    addCard(newCard) {
        this.hand.push(newCard);
    }
    
}

// Declaration for Game
class Game {
    constructor (){
        this.deck = new Array();
        this.players = new Array();
        this.addPlayer('Dealer');
        this.addPlayer('Player 1');
    }

    // Function to add a deck of cards to the shoe
    addDeck() {
        let suit = String();
        let rank = String(); 
        var value = Number();
               
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
                    rank = 'A';
                    value = 11;
                    break;
        
                    case 11:
                    rank = 'J';
                    value = 10;
                    break;
        
                    case 12:
                    rank = 'Q';
                    value = 10;
                    break;
        
                    case 13:
                    rank = 'K';
                    value = 10;
                    break;
        
                    default:
                    rank = h.toString();
                    value = h;
                }

                // Add this card to our deck
            let card = new Card(rank, suit, value);
            this.deck.push(card);

            } // End Value Loop
           
        } // End Suit Loop

        document.getElementById("deckCount").innerHTML = this.deck.length;
        return this.deck;

    } // addDeck

    // Function to draw a random card from the shoe
    drawCard() {
        let draw = new Card();
        let min = new Number(0);
        let max = new Number(this.deck.length);
        let index = new Number(Math.floor(Math.random() * (max - min)) + min);
        draw = this.deck[index];
        this.deck.splice(index, 1);
        
        return draw;

    } // drawCard

    // Function to add a player to the game
    addPlayer(name) {
        let player = new Player(this.players.length, name);
        this.players.push(player);

        return player;
    }
    
    // Function to deal a new hand
    dealHand() {
        
        // Deal first card to dealer and player 1
        this.hitHand(0);
        this.hitHand(1);

        // Deal second card to dealer and player 1
        this.hitHand(0);
        this.hitHand(1);
    }

    // Function to clear a hand
    clearHand(playerNum) {
        this.players[playerNum].hand.splice(0, this.players[playerNum].hand.length);
        this.valHand(playerNum);
    }

    // Function to clear all hands on the table
    clearTable() {
        for (let i=0; i<this.players.length; i++) {
            this.clearHand(this.players[i].playerNum);
        }
    }

    // Function to Hit (add card to hand)
    hitHand(playerNum) {
        this.players[playerNum].hand.push(this.drawCard());
        this.valHand(playerNum);
        document.getElementById("deckCount").innerHTML = this.deck.length;
    }

    // Function to calculate value of a hand
    valHand(playerNum) {
        let val = new Number(0);
        let altVal = new Number(0);

        for (let i=0; i<this.players[playerNum].hand.length; i++) {
            val = val + this.players[playerNum].hand[i].value;
            if (this.players[playerNum].hand[i].rank === 'A') {
                altVal = altVal + 1;
            } else {
                altVal = altVal + this.players[playerNum].hand[i].value;
            }
        }
        this.players[playerNum].value = val;
        this.players[playerNum].altValue = altVal;
    }

    
} // Deck

//=====================================
// HTML Page functions
//=====================================
let myGame = new Game();
let theShoe = new Array();
theShoe = myGame.addDeck();
console.log(theShoe);
console.log(myGame.players);

function shuffleButton() {
    theShoe.splice(0, theShoe.length);
    theShoe = myGame.addDeck();
    console.log(theShoe);
}

function dealHandButton() {
    myGame.clearTable();
    myGame.dealHand();
    document.getElementById("deckCount").innerHTML = myGame.deck.length.toString();
    console.log(myGame);
}

function hitPlayerButton() {
    myGame.hitHand(1);
    var x = myGame.players[1].hand.length - 1;
    renderCard(myGame.players[1].hand[x], "playerHand", x);
    console.log(myGame.players[1].hand);
}

function hitDealerButton() {
    myGame.hitHand(0);
    console.log(myGame.players[0].hand); 
}

function renderCard(card, handID, z) {
    var node, e1, top, left;
    
    el = document.getElementById(handID);
    top = 0;
    left = z * .75;

    node = card.cardCreateNode();
    node.style.left = left + "em";
    node.style.top  = top  + "em";
    el.appendChild(node);
}