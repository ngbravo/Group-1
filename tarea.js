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