# Software development tools 2º Homework - by Jun Hao Zhu Zhang

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Task:

### a) create remote repository (at github/gitlab, …)
![a1](screenshots/a1.png)
Creation of the repository.

### b) clone the empty repository (git clone)
![b1](screenshots/b1.png)
The empty repository with some initial instructions.

![b2](screenshots/b2.png)
Cloning this repository to a local folder.

![b3](screenshots/b3.png)
The folder in the local computer with the name of the repository.

### c) create in the local repo folder an empty project using the chosen language
![c1](screenshots/c1.png)
For this project we will use Next.js, a powerful tool for web development creation.
In this screenshot we can see the initialisation of the project.

![c2](screenshots/c2.png)
After initialising everything, we use npx to launch the page on our local machine.

![c3](screenshots/c3.png)
A demonstration of the page launched without modification

### d) commit the whole project to the repo (git commit -m "message …"

![d1](screenshots/d1.png)
A commit of the project to GitHub.

### e) add simple code to the Java/C++/C# project (e.g. create table, write table elements)

![e1](screenshots/e1.png)
The first version of the code.

![e2](screenshots/e2.png)
The first version of the web.

### f) commit changes

![f1](screenshots/f1.png)
Commit of the first version

### g) add more code (e.g. initlizie table by random values)

![g1](screenshots/g1.png)
The second version of the code.

![g2](screenshots/g2.png)
The second version of the web.

### h) commit changes

![h1](screenshots/h1.png)
Commit of the second version

### i) add more code (e.g. sort table elements)

![i1](screenshots/i1.png)
The second version of the code.

![i2](screenshots/i2.png)
The second version of the web.

### j) commit changes

![j1](screenshots/j1.png)
Commit of the third version

### k) look at code history (git log)

![k1](screenshots/k1.png)
A look at all commits made so far

### l) look at code annotations (git blame)

![l1](screenshots/l1.png)
An illegible photo of everything shown with the git blame command

### m) try to checkout different revisions (git checkout)

![m1](screenshots/m1.png)
The first command (checkout main) show every commit and where we are situated.
The second command (checkout 5382f91) place the pointer on the desired commit and change the code to that moment.

![m2](screenshots/m2.png)
The page reverts to how it was at the first commit.

## n) add any changes to the code, do not commit
![n1](screenshots/n1.png)
Delete some part of the code randomly.

### o) try to revert the last changes (git revert)
![o1](screenshots/o1.png)
In this part, I made the mistake of committing the code, but I used revert to return to the state where the code worked.

### p) push the project to the remote repo (git push)
![p1](screenshots/p1.png)
Everything is ok.

### r) delete local project and local repo
![r1](screenshots/r1.png)
Local project deleted.

### s) clone project from remote repo (git clone)
![s1](screenshots/s1.png)
Remote repository cloned.

### t) create tag/realese, try to switch between this tag and master branch (git branch, git tag)
![t1](screenshots/t1.png)
![t2](screenshots/t2.png)
Creation of a tag/realese.

### u) create new branch from the master one
![u1](screenshots/u1.png)
Creation of the branch new-branch.

### w) switch to branch (git merge)
![w1](screenshots/w1.png)
Switch to the branch new-branch.

### x) improve your code in a branch (e.g. change the sorting algorithm)
![x1](screenshots/x1.png)
Here we can see that the code has been uploaded to the new branch, however, when we try to push it, we get a conflict.

### y) merge new branch in to the master branch
![y1](screenshots/y1.png)
This was quickly resolved by a merge.

### z) give a url to repo to one of your friends (before you have to allow him/her access to this repo)
![z1](screenshots/z1.png)
A friend is added to the repository

### z1) try to produce conflict
![z11](screenshots/z11.png)
A conflict appeared when pushing 2 at a time.

### z2) solve it and push the solution to remote repo
![z21](screenshots/z21.png)
The conflict was resolved after combining the changes and performing a merge.

## Instructions for setting up the website

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
