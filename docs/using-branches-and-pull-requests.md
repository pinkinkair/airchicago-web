# Using Branches and Pull Requests

This code repository deploys a live website. We hooked up an automation for the `main` branch to deploy to this live website without humans having to do the work, so that means we had to protect the `main` branch.

## What's a Branch?

Think of a branch like a branch on a tree. This code repository is the tree, and any different ways the code grows is in a branch.

When you're working on something new, start on the `main` branch (the tree trunk), and before pushing it back into the repository, make sure you've created a new branch for that change.

## Why do we need Branches and Pull Requests?

If code is automatically deployed without being tested or reviewed, we can take our own website down. Using branches and pull requests allows us to check that we've not broken anything.

## Using a Pull Request

Once you get to the Pull Request page, either by uploading a file or by pushing code, make sure:

- You add a title to the Pull Request so people know what change you're making
- Add in any more details to the description if needed
- Click the `Create pull request` green button
- Let the team know in our group chat so you can get a review
