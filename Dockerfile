FROM node

USER node

WORKDIR /home/node/redacted-agent

COPY --chown=node:node package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . .

EXPOSE 3000/tcp

CMD ["node", "src/index.mjs"]