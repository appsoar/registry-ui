# About
These files are used to build a image which  for test and prod. This image is based on nginx official image.

#Usage

```bash
cd ~/registry-ui
grunt build
tar -cf dist.tar dist
cp dist.tar Dockerfile/
cd Dockerfile
```

Change the value of REGISTRY_BACKEND_HOST and REGISTRY_BACKEND_PORT in the docker-compose.yml, they should be the correct backend host and port. Then run the command as follow. Are you sure that  dist.tar is in the Dockerfile?
```bash
docker-compose -f docker-compose.yml up
```
 The image will be built automatically , after this a container will be created and attached auto. Next you can visit http://hostip(our default port is 80, you can also change it in the docker-compose.yml) and manage your images. Enjoy!

#### about nginx

nginx.conf and conf.d's files  are used to configure nginx. You can add other conf in them to achieve your function.  Please do not delete default.conf file, though all lines are commented. 





