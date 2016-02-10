import FredLayer from "../lib/fredSvg/fredLayer.js";
import Fred from "../lib/fredSvg.js";
import {DOMParser as Dom} from "xmldom";
import xpath from "xpath";
const fileSystem = require("fs");

describe("Fred(input)", () => {
	let input,
			fred;

	beforeEach(() => {
		input = fileSystem.readFileSync(`${__dirname}/fixtures/fred-svg.svg`, "utf-8");
		fred = new Fred(input);
	});

	describe(".constructor(input)", () => {
		describe("(When input is a string of SVG XML)", () => {
			it("should parse the string into an SVG Document", () => {
				console.log("BLAHHHH", xpath.select("switch > g > g", fred.document));
			});
		});

		describe("(When input is an SVG Document)", () => {
			let svgDocument;

			beforeEach(() => {
				svgDocument = {};
				fred = new Fred(svgDocument);
			});

			it("should save the SVG Document to .document", () => {
				fred.document.should.eql(svgDocument);
			});
		});

		it("should parse layer names into a .layers array", () => {
			fred.layers.should.eql(["Typelogo", "Face"]);
		});

		it("should instantiate instances of Layer on properties for each parsed top-level SVG layer", () => {
			fred.face.should.be.instanceOf(FredLayer);
		});

		it("should pass the layer document node to the instantiated Layer object", () => {
			fred.face.name.should.eql("Face");
		});
	});
});
