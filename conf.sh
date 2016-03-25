#/bin/sh 

proxyHost=$PROXYHOST
port=$PROXYPORT

sed -i "s#host:\s*'.*',//proxyHost#host:'$proxyHost',//proxyHost#g"  /registry-ui/Gruntfile.js
sed -i "s#port:\s*.*,//proxyPort#port: $port,//proxyPort#g" /registry-ui/Gruntfile.js

cd /registry-ui/  && grunt serve
