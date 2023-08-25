# Git

*Written By: Chinathai Panditya*

Git is a distributed version control system used in software development to track changes, manage different versions of code, and facilitate collaboration among developers.

You can think of git as the history function in google docs, but with more advanced and customizable features that can help developers work together more easily

**Google Docs History** 

![Untitled](/img/git/Untitled1.png)

**Git**

![Untitled](/img/git/Untitled2.png)

![Untitled](/img/git/Untitled3.png)

## Why Git?

- To keep track of changes
    - allow us to see who made the changes, and which files or lines of code were affected
- For Collaboration
    - allow multiple developers to work on different part of the project at the same time, while ensuring that everything will come together without one person accidentally erasing the other’s work
- To Revert Changes in our program
    - Imagine the new changes cause the app to crash, git allows the new changes to be reverted easily using one command
- And a lot more!!! Git is really useful guys 🙂

## Terminologies and Concepts

### Commits

A Git commit represents a snapshot of your project at a specific point in time and is used to save changes you’ve made to your file. Think of it as checkpoints that allow you to record and manage the progress of something, whether it’s a software project or a game adventure. One thing to note here is that git commits are not isolated snapshots, but are designed to be part of a connected progression in your project’s history. Each commit is built upon the previous one, capturing changes made from one state to the next

Example below shows the git commits and its connected progression from bottom to top

![Untitled](/img/git/Untitled2.png)

### Branches

A branch in git is like a separate line of development within your project. It allows you to isolate changes and work on them independently of the main codebase. It is comparable to a video game where you have different “saves” that each has its own storyline. In our club, we mainly use git branch to allow team members to work on different parts of a project simultaneously. Changes from different branches can then be merged into a common codebase later on.

![Untitled](/img/git/Untitled4.png)

*NOTE: More details relating to git branches for collaborative work in our club will be covered later*

### HEAD Pointer

A HEAD Pointer represents the currently “checked-out” branch or commit in your repository. It essentially points to the tip of the branch or the specific commit that is currently being used as the basis for your working directory

Example below shows that the HEAD pointer usually points to the latest commit in your project, but can also change when you “checkout” to a specific commits

![Untitled](/img/git/Untitled5.png)

### Working Directory

Git working directory is the directory where your files are located and where you can edit them. When you make changes to the files in your working directory, Git recognizes that they have been modified but does not yet track those changes. You need to stage and commit your changes for them to be saved to the repository.

In other words, the working directory is your playground where you can make changes to the code, and the repository is where you store those changes.

Example below shows that Git will inform us about the changes we made in our working directory

![Untitled](/img/git/Untitled6.png)

### Staging Area

The staging area is an intermediate area between the working directory and the repository It allows you to selectively choose which changes you want to include in the next commit. You can think of it as a way to review your changes before they become permanent.

To stage changes, you use the `git add` command. Once changes are staged, you can use the `git commit` command to save the changes to the repository.

Referring to the above example, we can stage the changes we made using `git add <file>` 

![Untitled](/img/git/Untitled7.png)

*NOTE:* 

- *green text means the changes are already in the “staging area”*
- *we will go through sets of commands later on you’ll be using later on, don’t worry!*

### Repository

a Git repository is a collection of files and historical data about those files, managed by the Git version control system.

The `.git` folder is where Git stores everything it needs to keep track of changes made to your files and directories, allowing you to easily review the history of your project and roll back to previous versions when needed. It's like Git's control center for managing your project's history and version control.

Example below shows a git repository along with its `.git` folder.

![Untitled](/img/git/Untitled8.png)

Furthermore, a repository can be categorized as local and remote repository.

***Local Repository*** - A version of your project that is stored on your computer

***Remote Repository*** - A version of your project that is hosted on the internet (GitHub in our case) (usually referred to as ‘origin’)

The diagram illustrates the progression of changes from the working directory to the staging area, then to the local repository, and ultimately to the remote repository. Accompanying this visual representation are the corresponding commands used in each step of the process.

![Untitled](/img/git/Untitled9.png)

## GitHub

GitHub is our remote repository provider. There are other providers as well, like GitLab and BitBucket. But our club uses GitHub just because it’s the easiest to get started.

