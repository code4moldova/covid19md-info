# info.c19.md

Source code for https://info.c19.md website - COVID19 information center Moldova.

## Dependency

* Docker version 19.x
* GIT

## Install

Build info-c19 docker image
```$xslt
docker build -t info-c19 .
```

Run container
```$xslt
docker run -d -p8882:8882 --name info-c19 info-c19
```

## Usage

Open in your favourite browser, address http://localhost:8882/

## Debugging

Container console
```$xslt
docker exec -it info-c19 /bin/bash
```

Container logs
```$xslt
docker logs -f info-c19
```

Container IP address
```$xslt
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' info-c19
```


## Hot to edit text on the web site?

1. Download app https://github.com/jcbvm/i18n-editor
2. Open folder `newdesign/i18n`, and do that.
