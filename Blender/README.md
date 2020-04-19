# Blender
###### *2.82a*

## Operation
- orbit movement: `middle mouse button, cartesian gizmo in top right`
- zoom: `wheel, plus magnifying glass gizmo in top right`
- pan left/right/up/down: `shift + middle mouse button, hand gizmo in top right`
- look at view from perfect axis viewpoint: `click one of the axis in the cartesian gizmo`
- look at view from camera viewpoint: `camera gizmo in top right`
- to move camera - `position view > F3 > Align Camera to View` or `n > Lock Camera to View`
- view menu: \`
  includes:
  1. view camera
  1. focus selected object
  1. right
  1. left
  1. front
  1. back
  1. top
  1. bottom
- turn off grid lines, camera, light, other extras: `"Show Overlays" in top right`
- toggle gizmos: `"Show Gizmo" in top right`
- selection tool types: `w`
- move 3D cursor: `shift + right click`
- cursor menu: `shift + s`
- grab selected object: `g, middle mouse to drag along axis or xyz, type a number to move specified number of units, alt will reset this stat to default value`
- rotate selected object: `r, xyz for rotation axis, type degrees, alt will reset this stat to default value`
- scale selected object: `s, xyz for direction, alt will reset this stat to default value` or `Object Properties > type in exact scale measurements`
- add object: `shift + a`
- search for Blender operation: `F3`
- view clipping settings - `n`
- select all - `a`
- deselct all - `alt + a`
- move selected to collection - `m`
- toggle viewport modes - `z`
- create parent of multiple objects - `select all relevant objects (parent object last) > ctrl + p > Object (Keep Transform)` - they will all appear as one object in the Scene Collection
- to select rendering engine - `Render Properties > Render Engine`
- to correct light for render - `Render Properties > Color Management > View Transform > False Color`
- render sampling should be `128`
- rendering process: `View Layer Properties > Denoising Data > Compositing > Check Use Nodes top left > Add Denoise Node > Noisy Image -> Image > Denoising Normal -> Normal > Denoising Albedo -> Albedo > Image -> Image > Render`
- set units (metric, imperial) - `Scene Properties > Units`

## Modeling
- edit mode - `tab`
- proportional editing - `o`
- to smooth the surface of curved objects:
    1. select object
    1. right click object > Shade Smooth
    1. wrench (Modifier Properties) > Add Modifier > Subdivision Surface
  - to give thickness to a mesh:
    1. select object
    1. wrench (Modifier Properties) > Add Modifier > Solidify
- x-ray mode - `"Toggle X-Ray" gizmo in top right`
- create object from a duplicate of selected mesh faces - `p` then `selection`
- to increase vertices on a mesh - `select all vertices > right click > subdivide` - subdivide menu will then appear
- select single row or column of vertices - `alt + left click`
- invert selected vertices - `ctrl + i`
- hide selcted vertices - `h`
- show all hidden vertices - `alt + h`
- get vertices and affected vertices to stick to mesh underneath while proportional editing - `enable snap on top` then `Snapping > face > Project Individual Elements`
- extrude - `select > 1 vertex then e`
- make overlay hug underlying structure better - `solidifier modifier > Crease > Inner > 1`

## Sculpting
- select item and apply the subdivision modifier
- change brush size - `f`
- change brush strength - `shift + f`
- pull mesh out - `left click + drag` 
- push mesh in - `ctrl + left click + drag` 

## Materials
- color, roughness

## Notes
- The mesh characteristics segments, rings, and vertices can only be modified during the initial mesh creation. Once the object is deselcted, the menu will disappear and the characteristics will be permanent. 
- Modifiers work top to bottom.
- Modifiers can be enabled/disabled in different modes from the modifyer menu.

## [Tutorial](https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U)
Amazing Blender tutorial by [*Blender Guru*](https://www.youtube.com/channel/UCOKHwx1VCdgnxwbjyb9Iu1g) can be found [here](https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U).
