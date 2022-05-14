# Linux

## Commands
- find specific file in directory structure: `find . -path "*<part/of/path/filename>*"`
- find files that contain matching words: `grep -r "<text>" <path>`
  - grep ignore case, recursive, precede each matching line with a line number files with specific extension: `grep -inr --include \*.svh "<text>" <path>`
    - case insensative: `-i`
- transfer files via ssh: `scp <file> <username(result of whoami)>@<login-machine-name(result of hostname)>:<path-to-file>`
  - example: `scp example.txt michael123@DESKTOP-123:/home/michael/example/file/path`
  - copy directory: `scp -r user@ssh.example.com:/path/to/remote/source /path/to/local/destination`
- create soft link: `ln -s file1 link1`
  - Eg: `ln -s /projects/michael/ws0/web_app_project webapp`
- echo user name: `whoami`
  > `michael123`
- echo machine name: `hostname`
  > `DESKTOP-123`
- echo shell type: `echo $SHELL`
  > `/bin/bash`
- list all processes for a user: `ps -aef | grep <user-name>`
- pushd and popd:
  - push current dir to dir stack and switch to specified dir: `pushd [DIRECTORY]`
  - view currect dir stack: `dirs -lv`
    - Eg. outputs:
    ```
    0  /opt
    1  /usr/local
    2  /var/www
    3  /home/linuxize
    ```
  - to switch to a dir in the stack: `pushd +2` -> go to `/var/www` (top to bottom) or `pushd -1` -> go to `/var/www` (bottom to top)
  - to remove top dir from the dir stack and navigate to the next dir in the stack: `popd`
- show all processes that are hosting on ports: `lsof`
  - list process on specific port: `lsof -i :<port-num>`
    - Eg: `lsof -i :80`
  - search for specific strings: `lsof | grep -i <string>`
