FROM node

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN yarn cache clean
RUN yarn install --save
RUN yarn build

EXPOSE 3000