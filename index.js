module.exports = function (content) {
    this.cacheable && this.cacheable();
    this.value = content;
    var result = '';
    result += `Object.defineProperty(exports, "__esModule", { value: true });\n';
    result += 'exports.default = '  + JSON.stringify(content);
    return result;
}