You will need to create a GitHub account in order to start contributing to our projects.

Simply click on this link and follow their instructions: [https://github.com/signup](https://github.com/signup)

The following screen should be displayed, but please note that yours might be a little empty compared to my account

![Untitled](/img/git/Untitled10.png)

After you have created an account, please DM me on discord or line. I will add you to our GitHub Organization - it is a shared account where multiple developers can have access to shared repositories, allowing us to contribute together more easily 🙂

### Create your own remote repository

1. You can do so by clicking on the green button that says “New”
2. Enter all the required information (marked as `*`)
    
    ![Untitled](/img/git/Untitled11.png)
    
3. Once you’ve created a remote repository, simply follow the instructions given by GitHub
    
    ![Untitled](/img/git/Untitled12.png)
    

## Basic Git Commands

Here are some essential Git commands to get started:

1. `git init`: Initializes a new Git repository in the current directory.
    1. in your terminal, make sure you are at the directory you want to initialize a local repository
    
    ![Untitled](/img/git/Untitled13.png)
    
2. `git status`: Shows the current state of your working directory and any changes you made 
    
    ![Untitled](/img/git/Untitled14.png)
    
    when we make some changes in the working directory:
    
    ![Untitled](/img/git/Untitled15.png)
    
3. `git add <file>`: Adds changes in a file to the staging area.
    
    ![Untitled](/img/git/Untitled16.png)
    
4. `git commit -m "Commit message"`: Commits the changes in the staging area to the repository with a descriptive message.
    
    ![Untitled](/img/git/Untitled17.png)
    
    A new commit should be added - we can check via `git log --oneline --graph` (press q to exit)
    
    ![Untitled](/img/git/Untitled18.png)
    
    Or you can use any Git UI tools to visualize it. The image below is “GitLens”, an extension in VSCode. There are many other choices as well, personally I use Fork and GitKraken.
    
    ![Untitled](/img/git/Untitled19.png)
    
5. `git clone <repository_url>`: Creates a local copy of a remote repository on your machine.
    1. Simply go to any project you would like, in this case I want to clone [“auction-system”](https://github.com/stamford-syntax-club/auction-system)
    2. Click on “Code”, then copy the url 
        
        ![Untitled](/img/git/Untitled20.png)
        
    3. Open your terminal, make sure you are on the directory you wish to locate the repository
        
        ![Untitled](/img/git/Untitled21.png)
        
    4. Luckily, VSCode (and most of other IDEs) provide a simpler way to clone remote repositories:
        1. Open VSCode > Clone Git Repository > Paste the copied URL > Clone from URL
            
            ![Untitled](/img/git/Untitled22.png)
            
        2. After choosing the destination to save the file, you should see something like this
            
            ![Untitled](/img/git/Untitled23.png)
            
6. `git pull`: Fetches and merges changes from a remote repository into your current branch.
    1. Example below shows that we use the command `git pull` to pull changes from a remote repository and apply it to our local repository.
    
    ![Untitled](/img/git/Untitled24.png)
    
7. `git push`: Sends committed changes from your local repository to a remote repository.
    1. when creating a new remote repository on GitHub, you will be provided with instructions on how to setup, simply follow them:
        
        ![Untitled](/img/git/Untitled12.png)
        
    2. specify the branch you would like to push to: `git push origin <branch-name>`
        
        ![Untitled](/img/git/Untitled25.png)
        
        now our commits on local will also exist on remote repository:
        
        ![Untitled](/img/git/Untitled26.png)
        
8. `git checkout <branch_name/commit_sha>`: Switches to the specified branch or commit
    
    **Switching to specified commit:**
    
    - Assuming that we have 2 commits like shown below.
    - The HEAD pointer is pointing to `0e8ff52`
    
    ![Untitled](/img/git/Untitled27.png)
    
    ![Untitled](/img/git/Untitled28.png)
    
    - Say you want to go back to previous commit (`970bc92`) just to check something
    
    ![Untitled](/img/git/Untitled29.png)
    
    Here you can see that the content inside `hi.txt` has reverted back to the previous commit
    
    *Note:*
    
    - *actually it’s supposed to be just “hello”, but I made some mistakes during tutorial LOL*
    - *a detached HEAD essentially means you should not make any new commits, otherwise it might be lost. Make sure that you are always in the latest commits before making any new one*
    
    ****Switching to specified branch:**
    
    - Make sure that the branch you’re switching to actually exists
    - Say you’re currently working on `main` and want to switch to `chinathai/feature-1` to start working on something else:
    
    ![Untitled](/img/git/Untitled30.png)
    
    - Additionally, if you want to create a new branch as well as checkout to that one, simply do so by `git checkout -b <your-new-branch-name>`
    
    ![Untitled](/img/git/Untitled31.png)
    

## How we use git to collaborate at Stamford Syntax Club

At Stamford Syntax Club, we utilize a combination between trunk-based development and a feature branching model.

![Untitled](/img/git/Untitled32.png)

Essentially, we have a single long-lived branch called “main” or “master”. This branch represents a stable version of our project. It should always be in a deployable state

When a developer starts working on a new feature or a bug fix, ***they create a new branch from the main branch.*** This feature branch is where all the work related to that specific feature or bug fix takes place.

***Developers commit their changes to their feature branches as they work.*** These commits are typically smaller, focused changes related to the specific feature or bug fix.

Once the work on a feature or bug fix is complete and tested, ***the developer opens a Pull Request (PR)*** to propose merging their feature branch back into the main branch. This step allows for code review, automated testing, and collaboration.

During the code review process, team members review the changes made in the feature branch. They can provide feedback, suggest improvements, and ensure that the code meets the team's coding standards and quality criteria.

***Once the PR is approved*** and all tests pass, the changes are merged into the main branch. After merging, the changes will be automatically deployed to our beta server, i.e. `center-beta.stamford.dev`

**Enough talking, here’s how we do it 😃**

1. Make sure that our HEAD pointer is pointing to the latest commit in the “main” branch
    1. You can check with the command `git status`
    2. If the output is different from below , please type in the following commands in order:
        1. `git checkout main` - checkout to main branch
        2. `git fetch origin` - see if the remote repository has newer changes
        3. `git pull origin main` - pull those changes from remote onto local repository

![Untitled](/img/git/Untitled33.png)

2. Create a new branch from main to start working on your assigned task
    1. `git checkout -b <your-branch-name>`
    2. please make sure that the branch name contains your name as well as what you will do
    
    ![Untitled](/img/git/Untitled34.png)
    
3. Follow the normal flow - write some code, commit those changes

4. Push you changes to Remote Repository when you are done with your task
    1. `git push origin <your-branch-name>`
    
    ![Untitled](/img/git/Untitled35.png)
    
5. Go to the the repository that you just pushed
    1. In this case, I pushed to a repository named [“Infra”](https://github.com/stamford-syntax-club/infra/)
    2. Click “Compare & Pull request”
    
    ![Untitled](/img/git/Untitled36.png)
    

6. Create a pull request
    1. Click on the “Reviewers” section, and choose the related team as a reviewer
    2. After that, please dm the project overseer for code reviews
        1. Frontend repository: Tawan
        2. Backend repository: Tawan or Chinathai
        3. Infra repository: Chinathai
    3. You should obtain an approval before being able to merge your changes back to the main codebase
    
    ![Untitled](/img/git/Untitled37.png)
    
    Example:
    
    ![Untitled](/img/git/Untitled38.png)
    
    ## Challenge Time!
    
    Now let’s try cloning the following git repository: [https://github.com/stamford-syntax-club/onboarding-git](https://github.com/stamford-syntax-club/onboarding-git)
    
    Your task is to:
    
    - Create a new branch from the main branch with the following convention
        - `<your-name>/git-training`
        - for example, `chinathai/git-training`
    - Create a new file called `introduction.txt` with the following content
        
        ```
        Hello! My name is <your-name>. It's nice to meet you!
        ```
        
    - Commit your changes, and push it to the remote repository
    - Create a new pull request
        - set the base branch to `main`
        - write down the pull request title as `git training - <your-name>`
        - set reviewer to be `chinathaip` and `lxkas`
        - contact us to review your pull request, and try to get an approval :)
    
    And that wraps up the Git topic. If you require any assistance, please do not hesitate to reach out to us on discord channel or dm!