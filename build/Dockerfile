FROM node:12.13-slim
RUN mkdir /service
WORKDIR /service
COPY . .
RUN npm ci

FROM node:12.13-slim

RUN mkdir /service
WORKDIR /service
COPY --from=0 /service  .

CMD ["node", "index.js"]
