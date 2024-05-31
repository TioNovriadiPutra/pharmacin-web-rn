# Use an official Nginx image to serve the build output
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]