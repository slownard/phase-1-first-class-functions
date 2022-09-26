// define first class functin
//functions are first-class objects, which means they can be passed into other functions as values

// define higher-order-functions
//  a function that can accept functions as arguments or return a function

// 

function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    return receivesAFunction;
}

//let returnsAnAnonymousFunction = function () {
//    console.log('Anonymous function');}

//returnsAnAnonymousFunction(function () { });


function returnsAnAnonymousFunction() {
    let show = function () {
        console.log();
    }

    //function () {
    //    console.log('');
    //};
    return show;
}