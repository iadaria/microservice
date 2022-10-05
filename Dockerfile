FROM node:18-alpine AS base


RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-*.yaml ./
COPY ./libs/proto-schema/package.json ./libs/proto-schema/package.json
COPY ./apps/api-gateway/package.json ./apps/api-gateway/package.json
COPY ./apps/service-account/package.json ./apps/service-account/package.json

RUN pnpm install --frozen-lockifle

FROM base AS builder

COPY . .

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/libs/proto-schema/node_modules ./libs/proto-schema/node_modules
COPY --from=dependencies /app/apps/api-gateway/node_modules ./apps/api-gateway/node_modules
COPY --from=dependencies /app/apps/service-account/node_modules ./apps/service-account/node_modules

RUN pnpm build-libs
RUN pnpm add-libs-account
RUN pnpm add-libs-api
RUN pnpm build-account
RUN pnpm build-api

WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-*.yaml ./
COPY --from=builder ./libs/proto-schema/package.json ./libs/proto-schema/package.json
COPY --from=builder ./apps/api-gateway/package.json ./apps/api-gateway/package.json
COPY --from=builder ./apps/service-account/package.json ./apps/service-account/package.json

COPY --from=builder ./libs/proto-schema/dist ./libs/proto-schema/dist
COPY --from=builder ./apps/api-gateway/dist ./apps/api-gateway/dist
COPY --from=builder ./apps/service-account/dist ./apps/service-account/dist

EXPOSE 4000

CMD [ "pnpm", "start-all" ]