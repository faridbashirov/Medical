FROM node

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm cache clean
RUN npm install --save
RUN vite build 

EXPOSE 3000