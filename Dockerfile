FROM ubuntu:18.04
USER root
RUN apt-get update -y -qq --fix-missing && \
    apt-get install -y curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_12.x  | bash - && \
    apt-get install -y nodejs
RUN npm install pm2 -g
COPY . /app
WORKDIR /app
RUN npm install
CMD ["pm2-runtime", "server.js"]
