FROM 192.168.15.86:5000/dx/registry-ui:v0.0.1
MAINTAINER "dx"

USER root

# Exposed ports
EXPOSE 80

# Add dirs
ADD  registry-ui /registry-ui
RUN chmod 777 /registry-ui/conf.sh
CMD  /registry-ui/conf.sh


