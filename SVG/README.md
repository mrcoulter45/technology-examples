# SVG

## viewport
viewport: (window) that allows you to see the svg, the viewport of an svg element is controlled by setting its width and height

## viewbox
viewBox: similar to viewport but it can pan and zoom (telescope)
  viewBox="minX minY width height"
    minX, minY - define where the top left corner of the viewBox should be, you change these numbers to pan around the svg
    width, height - define width and height of the viewBox, used for zooming, make width/height larger to zoom out, smaller to zoom in 

## Path
- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto
- A = elliptical Arc
- Z = closepath

Eg. to make a triangle:
```html
<svg height="210" width="400">
  <path d="M150 0 L75 200 L225 200 Z" />
  Sorry, your browser does not support inline SVG.
</svg>
```
[SVG Path w3schools](https://www.w3schools.com/graphics/svg_path.asp)
