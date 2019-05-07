FROM node:latest

ENV wdir /app
RUN mkdir -p ${wdir}
WORKDIR ${wdir}

EXPOSE 19000
EXPOSE 19001
EXPOSE 19006

RUN apt-get update && \ 
    apt-get install yarn && \
    apt-get install git && \

RUN yarn add -g expo-cli
RUN git clone https://github.com/IveTou/altec-frontend-test.git

RUN yarn install --network-timeout 100000

RUN expo build:web
    
CMD yarn web