    function Game() {
        
        this.scores = []
        this.frames = []
        this.add_frames = []
        this.previousScore = undefined
        this.gameOver = false
        
    }

Game.prototype.bowl = function(score) {
    
    
    if(this.frames.length === 10) {
        this.gameOver = true
            return
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

Game.prototype.add = function() {
    if(this.frames[0].length === 1) {
      var h = this.frames[0].pop()
      this.add_frames.push(h)
    }else if(this.frames[0].valueOf() === 10){
      var h = this.frames[0].pop()
      this.add_frames.push(h) 
    }else
      this.add_frames = this.frames[0].reduce(function(a, b){
        return a + b
    })
  
    return this.add_frames
    
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
    }, );
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

