var Player = {
  initialize: function(inputSymbol) {
    this.symbol = inputSymbol;
  },
  create: function(inputSymbol) {
    var testPlayer = Object.create(Player);
    testPlayer.initialize(inputSymbol);
    return testPlayer;
  }
};

var Space = {
  initialize: function(x,y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x,y) {
    var testSpace = Object.create(Space);
    testSpace.initialize(x,y);
    return testSpace;
  },
  markBy: function(symbol) {
    this.markedBy = symbol;
    return this.markedBy;
  },
};


var Board = {
  initialize: function() {
    this.space1 = Space.create(1,1);
    this.space2 = Space.create(1,2);
    this.space3 = Space.create(1,3);
    this.space4 = Space.create(2,1);
    this.space5 = Space.create(2,2);
    this.space6 = Space.create(2,3);
    this.space7 = Space.create(3,1);
    this.space8 = Space.create(3,2);
    this.space9 = Space.create(3,3);
  },
  create: function() {
    var testBoard = Object.create(Board);
    testBoard.initialize();
    return testBoard;
  }
    // var coordinates = [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]];
    // this.spaces = [];
    // coordinates.forEach(function(coordinate) {
    //   var newSpace = Object.create(Space);
    //   newSpace.initialize(coordinate[0],coordinate[1]);
    //   console.log(newSpace);
    //   this.spaces.push(newSpace);
    //   console.log(this.boardSpaces);
    // });
}
