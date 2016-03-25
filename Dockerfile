FROM registry-ui:v0.0.1
MAINTAINER "dx"

USER root

# Exposed ports
EXPOSE 9000

# Add dirs
COPY  registry-ui /
WORKDIR /registry-ui
CMD  conf.sh


