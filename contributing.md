# How to contribute to o-icons

Thank you for your interest in contributing to fticons! As our icons are used by a lot of different applications, we have a few constraints for new ones. If you aren't sure if your new icon meets any of these, please [raise an issue](http://github.com/financial-times/fticons/issues), or ask in the [#ft-origami slack channel](https://financialtimes.slack.com/messages/ft-origami/).
Thank you!

## Adding or updating an icon

If you want to add or update an icon, please open a pull request, making sure the new icon meets the following criteria:

### Design:

1. icons must be a single colour (black)
1. icons should be suitable for reuse in more than 1 application
1. icons must meet a need that is not already met by a pre-existing icon
1. icons must be square
1. icons should align to a 40x40 pixel grid, with 10px padding on each side
1. icons should be a solid shape rather than outlines where possible
1. icons should have a minimum line thickness of 2px (including negative space thickness)
1. icons should have square rather than rounded corners where suitable

### Technical:

1. icons must be SVG v1.1
1. icons should have a bounding box of 1024. This is because of a quirk with the image service v1, whereby a conversion from SVG to PNG will be very blurry if the _source_ SVG has a small viewBox.
1. icons must not contain any ClipPaths. This is because the conversion of SVG to PNG does not work if ClipPaths are present.
1. icons must have been run through an SVG compression service (such as [SVGOMG](https://jakearchibald.github.io/svgomg/))
1. icons must have been tested with the [Responsive Image Service](https://financial-times.github.io/responsive-image-proxy-helper/)'s SVG -> PNG conversion. [How do I do this?](#how-to-test-an-icon-with-the-image-service)
1. icons must have been tested with the image service's tinting option.

### Naming conventions:

  - all lower case
  - contain only letters, numbers and hyphens (no spaces)
  - end with .svg
  -- **Good**: columnists.svg, back-arrow.svg
  -- **Bad**: RightArrow.svg, linked_in.svg, yahoo!.svg

## How to add a new icon

If your icon meets the design and technical criteria please follow the following steps and then open a Pull Request:

1. Clone the repository and install dependencies:

		git clone https://github.com/Financial-Times/o-icons.git
		cd fticons
		obt install

1. Add or edit an SVG file to the `svg` folder.
1. Rebuild the imageList.json so people can see the demos over on http://registry.origami.ft.com/components/fticons. You will need gulp to be installed to do this, then you can run:

		gulp

## Removing an icon

A lot of people use o-icons in many different ways. To remove an icon completely from o-icons, please [raise an issue](http://github.com/financial-times/o-icons/issues) so that the Origami team can manage the deprecation process.

## How to test an icon with the Image Service

The Image Service provides the ability to convert an SVG to a PNG. This is useful as a fallback for browsers that don't support SVGs.

The Image Service doesn't support clipPaths, so any SVG that has a clipPath in it may not render correctly. To check if your SVG works, upload it somewhere (eg dropbox, or gh-pages) and then run its public url through the Image Service with `format=png` as a parameter. ie:

`https://image.webservices.ft.com/v1/images/raw/{http://path-to-image.svg}?source=test&format=png`
