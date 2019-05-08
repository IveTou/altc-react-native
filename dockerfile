FROM node:latest

RUN apt-get update && \ 
    apt-get install yarn && \
    apt-get install git && \

RUN git clone https://github.com/IveTou/altec-frontend-test.git

ENV wdir /altec-frontend-test
WORKDIR ${wdir}

RUN yarn add -g expo-cli

RUN yarn install --network-timeout 100000

EXPOSE 19000
EXPOSE 19001
EXPOSE 19006

RUN expo build:web