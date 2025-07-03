FROM node:22-bookworm AS builder

WORKDIR /app

COPY angular.json .
COPY src/ ./src
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.spec.json .
COPY package.json .
COPY package-lock.json .

RUN npm install -g npm@11.4.0 \
  && npm install -g @angular/cli@19.2.13 \
  && npm install \
  && ng build --configuration production \
  && npm cache clean --force

FROM node:22-alpine

ARG USERNAME=calculadora
ARG PROJECT_NAME=calculadora

RUN addgroup "$USERNAME" && \
    adduser -D -G "$USERNAME" "$USERNAME" && \ 
    npm install -g http-server

USER $USERNAME
WORKDIR /app

COPY --from=builder /app/dist/${PROJECT_NAME} .

EXPOSE 4200

ENTRYPOINT ["http-server", "-p", "4200", "browser"]