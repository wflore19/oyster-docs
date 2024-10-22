---
sidebar_position: 5
---

# How to Sync Forked Repository

## Context

![Sync Repository](/img/sync-repository.png)

How do I update/sync my repository?

## What it means

ColorStack's Oyster repository has been updated, but that doesn't automatically update in your forked repository.

## Git

Time to update your forked repository to the newest changes in ColorStack official Oyster repository!

1. Switch to your main branch

```
git checkout main
```

2. Read all the updates from the branch `upstream/main`

```
git fetch upstream
```

3. Merge the changes from `upstream/main` into your main branch

```
git merge upstream/main
```

4. Push your changes to GitHub

```
git push
```

## Resources

[Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork?platform=windows)
