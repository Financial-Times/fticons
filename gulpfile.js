'use strict';

const gulp = require('gulp');
const fs = require('fs');

// Read svg directory for list of icon names to pass to demo template
const iconNames = fs.readdirSync('svg').filter((file) => {

	// File is an SVG
	return file.indexOf(".svg") > -1;

}).map((file) => {
	// Removes .svg extension
	return file.slice(0, -4);
});

gulp.task('demoConfig', () => {
	const icons = iconNames.map((file) => {
		return { name: file };
	});

	// Write the list of icons found in /svg to the data.json file.
	fs.writeFileSync('demos/src/data.json', JSON.stringify({ icons: icons }, null, '\t'), { encoding: 'utf-8' });
});

gulp.task('default', ['demoConfig']);
