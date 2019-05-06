FROM node:latest

EXPOSE 19000
EXPOSE 19001

RUN apt-get update && \ 
    npm install -g expo-cli

RUN git clone https://github.com/IveTou/altec-frontend-test.git
RUN npm config set fetch-retry-maxtimeout 100000 && \
    npm i
    
CMD npm run web