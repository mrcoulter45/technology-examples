# Windows Subsystem for Linux

- alias file: ~/.bash_aliases
  - example ~/.bash_aliases file:
```
echo "~/.bash_aliases executed"
set prompt='[%n@%m %/]$ '
alias cls='clear'
alias ls='ls -la --color=auto'
alias gs='git status'
alias gb='git branch'
alias gr='git remote -v'
alias gl='git log'
alias gd='git diff'
alias docs='cd "/mnt/c/Users/michael/Documents"'
```
- setup nodejs/npm: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2

## Mounting network locations
When you wish to mount a network location, you can of course create a mapped network drive in Windows and mount that as indicated above. However, it's also possible to mount them directly using a UNC path:
```
$ sudo mkdir /mnt/z
$ sudo mount -t drvfs '\\server\share' /mnt/z
```
https://superuser.com/questions/1128634/how-to-access-mounted-network-drive-on-windows-linux-subsystem/1261563
