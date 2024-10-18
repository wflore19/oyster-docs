---
sidebar_position: 2
---

# Create a New Branch

Before making changes, it's important to create a new branch. This keeps your changes separate from the main codebase until they're ready to be merged.

1. **Ensure you're on the main branch**:

   ```
   git checkout main
   ```

2. **Pull the latest changes**:

   ```
   git pull upstream main
   ```

3. **Create and switch to a new branch**:

   ```
   git checkout -b <YOUR_BRANCH_NAME>
   ```

   Name your branch something descriptive related to the changes you're making.

   ```
   flo/first-contrib
    ^ Username
            ^ Branch description
   ```

   Now you're ready to make your changes on this new branch!
