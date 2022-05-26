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
- move
  - `s` > move

## Mechanical Concepts
- for objects that need to slide together, keep a separation distance of 0.25mm between them

## Mesh workspace not visable
- https://knowledge.autodesk.com/support/fusion-360/troubleshooting/caas/sfdcarticles/sfdcarticles/The-mesh-workspace-is-missing-in-Fusion-360.html

## Import STL
- Insert > Insert mesh
- mesh > modify > face groups > generate face groups > fine tune as much as possible
- s (command search)
- mesh to BRep
- simplify faces (https://www.youtube.com/watch?v=CeMHqa9Pxn8)
- edit model manually

## Export for 3D Printing
- https://www.google.com/search?q=fusion+360+export+stl&rlz=1C1RXQR_enUS927US927&oq=fusion+360+export+stl&aqs=chrome..69i57j0i512l9.4290j0j4&sourceid=chrome&ie=UTF-8
⬇⬇⬇
- Right click the component, component group, or body in the model Browser tree (left panel).
- Select Save As Mesh.
- Select the Format that you would like to save. (Format > STL Binary)
- Click OK.

- Slic3r.exe is located at: C:\Program Files (x86)\Slic3r-1.3.0.64bit

## Measure
- solid > inspect > measure > selection filter > select face/edge/vertex > click on model 1st face/edge/vertex > click on model 2nd face/edge/vertex

## Search
- `s`

## Change/Edit Radius of Cylinder
- `s` > offset face

## Extrude and Make Cut
- extrude > operation > new component
