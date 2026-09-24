ARG NODE_VERSION=23
ARG PNPM_VERSION=11.1.0

FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

FROM base AS builder
ARG PNPM_VERSION
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable \
    && corepack prepare pnpm@${PNPM_VERSION} --activate
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM caddy:alpine AS runner

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/out /usr/share/caddy

EXPOSE 4000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
