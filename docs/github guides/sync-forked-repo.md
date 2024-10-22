---
sidebar_position: 4
---

# Syncing your Forked Repo
To sync your forked repository with the original repository, follow these steps:

1. Open your terminal and navigate to your forked repository's directory.

2. Add the original repository as a remote (if you haven't already):

```
git remote add upstream https://github.com/colorstackorg/oyster.git
```

3. Fetch the branches and commits from the upstream repository:

```
git fetch upstream
```
This command retrieves the latest changes from the original repository.

4. Merge the changes from the upstream repository's main branch into your local main branch:

```
git merge upstream/main
```
If you're using a different branch name (e.g., `master`), replace `main` with the appropriate branch name.

5. Push the changes to your forked repository on GitHub:

```
git push
```

This updates your forked repository on GitHub with the latest changes from the original repository.

By following these steps, you'll keep your forked repository in sync with the original repository. It's a good practice to perform this sync regularly to stay up-to-date with any changes in the original project.

Remember to resolve any merge conflicts that may arise during the process. If you encounter conflicts, Git will notify you, and you'll need to manually resolve them before completing the merge.
