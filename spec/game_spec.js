describe('game', function () {
    var game 

    beforeEach(function() {
        game = new Game();
        
    });


    it('is a game', function() {
        game
    });

    it('takes a score', function() {
        expect(game.bowl(10)).toEqual(10)
    });

});
