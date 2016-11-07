'use strict'; //eslint-disable-line

const fs = require('fs');

// Read svg directory for list of image names to pass to demo template
const iconNames = fs.readdirSync('svg').filter((file) => {

	// File is an SVG
	return file.indexOf(".svg") > -1;

}).map((file) => {
	// Removes .svg extension
	return file.slice(0, -4);
});

function listImages() {
	const icons = iconNames.map((file) => {
		return { name: file };
	});

	// Write the list of icons found in /svg to the data.json file.
	fs.writeFileSync('imageList.json', JSON.stringify({ icons: icons }, null, '\t'), { encoding: 'utf-8' });
}

listImages();
