# Linux

## Commands
- find specific file in directory structure: `find . -path "*<part/of/path/filename>*"`
- find files that contain matching words: `grep -r "User defined signal " <path>`
  - case insensative: `-i`
- transfer files via ssh: `scp <file> <username>@<login-machine-name>:<path>`
  - example: `scp example.txt michael123@login8.michael.com:/home/michael/example/file/path`
  - copy directory: `scp -r user@ssh.example.com:/path/to/remote/source /path/to/local/destination`

ll ?

pushd and popd
