FROM ubuntu:latest
USER root
WORKDIR /homeapp
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
#RUN node server.js
CMD ["/bin/bash"]
