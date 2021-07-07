import pdfjsLib from 'pdfjs-dist/webpack.js';


// see https://github.com/mozilla/pdf.js/blob/628e70fbb5dea3b9066aa5c34cca70aaafef8db2/src/display/dom_utils.js#L64

export default function() {

	this.fetch = function(query) {

    return import('raw-loader!pdfjs-dist/cmaps/' + query.name + '.bcmap' /* webpackChunkName: "pdfjs/noprefetch-[request]" */)
		.then(function(bcmap) {

			return {
				cMapData: bcmap,
				compressionType: pdfjsLib.CMapCompressionType.BINARY,
			};
		});
	}
}