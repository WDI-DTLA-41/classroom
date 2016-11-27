[Slides for accompanying lecture](https://presentations.generalassemb.ly/9e85fb2a9aafc3f39b0ca0c1ece18e38)

# Intro to Git and Github

## Learning Objectives
+ Explain basic git commands like init, add, commit, push, pull and clone
+ Distinguish between local and remote repositories
+ Create, copy, and delete repositories locally, or on Github
+ Fork and clone remote repositories

## Intro to Git

### What is Git?

Git is a distributed version control system. The purpose of Git is to manage a project, or a set of files, as they change over time.

A codebase in Git is referred to as a *repository*, or *repo*, for short.

### Why use Git?

+ Reverse changes
+ Collaborate with others

![gitflow](http://rogerdudler.github.io/git-guide/img/branches.png)

### Workflow
![git_workflow](http://i.imgur.com/3HCGTlP.png)

### How Git works
1. You modify files in your working directory. This is where you work!!!!
2. The repository is in .git/. One of the directories is the objects directory, it conatins the project history.
3. You stage the files, adding snapshots of them to your staging/index area.
4. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git repository.

### Common Git commands

| Command  | Description |
| :------- | :-----------|
| init     | creates a new git repository |
| add      | copies files (at their current state) to the stage |
| status   | check which files have changes or staged for commit |
| commit   | saves a snapshot of the stage as a commit |
| reset    | go back to a specific snapshot |
| checkout | switch between commits or branches |
| diff     | view list of changes between two commits |
| merge    | combines two branches together |
| log      | displays a list of your commits |
| push     | uploads your changes to a remote repository |
| pull     | downloads changes from a remote repository |
| clone    | copies a remote repository locally |

## Git Codealong

### Create a new repository 
Create a new directory called git_test, open it and perform a
```
git init
```
### Add & Commit
You can propose changes using
```
git add <filename>
```
or add all files to staging
```
git add .
```
Check the files you added before saving changes
```
git status
```
To save a snapshot of the changes locally
```
git commit -m "Commit message"
```
### Undo
If we want to view the commit history
```
git log
```
Go back to a previous snapshot of your changes
```
git reset
```
## Activity

1. Create a directory called "cheatsheets".
2. Initialize the directory as a git repository
3. Inside the directory create a file called "git.md".
4. Open the file in your text editor and write out all the git commands that we discussed with a brief description of what they do in your own words.
5. Commit the changes

Extra:

Use `git <command> --help` for more information on how to use some of the commands we discussed

+ Make some more changes to your files and commit them
+ View your commit history
+ View the differences between your recent and older commits
+ Undo the changes you made by going back to a previous commit
+ Create a new branch and switch to that branch to make edits to it

## Intro to Github

### What is Github?
Github is a web-based Git repository hosting service. It saves your Git repos to the cloud like Dropbox saves your files to the cloud.

### Why use Github?
Share and collaborate your code with others!

### What you need to know about Github (and Git)

#### Fork
Create a personal copy of someone else's project. Done through github.

#### Clone
Clones a repository into a newly created directory. Done locally.
```
git clone <url>
```

#### Push
Updates your local changes to your remote repository so they are the same.
```
git push origin master
```

#### Pull
Create a link to the original repository.
```
git remote add upstream <url>
```
Download changes from the original repository.
```
git pull upstream master
```

#### Pull Request
Lets you tell others about changes you've pushed to a repository on Github. When you fork a repo and make changes to your personal copy, you can suggest those changes be on the original repo by creating a pull request. __Note: This is not the same as a `git pull`.__

## Let's clone the class repo.
[WDI DTLA 41 Class Repo](https://github.com/WDI-DTLA-41/classroom)

Click on the green button that says "Clone or Download".
Copy the url or click on the clipboard icon which will copy it for you.

+ Clone it locally
```
git clone <url>
```

## Activity contd.

### Now put it on github
1. Create a new repository in Github called "cheatsheets"
2. Use the code snippet provided by Github to associate your local git repository with the remote repository
3. use 'git remote show origin' to check if linked to the correct repository
3. Push your local changes up to Github

Extra:
+ Fork your neighbors cheatsheet
+ Clone the repo locally
+ Make an update to their file and push it to your fork
+ Make a pull request to their repo

## Closing

- Three things you learned
- Two things you found interesting
- One question you still have of the material
- When you can't remember the basics, look left. =)

## Resources
- [Git documentation](https://git-scm.com/doc)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)
