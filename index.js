console.log('Loading the simple add function');

exports.handler = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    if (event.a === undefined || event.b === undefined) {
        callback("400 Invalid Input");
    }
    
    var res = {};
    res.a = Number(event.a);
    res.b = Number(event.b);
    
    if (isNaN(event.a) || isNaN(event.b)) {
        callback("400 Invalid Operand");
    }
    res.c = res.a + res.b;
    callback(null, res);
};