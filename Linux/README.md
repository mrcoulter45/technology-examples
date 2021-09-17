# Linux

## Commands
- find specific file in directory structure: `find . -path "*<part/of/path/filename>*"`
- find files that contain matching words: `grep -r "User defined signal " <path>`
  - grep ignore case, recursive, precede each matching line with a line number files with specific extension: `grep -inr --include \*.svh "<text>" <path>`
    - case insensative: `-i`
- transfer files via ssh: `scp <file> <username(result of whoami)>@<login-machine-name(result of hostname)>:<path-to-file>`
  - example: `scp example.txt michael123@login8.michael.com:/home/michael/example/file/path`
  - copy directory: `scp -r user@ssh.example.com:/path/to/remote/source /path/to/local/destination`
- create soft link: `ln -s file1 link1`
  - Eg: `ln -s /projects/michael/ws0/web_app_project webapp`
- echo user name: `whoami`
  > `miccou01`
- echo machine name: `hostname`
  > `DESKTOP-10985467H`
- echo shell type: `echo $SHELL`
  > `/bin/bash`

ll

pushd and popd

