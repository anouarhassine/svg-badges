var fs = require('fs');
var path = require("path");
var swig = require('swig-templates');
var PDFDocument = require('pdfkit');
var doc = new PDFDocument({size:'A4', layout:'landscape'});
var fontFile = path.resolve(__dirname, '../Fonts/verdana.ttf');

doc = doc.font(fontFile);
doc = doc.fontSize(11);

function generateBadge(platform, info, color) {
  return new Promise(resolve => {
	var leftText = platform;
	var rightText = info;
	var leftWidth = doc.widthOfString(leftText);
	var rightWidth = doc.widthOfString(rightText);
	var padding = 5;

	var templateFile = path.resolve(__dirname, '../Templates/flat.svg');
	
	resolve(swig.renderFile(templateFile, {
			leftWidth: Math.ceil(leftWidth),
			rightWidth: Math.ceil(rightWidth),
			padding: padding,
			leftText: leftText,
			rightText: rightText,
			rightColor: color
  	}))
  });
}

exports.generateBadge = generateBadge;