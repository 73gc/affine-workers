# AFFiNE Worker for self-hosted instances

This repo is a rewrite of the serverless functions used in the [AFFiNE](https://github.com/toeverything/affine-workers) project. It is intended to be used in self-hosted instances of AFFiNE. You will need a Docker Container to run this project and then setup a reverse proxy pointing from `your-domain.xx/api/worker/link-preview` to the container.

Use the HOST_NAMES variable to specify your own domain for CORS.
## 一个nginx代理配置
```nginx
location /api/worker {
    proxy_pass http://127.0.0.1:3000/;
    proxy_set_header Origin 同HOST_NAMES; #用来跨域
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_next_upstream http_500 http_502 http_503 http_504 error timeout invalid_header;
}
```
