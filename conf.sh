#/bin/sh 

proxyHost=$PROXYHOST
port=$PROXYPORT
dbHost=$DBHOST
dbPort=$DBPORT

sed -i "s#host:\s*'.*',//proxyHost#host:'$proxyHost',//proxyHost#g"  /registry-ui/Gruntfile.js
sed -i "s#port:\s*.*,//proxyPort#port: $port,//proxyPort#g" /registry-ui/Gruntfile.js

sed -i "s#ws://.*:[[:digit:]]*/#ws://$proxyHost:$port/#g" /registry-ui/app/constants/constant.js

sed -i "s#http://.*)#http://$dbHost:$dbPort')#g" /registry-ui/app/constants/constant.js

cd /registry-ui/  && grunt serve
