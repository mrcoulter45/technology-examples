# PyCharm

*PyCharm 2022.3.2*

### Run script in debug mode
- open new project > drag python script into pycharm

### Add folders to PYTHONPATH
- top toolbar > PyCharm > settings > select project in the left side bar > project structure > add content root > select folder to be added to PYTHONPATH > Apply
- make sure "Content Root" is added to PYTHONPATH
  - right click script in left side bar or right click anywhere in script code editor > modify run configurations > check "Add content roots to PYTHONPATH" and "Add source roots to PYTHONPATH"

### Add arg parse arg flags as script input
- right click script in left side bar or right click anywhere in script code editor > modify run configurations > in the "Parameters" box, add args like you would in the cmd line eg. `-i <input-file> -o <output-path>`

### Use existing venv
- Open your project in PyCharm
- Go to PyCharm > Settings
- Navigate to:
  - Project: <your project> > Python Interpreter
- Click 'Add interpreter'
- check existing
- click '...' and navigate to the python exe inside your venv

### Running pytests
- PyCharm > Settings > Tools > Python Integrated Tools > Testing > Default Test runner > pytest > OK
- left hand file viewer tree > find the pytest file you want to run (CE/pytests) > right click pytest file > Run/Debug pytest file
- pytest files can also be opened in the editor by double clicking them > individual pytest functions can be run by clicking the green run button in the file line number gutter
- if pytest throws python package errors:
  `<python-exe-pycharm-is-using> -m pip install <package>`
  - rerun pytest
