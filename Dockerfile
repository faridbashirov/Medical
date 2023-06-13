FROM node

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install serve -g

RUN npm install

RUN npm run build


EXPOSE 3000