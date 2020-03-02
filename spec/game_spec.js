describe('game', function () {
    var game 

    beforeEach(function() {
        game = new Game();
    });

    it('records scores', function() {
        game.bowl(10)
        game.bowl(5)
        expect(game.scores).toEqual([10, 5])
    });

    it('record a frame', function() {
        game.bowl(4)
        game.bowl(5)
        expect(game.frames).toEqual([[4, 5]])
    });

    it('records a strike', function() {
        game.bowl(10)
        expect(game.frames).toEqual([[10]])
    })
 

    it('knows when the game is over', function() {
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)

        
      
        expect(game.gameOver).toEqual(true)
    })

    it('knows when the game is not over', function() {
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        
        
      
        expect(game.gameOver).toEqual(false)
    })

    it('updates each frame with scores', function() {
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.bowl(5)
        game.sort()
        expect(game.frameTen).toEqual([5, 5])
    })

    it('updates each frame with strikes', function() {
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.sort()
        expect(game.frameTen).toEqual([10])

    })

    it('recognizes a gutter ball', function() {
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.bowl(0)
        game.gutterBall()
        expect(game.score).toEqual(0)
    })

    it('recognizes a Perfect Game', function() {
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        game.perfectGame()
        expect(game.score).toEqual(110)
    })
});
