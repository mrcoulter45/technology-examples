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
