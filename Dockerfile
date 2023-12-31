FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "run", "build"]

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist   /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]


# docker run -p 80:80 vite-app
# docker build -t vite-app .  