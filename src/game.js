    function Game() {
        
        this.scores = []
        this.frames = []
        this.previousScore = undefined
        this.gameOver = false
        
    }

Game.prototype.bowl = function(score) {
    
    
    if(this.frames.length === 10) {
        this.gameOver = true
        
    }else
    this.scores.push(score);
        if(this.previousScore !== undefined) {
            this.frames.push([this.previousScore, score])
            this.previousScore = undefined 
        } else 
            if (score == 10) 
                this.frames.push([score])
            else
                this.previousScore = score

}



Game.prototype.sort = function() {
    this.frameOne = this.frames[0]
    this.frameTwo = this.frames[1]
    this.frameThree = this.frames[2]
    this.frameFour = this.frames[3]
    this.frameFive = this.frames[4]
    this.frameSix = this.frames[5]
    this.frameSeven = this.frames[6]
    this.frameEight = this.frames[7]
    this.frameNine = this.frames[8]
    this.frameTen = this.frames[9]
    this.bonusFrame = this.frames[10]
}

Game.prototype.gutterBall = function() {
    this.score = this.scores.reduce(function(a, b){
        return a + b;
    }, 0);
}

Game.prototype.perfectGame = function() {
    this.score = this.scores.reduce(function(a, b){
        return a + b;
    })
}

Game.prototype.extraFrame = function() {
    this.extra = this.frameTen.reduce(function(a, b) {
        return a + b;
            
    })
}
  
    




