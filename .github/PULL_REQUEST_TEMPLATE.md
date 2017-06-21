**Description:**


**Checklist:**

- [ ] Icons must be a single colour (black)
- [ ] Icons must be square
- [ ] Icons must meet a need that is not already met by a pre-existing icon
- [ ] Icons should be suitable for reuse in more than 1 application
- [ ] Icons should align to a 40x40 pixel grid, with 10px padding on each side
- [ ] Icons should be a solid shape rather than outlines where possible
- [ ] Icons should have a minimum line thickness of 2px (including negative space thickness)
- [ ] Icons should have square rather than rounded corners where suitable
- [ ] Icons must be SVG v1.1
- [ ] Icons must not contain any ClipPaths. This is because the conversion of SVG to PNG in v1 of the Image Service does not work if ClipPaths are present.
- [ ] Icons must have been run through an SVG compression service (such as SVGOMG)
- [ ] Icons must have been tested with the Responsive Image Service's SVG -> PNG conversion.
- [ ] Icons must have been tested with the Image Service's tinting option. How do I do this?
- [ ] Icons should have a bounding box of 1024. This is because of a quirk with both versions of the Image Service, whereby a conversion from SVG to PNG will be very blurry if the source SVG has a small viewBox.
- [ ] Icon names must be made up only of lowecase a-z, or a hyphen
- [ ] Icon names must include the .svg file extension


|Testing PNG conversion using Origami Image Service: Completed?
|---|---|
- [ ] v1
- [ ] v2

Testing PNG + resizing using Origami Image Service: Completed?
- [ ] v1
- [ ] v2

|Testing tinting using Origami Image Service: Completed?
- [ ] v1
- [ ] v2
