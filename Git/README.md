# Git

## Terms
- **Git**: a program that allows us to keep track of changes to a project
- **Github**: a website that uses Git to store repositories of code for the world to see
- **working directory**: local files on your machine that you are working on, not necessarily on the repository
- **remote**: an alias for the URL of a git repository
- **origin**: default remote name given to the repository from which the git clone was performed
- **master**: default name given to the first branch automatically created in the repository
- **HEAD**: the alias for the most recent SHA1 ID of the branch that you are currently in
- **diverge**: whenever your current branch has commits that origin/master doesn’t have and origin/master has commits that your current branch doesn’t have
- **fast-forward merge**: the HEAD of the branch that accepted the rebase commits needs to catch up with the position of the newest feature branch commit, because of the fact that the commits from the feature branch got placed on top of the accepting branches HEAD, basically just moves HEAD to the newest commit

## Commands
- set account name: `git config --global user.name "<name>"`
- set account email: `git config --global user.email "<email>"`
- set editor: `git config --global core.editor "<command-to-open-editor>"`
  - commit messages, rebasing, etc. will be done in this editor
- list current configurations: `git config --list`
- create an empty git repo in current folder: `git init`
- download objects and refs from another repository: `git fetch <remote>`
- add a remote alias to your local repository: `git remote add <remote-name> <remote-url>`
- list remotes: `git remote -v`
- reverse(undo) a commit in a seperate commit: `git revert <commit-sha>`
- diff a specific commit: `git diff <commit-sha> -p`
- add every file in directory: `git add .`
- add all tracked files that have changed: `git add -u`
- discard all changes you have made since last checkout: `git reset --hard HEAD`
- set current working directory to specified fetched <remote>/<branch>: `git reset --hard <remote>/<branch>`
- create a new local branch from local changes: `git checkout -b <new-branch-name>`
- checkout a remote branch that is not yet local: `git checkout -b <name-of-new-branch> <remote>/<existing-remote-branch-name>`
- force delete a local branch: `git branch -D <branch-name>`
- show all remote branches of the repo that you are in: `git branch -a`
- save all unstaged changes away and clean working directory to match the HEAD commit: `git stash`
  - show all git stashes: `git stash list` - returns a list of stash IDs
  - restore a git stash: `git stash apply <stash-id>`
    - Eg: `git stash apply stash@{0}`
- show all past state of your git project directory: `git reflog`
  - reset to any state listed in the git reflog: `git reset --hard <reflog-sha>`
  - can be used to undo commits, go back to certain commits, undo rebases, etc.
  - git reflog with more information: `git log -g`

## Merge Conflicts
```
<<<<<<< HEAD
foo
=======
bar
>>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d
```
  - top half is the branch you a merging into
  - bottom half is from the commit that you are trying to merge in
