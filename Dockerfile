# ── Stage 1 : build ──────────────────────────────────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2 : serve ──────────────────────────────────────────────────────────
FROM nginx:alpine

# Copie le build
COPY --from=builder /app/dist /usr/share/nginx/html

# Config nginx sur mesure
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
