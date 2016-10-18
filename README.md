# Icon set for FT
This is the (new) icon set for FT websites. It replaces the assets in o-icons.

The icons have been designed to work best at 40px. At this size they align precisely with the pixel grid and do not appear blurry.

## Index
- [Migrating from o-icons assets](#migrating-from-o-icons-assets)
- [What happened to o-icons](#what-happened-to-o-icons)


## Migrating from o-icons assets
If you were using the old o-icons assets, some things have changed in this new set.

The whitespace around icons has now been standardised. This means that some of the padding may have changed, so if your code inserts and icon to line up with some other stuff, you should check that still works, you may need to adjust it.

### Removed
The following icons no longer exist:
- `arrow-downwards` (use `arrow-down`)
- `arrow-upwards` (use `arrow-up`)
- `comment` (use `speech`)
- `cross-disk` (use `cross`)
- `pinterest` (social icons are used differently, please use the ones in bitbucket: http://git.svc.ft.com/projects/DATA/repos/social-images/browse)
- `section-business-life`
- `section-magazine`
- `single-quote-patterned` (use `speech-left`)
- `single-quote` (use `speech-left`)
- `thumb-up` (please let us know if you need this back)
- `tick-thin` (use tick)

### Renamed
- `arrow-up-down` to `arrows-up-down`
- `bell` to `notification`
- `copy-link` to `link`
- `email` to `mail`
- `ipad-portrait` to `ipad`
- `padlock` to `lock`
- `printer` to `print`
- `pullquote` to `speech-left`
- `speechbubble` to `speech`

### New!
- `arrows-left-right`
- `book`
- `pause`
- `stop`
- `phone`
- `list`
- `user`
- `users`

## Creating or modifying new icons

Please check out our [contributing guide](https://github.com/Financial-Times/o-icons/blob/master/contributing.md) for design and development guidelines for adding or modifying icons.


## What happened to o-icons
[o-icons](https://github.com/Financial-Times/o-icons) still exists, and provides Sass mixins to use icons with. In order to properly version the icon set we've moved it to it's own repo (this one). This means we can do major releases of o-icons Sass without needing to bump the icon set (which can be accessed independently of o-icons via the image service.)


## SVG icons GOTCHAs


### My icons are blurry!

SVG icons will be blurry at small sizes. To get the crispest icons the SVG needs map precisely to a pixel grid. We use a 40px grid for icons. Drawing your icons on a 40px grid will make your icons crisp at 40px, but they will still be slightly fuzzy if used at, say, 30px.


### I'm exporting my icons at 40px and they should work but they're still fuzzy!

Sometimes sketch will export icons with rounding errors, so if you think you're exporting them on the correct grid and they're still blurry, open the source and look if the path points are values like 372.00000001. The fix for this is to either:
- not use sketch
- hand edit your SVGs to remove these errors



----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
