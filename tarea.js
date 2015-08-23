function pipeline(seed /*, args */) {
    return _.reduce(_.rest(arguments),
        function(l,r) { return r(l); }
        ,seed);
}

function fifth(a) { return pipeline(a
    , _.rest
    , _.rest
    , _.rest
    , _.rest
    , _.first);
}

function negativeFifth(a) { return pipeline(a
    , fifth
    , function(n) { return -n }); }
var value = negativeFifth([1,2,3,4,5,6,7,8,9]); //=> -5
console.log(value);