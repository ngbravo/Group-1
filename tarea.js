

var mSqr2 = lift(sqr);
var mNote2 = lift(note, _.identity);
var mNeg2 = lift(function(n) { return -n });


var negativeSqrAction2 = actions([mSqr2(), mNote2(), mNeg2()], function(_, state) {
    return state;
});

negativeSqrAction2(100); // NOTE: 10000
//=> -10000