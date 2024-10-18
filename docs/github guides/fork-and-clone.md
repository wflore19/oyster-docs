---
sidebar_position: 1
---

# Fork and Clone the Repository

To start contributing to a project on GitHub, you'll need to fork the repository and clone it to your local machine. Here's how:

1. **Fork the repository**:

   - Go to the main page of the repository on GitHub.
   - Click the "Fork" button in the top-right corner.
     ![fork button](/img/fork-button.png)
   - Open your terminal and run:

2. **Clone your fork**:

   - Go to your forked repository on GitHub.
   - Click the "Code" button and copy the URL.
     ![fork button](/img/code-button.gif)
   - Open your terminal and run:
     ```
     git clone https://github.com/<USERNAME>/oyster.git
     ```

3. **Set up the upstream remote**:
   - Change into the cloned directory:
     ```
     cd oyster
     ```
   - Add the original repository as the upstream remote:
     ```
     git remote add upstream https://github.com/colorstackorg/oyster.git
     ```

Now you have a local copy of the project and can start making changes!
