import { DOMParser} from "xmldom";

const normalizeInput = Symbol();

export default class FredSvg {
	constructor(input) {
		this[normalizeInput](input);
	}

	[normalizeInput](input) {
		if (input.constructor === String) {
			const svgXmlString = input;
			this.document = new DOMParser().parseFromString(svgXmlString);
		} else {
			this.document = input;
		}
	}
}
