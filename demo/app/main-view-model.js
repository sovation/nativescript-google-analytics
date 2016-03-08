var viewModel;
var observable = require('data/observable').Observable;

viewModel = new observable({
    counter: 42,
    message: ""
});

module.exports = viewModel;