
let renderToNode = function (template, node) {
	if (!node) return;
	node.innerHTML = template;
};

function templateHtml(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string} ${values[i] || ''}`;
    });
    return str;
 }

export {
    renderToNode,
    templateHtml
}