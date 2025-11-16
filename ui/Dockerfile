# ----------------------------------------------------------
# 1. Builder Image
# ----------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install system deps
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json* ./

# Install deps
RUN npm install

# Copy the rest of the app
COPY . .

# Create standalone build
RUN npm run build


# ----------------------------------------------------------
# 2. Runner Image
# ----------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
# Static assets
COPY --from=builder /app/.next/static ./.next/static
# Public assets
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
