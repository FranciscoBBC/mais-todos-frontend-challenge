FROM node:20-alpine AS base
WORKDIR /app

COPY mais-todos-web-app/package.json ./
COPY mais-todos-web-app/yarn.lock ./
RUN yarn install
COPY . .

FROM base AS client_development
ENV NODE_ENV development
EXPOSE 3000
CMD ["yarn", "start"]

FROM base AS builder
ENV NODE_ENV production
RUN yarn build

FROM nginx:1.25 AS client_production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM base AS server_development
ENV NODE_ENV development
EXPOSE 7000
CMD ["yarn", "server_dev"]

FROM base as production
ENV NODE_ENV=production
EXPOSE 7000
ENTRYPOINT [ "yarn", "build_server" ]
CMD [ "yarn", "server_prod" ]