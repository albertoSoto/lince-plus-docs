#!/bin/bash
#https://docusaurus.io/docs/deployment#deploying-to-github-pages
#https://github.com/albertoSoto/lince-plus.github.io
export USE_SSH=false
export GIT_USER=albertoSoto
#export GIT_PASS=VALUE #Personal access token of the git user (specified by GIT_USER), to facilitate non-interactive deployment (e.g. continuous deployment)
#export CURRENT_BRANCH=VALUE #If nothing is set for this variable, then the current branch from which docusaurus deploy is invoked will be used.
yarn build
yarn deploy
