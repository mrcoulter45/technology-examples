# Fusion 360

## Info
Fusion 360 by Autodesk is the best 3D modeling software to use when it comes to 3D printing. 

## Movement
- `middle mouse` to pan
- `shift + middle mouse` to rotate around objects

## Components
- every object in the design should be its own component. This helps with object detail grouping
- new component: `assemble > new component`

## Browser
- the file structure

## Commands
- extrude: `e` - use to create solids from closed profile shapes created with line tool
- project: `p` - select geometry in the model to project onto a selected plane

## SVG
- svg files can be placed into the design: `insert > insert svg`

## Tools
- line: use to draw closed profile shapes to then extrude into 3D shapes
  - `l`
  - offset lines to allow for spacing error: `l (line tool) > sketch > offset`
  - construction lines: for reference only, do not interfere with modeling commands
  - center circle: `c`
- constructs: create planes, axis, and points
  - create plane between 2 planes: `sheet metal > construct > midplane`
  - create a plane that is offset from the selected face or plane: `sheet metal > construct > offset plane`
- loft: for bridging two line shapes together as a solid
  - `solid > create > loft`
- fillet: to round/bevel edges
  - `solid > tools > fillet`

## Mechanical Concepts
- for objects that need to slide together, keep a separation distance of 0.25mm between them
