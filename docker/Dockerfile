ARG VERSION='v0.0.0'

FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY ./ /app/

# Use --unsafe-perm to correctly run postinstall scripts
RUN yarn config set unsafe-perm true && yarn build

FROM node:lts-alpine
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY package.json /app/dist/browser

ARG VERSION
ENV VERSION=${VERSION:-v0.0.1}
RUN echo $VERSION
RUN echo '{ "version:" "$VERSION" }'
RUN echo '{ "version:" "$VERSION" }' > /app/dist/browser/version.json

CMD ["node", "/app/dist/server/server.mjs"]

# link image with github repo
LABEL org.opencontainers.image.source=https://github.com/MedTourMd/casco-dentar
