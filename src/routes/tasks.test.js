const tape = require('tape')
const tasks = require('./tasks')

// tape('timing test', function (t) {
//     const data = [{subject: 'lala', content: 'lolo'}]
//     const funs = tasks.create({genId: () => 1, tasks: data})
//     t.plan(2);
//     const req = {
//       body: {
//         subject: null
//       }
//     }
//     const res = {
//       sendStatus: code => code === 406
//     }
//     funs.createUser(req, res, next)
//     t.equal(typeof Date.now, 'function');
//     var start = Date.now();
    
//     setTimeout(function () {
//         t.equal(Date.now() - start, 100);
//     }, 100);
// })


tape('timing test', function (t) {
    t.plan(2);
    
    t.equal(typeof Date.now, 'function');
    var start = Date.now();
    
    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
})