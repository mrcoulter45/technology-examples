# Unreal Engine 4

## GUI
- **level editor**: main screen where you see the world, create levels, place and modify actors, test levels, etc.
- **controls**: in edit mode, hold right click to move, WASD keys to fly around
- **top right buttons in level editor**: tools for manipulating actors in the levels. Move, rotate, scale actors. Tools can be set to snap at intervals and set to local space or world space.
- **top left buttons in level editor**: changes the way the viewport renders. Can show or hide types of actors, change which render buffer is shown, enable wire frame, disable lighting, and more.
- **mode panel**: on the left contains various tool modes for the editor. Change primary behavior of the level editor for specialized tasks, such as placing new items into the world, creating geometry and volumes, painting on meshes, generating foliage, and sculpting landscapes.
- **content browser**: on the bottom is the primary area for creating, importing, organizing, viewing and modifying content assets within unreal editor. Provides ability to manage content folders and perform other useful operations on assets, such as renaming, moving, copying, and viewing references. Can search for and interact with all assets in the game project.
- **details panel**: contains information, utilities and functions specific to the current selection. Contains transform edit boxes for moving, rotating, and scaling Actors, displays all of the editable properties for the selected Actors, and provides quick access to additional editing functionality depending on the types of Actors selected in the viewport.
- **world outliner**: displays all of the Actors within the scene in a hierarchical tree view. Actors can be selected and modified directly from the World Outliner. You can also use the Column Selector arrow dropdown in the top right to display an extra column that shows Levels, Layers, or ID Names.
- **toolbar**: provides quick access to commonly used tools and operations.
- **menu bar**: similar to the menu bar found in many computer applications; it provides access to general tools and commands that are used when working with levels in the editor.
- **ctrl + alt**: hover over a tool and hold these keys to get extended info on the tool

## Multiplayer
Video 1
- server is the master, determines all outcome of gameplay
- two types of servers:
- listen server: when someone is hosting a game, and also using a client to play the game as well
- dedicated server: only hosts game
- replication: making sure all game state is replicated on all client machines
- play button dropdown has local multiplayer (can create a listen server or a dedicated server)
Video 2
things you can do specifically on the host/different clients
you can limit certain Actor replication to server/client
you can limit certain Actor attribute/variable replication to server/client
clients should never modify replicated data, they need to notify the server to make the change
actions in blueprint with server/lightening bolt in top right corner means that action can only possibly be run on the server
actions in blueprint with monitor/lightening bolt in top right corner means that actions occurring after this will only be run on client
RepNotify -  allows clients to call a function on a replicated object’s state change (when streetlight changes state, the client should run an appropriate function to change the light color)
Video 3
function replication - eg. an explosion - when the server triggers an explosion event, clients need to run a function to see the explosion
reliable - don’t check this box for cosmetics. Not the most important thing in the game, but you still probably won’t see any problems unless you have trash connection
Video 4
concept/scenario of players joining game late/in progress, player needs to see the game in its “used” already-interacted-with state
it’s not important to send every actor in a game every piece of data that every Actor does in a world (two characters across a large map from each other with nothing in common/no dependencies)
network relevancy - the idea that each Actor only has a limited FOV and data that is network relevant to them
steps need to be taken to accomplish this
Video 5
