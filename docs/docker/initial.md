# Docker Initial

## Clone

```s
docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
docker cp repo:/git/getting-started/ .
```

## Build

```s
cd getting-started
docker build -t docker101tutorial .
```

## Run

```s
docker run -d -p 80:80 --name docker-tutorial docker101tutorial
```

## Share

```s
docker tag docker101tutorial akashisai/docker101tutorial
docker push akashisai/docker101tutorial
```

## ubuntu

```s
docker pull ubuntu
docker run -t -i ubuntu /bin/bash
apt update
apt upgrade
apt install python3
apt install python3-pip
apt install ffmpeg
pip3 install you-get
you-get -info https://xxx.com
you-get --format=dash-flv https://xxx.com
```

## commit

```s
docker images
docker commit [names] [commit-name]
docker push [account]/[commit-name]
```
