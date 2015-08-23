function cat() {
    var head = _.first(arguments);
    if (existy(head))
        return head.concat.apply(head, _.rest(arguments));
    else
        return [];
}

function note(thing) {
    console.log(["NOTE:", thing].join(' '));
}

function construct(head, tail) {
    return cat([head], _.toArray(tail));
}


function actions(acts, done) {
    return function (seed) {
        var init = { values: [], state: seed };

        var intermediate = _.reduce(acts, function (stateObj, action) {
            var result = action(stateObj.state);
            var values = cat(stateObj.values, [result.answer]);
            return { values: values, state: result.state };
        }, init);

        var keep = _.filter(intermediate.values, existy);
        return done(keep, intermediate.state);
    };
};


function lift(answerFun, stateFun) {
    return function(/* args */) {
        var args = _.toArray(arguments);
        return function(state) {
            var ans = answerFun.apply(null, construct(state, args));
            var s = stateFun ? stateFun(state) : ans;

            return {answer: ans, state: s};
        };
    };
};

function sqr(n) {
    return n * n;
}

function note(n){
    console.log(n);
}

var mSqr2 = lift(sqr);
var mNote2 = lift(note, _.identity);
var mNeg2 = lift(function(n) { return -n });


var negativeSqrAction2 = actions([mSqr2(), mNote2(), mNeg2()], function(_, state) {
    return state;
});

negativeSqrAction2(100); // NOTE: 10000
//=> -10000