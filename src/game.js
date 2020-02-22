function Game() {
    
    this.scores = []
    this.frames = []
    this.previousScore = undefined
    
}

Game.prototype.bowl = function(score) {
    
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

Game.prototype.endGame = function() {
    return this.frames.length === 10
        
}






