#Class GitHub Workflow

###Objectives
*After this lesson, students will be able to:*

- Navigate their `workspace` directory
- Identify when they are and are not in a git repo
- Explain how to "undo" `git init`
- Describe each part of the command `git push origin master`

##Your `workspace` and `WDI_SM_38` Trees

In order to make your workflow as smooth as possible, it's important that you are able to easily navigate your workspace and the class repo. Navigate to your `workspace` directory and type `tree .`.

This directory is where you're writing your code for labs and classwork, so you will end up with a lot of files in here by the end of the course. Make sure to keep it organized so you can find what you need!

##Am I In A Repo?!

One thing you don't want to do is create a repo within a repo. The files won't be tracked by the parent repo, so that would be *detrimental* to your workflow.  
And messy!  
![messy](https://media.giphy.com/media/kSaOwfjJYtY6A/giphy.gif)

On GitHub, a repo within a repo looks like this:  
![nested_repo](../../../assets/nested_repo.png)

So how do you make sure not to do that?

Since you've done installfest, your terminal is configured to display a branch name whenever you're in a git repository.

Take the next few minutes to go through your workspace and its subdirectories. **Write down** the name of each directory that is the main directory of a repo. This means if you have a repo for a directory called `01-day-ah`, that you do not need to write down the names of every directory *within* `01-day-ah`, but you should write down that directory.

####What if I fall in the milk bowl?

Let's say you accidentally do initialize a repository inside one of the subdirectories of another repository. There's a simple fix: `rm -rf .git` The best thing, though, is to be mindful of where you are, so that you don't have to "undo" your git init.

##Working With The Class Repo

For the rest of WDI, you're going to be working with the class repo. Your local repo should be connected to our main class repo. Navigate to `WDI_SM_38` and type `git remote -v`. What do you see?

#### Think - Pair - Share
Spend the next few minutes discussing the class repo with a partner.

- When would you pull from origin?
- When would you push to origin?
- What should you do if there is starter code inside the class repo that you need to use?

##Independent Practice

Create a new directory in your workspace called `git-test` and then create a few files inside that directory.  
Initialize a git repository and push the repo up to GitHub.  
If you cd up one directory into your workspace, does you terminal still show a branch name? Should it?

##Conclusion
Take a few minutes to think about these questions. We will discuss the answers as a group.

- How do you "undo" `git init`?
- How can you tell if you're inside a git repository?
- Can you push to the class repo?
- What command can you use to get a quick visual reference for your current directory and all of its subdirectories?