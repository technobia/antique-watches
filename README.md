## Prerequisites
- Docker version v27
- Docker Compose version v2

## Installation
1. First things first, install Docker on your local machine
2. If using Linux, you need to start by downloading the latest version of Docker and installing it on your system. To name a few examples, you can find the matching Docker versions for your distribution here:
  - Docker for [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
  - Docker for [Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
  - Docker for [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
  - Docker for [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)

For Windows operating system, download the latest version of [Docker desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/).

If using Mac, start by downloading the latest version of [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac/) for Mac and install it.

With this, you are almost ready to start, but you just need to use the following command on your host system to get it going.

### Start Docker

Open the folder with your compose file in your terminal and execute this command to start your container:

```
docker-comose up -d
```

After that Shopware is now ready!

```
SHOP URL: http://localhost
ADMIN URL: http://localhost/admin
ADMINER URL: http://localhost/adminer.php
MAILCATCHER URL: http://localhost/mailcatcher
```

## Reference

- [Shopware developers](https://developer.shopware.com/docs/guides/installation/)
