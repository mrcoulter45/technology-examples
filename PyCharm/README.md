# PyCharm

*PyCharm 2022.3.2*

## Run script in debug mode
- open new project > drag python script into pycharm

### Add folders to PYTHONPATH
- top toolbar > PyCharm > settings > select project in the left side bar > project structure > add content root > select folder to be added to PYTHONPATH > Apply
- make sure "Content Root" is added to PYTHONPATH
  - right click script in left side bar or right click anywhere in script code editor > modify run configurations > check "Add content roots to PYTHONPATH" and "Add source roots to PYTHONPATH"

### Add arg parse arg flags as script input
- right click script in left side bar or right click anywhere in script code editor > modify run configurations > in the "Parameters" box, add args like you would in the cmd line eg. `-i <input-file> -o <output-path>`
