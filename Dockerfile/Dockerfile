FROM nginx:1.8.1
MAINTAINER "dx"

USER root

# Exposed ports
EXPOSE 80

# Delete default confs
RUN rm -rf /etc/nginx/conf.d/*.conf

# Copy our confs to image
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d/

# Add dist.tar to image
ADD dist.tar /


