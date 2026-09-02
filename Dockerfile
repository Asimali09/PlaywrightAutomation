# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Install Playwright browsers and dependencies
RUN npx playwright install --with-deps

# Run Playwright tests
CMD ["npx", "playwright", "test"]