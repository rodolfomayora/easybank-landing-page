# syntax=docker/dockerfile:1
ARG NODE_VERSION=20.11.0

# Base STAGE
FROM node:${NODE_VERSION} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN --mount=type=bind,source=package.json,target=package.json \
    corepack install
WORKDIR /usr/src/app

# Dev STAGE
FROM base AS dev
EXPOSE 3001
CMD pnpm dev

# Build STAGE
FROM base as build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install
COPY . .
RUN pnpm run build

# # Production STAGE (container image optimization)
FROM nginx:1.25.4-alpine as prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE  80
# Nginx default port is 80
CMD ["nginx", "-g", "daemon off;"]