FROM node:18.16.1 as development


WORKDIR /usr/src/app

# install global nestjs
RUN npm install -g @nestjs/cli

# copy packages to install dependencies/
COPY ./package*.json ./ 

# install
RUN npm i

COPY . .
ARG ENV_FILE
ENV ENV_FILE=${ENV_FILE}
RUN cp ${ENV_FILE}  ./.env
RUN cp ${ENV_FILE} smart-security-envs/.env.dev-local

RUN npm run build

