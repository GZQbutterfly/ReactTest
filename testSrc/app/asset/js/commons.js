function hide(dom) {
    return $(dom).addClass('layout-hide');
}

function show(dom) {
    return $(dom).removeClass('layout-hide');
}

let commons = {
  show,
  hide
};
window.commons = commons;
// ==>
module.exports = commons;
