# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.20.2

# Base STAGE
FROM node:${NODE_VERSION} AS base
WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    corepack enable && corepack install && \
    pnpm install --prod=false --frozen-lockfile

# Dev STAGE
FROM base AS dev
# WORKDIR /usr/src/app/code
EXPOSE 3001
CMD pnpm dev

# Build STAGE
# FROM base as build
# COPY . .
# RUN npm run build  # OJO!! esto es un RUN no un CMD, XD

# # Production STAGE (container image optimization)
# # Nginx or Apache Server for Frontend 
# FROM nginx:1.25.4-alpine as prod
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# EXPOSE  80 # Nginx default port is 80
# # In case i want to use a custom 'nginx.conf'
# # COPY nginx.conf /etc/nginx/nginx.conf
# # EXPOSE  8989
# CMD ["nginx", "-g", "daemon off;"]

# production STAGE (container image optimization)
# Node Server for Backend
# FROM node:${NODE_VERSION}-alpine as prod
# WORKDIR /usr/src/app
# COPY package.json .
# COPY package-lock.json .
# # COPY yarn.lock
# # COPY pnpm-lock.yml
# RUN npm ci --omit=dev && npm cache clean --force
# # RUN yarn --production --frozen-lockfile && yarn cache clean (yarn v1.x)
# # RUN pnpm --prod --frozen-lockfile (v8.x)
# COPY --from=build /usr/src/app/dist .
# USER node
# EXPOSE 3002
# CMD npm run start
