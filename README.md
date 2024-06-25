# AFFiNE Worker for self-hosted instances

This repo is a rewrite of the serverless functions used in the [AFFiNE](https://github.com/toeverything/affine-workers) project. It is intended to be used in self-hosted instances of AFFiNE. You will need a Docker Container to run this project and then setup a reverse proxy pointing from `your-domain.xx/api/worker/link-preview` to the container.