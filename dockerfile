FROM node:8.11.3
MAINTAINER PeerlessG
ADD . /app/
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
ENV POST 3000
EXPOSE 3000
CMD ["npm","start"]