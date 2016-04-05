# About

The `registry-ui` is a ng application which used to manage a private Docker registry.
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

# Features

Repositories/images add,list,remove,detail,push,pull. User manage ,logs and so on.

#Usage

Prerequisites:
* [Bower](http://bower.io/)
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) 5.7.0 (with NPM)
* [Yo](http://www.yeoman.com/)
* [Grunt](www.gruntjs.net)
*[Ruby](http://www.ruby-lang.org/zh_cn/)

If you're on a Ubuntu host, you can follow these steps:
```bash
  curl --header 'Host: nodejs.org' --header 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:44.0) Gecko/20100101 Firefox/44.0' --header 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' --header 'Accept-Language: en-US,en;q=0.5' --header 'Referer: https://nodejs.org/en/download/stable/' --header 'Cookie: __cfduid=d7e88f28577b67a7c099419ee6f5d49f21456706860; _ga=GA1.2.403574900.1456706871; _gat=1' --header 'Connection: keep-alive' 'https://nodejs.org/dist/v5.7.0/node-v5.7.0.tar.gz' -o 'node-v5.7.0.tar.gz' -L
  tar zxvf node-v5.7.0.tar.gz
  cd node-v5.7.0
  sudo ./configure
  sudo make
  sudo make install
  npm install -g bower yo grunt
  sudo apt-get install python-software-properties
  sudo apt-add-repository ppa:brightbox/ruby-ng
  sudo apt-get update
  sudo apt-get install ruby2.3 ruby2.3-dev
  gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
  sudo gem update --system
  sudo gem install compass
```

Setup:
```bash
  git clone 'https://github.com/appsoar/registry-ui'
  cd 'registry-ui'
  npm install
  bower install
```

Run development server:
```bash
  grunt serve
```

Connect to UI at http://localhost:9000/ .  The server automatically picks up file changes, restarts itself, and reloads the web browser.  

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


### Bugs & Issues
Please submit bugs and issues to [appsoar/registry-ui](//github.com/appsoar/registry-ui/issues) with a title starting with `[UI] `.


#### Useful links

* angularjs-cn: http://angularjs.cn/
* angularjs: https://www.angularjs.org/





