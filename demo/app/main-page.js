var viewModel = require("./main-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;

function tapAction(args) {
    debugger;
    viewModel.counter--;
    if (viewModel.counter <= 0) {
        viewModel.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    }
    else {
        viewModel.message = viewModel.counter + " taps left";
    }
}

exports.tapAction = tapAction;