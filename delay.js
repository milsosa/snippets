function resolve(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}

function reject(ms, value) {
  return new Promise((_, reject) => setTimeout(reject, ms, value));
}

resolve.resolve = resolve;

exports = module.exports = resolve;
exports.resolve = resolve;
exports.reject = reject;
