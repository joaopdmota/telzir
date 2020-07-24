
# FaleMais web app

    Telzir is always worried with their clients.
    Thinking about that, we created a webpage where you can calculate all the cost of call time.
    The instructions below will guide you to run the app locally

## Requisites

### Docker

[Docker](https://www.docker.com) is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.

### Docker compose


[docker-compose](https://docs.docker.com/compose) is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the list of features.

[npm](https://www.npmjs.com) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.


[yarn](https://yarnpkg.com) is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry.


Yarn was my choice to this project, but feel comfortable to choose. So lets start:

# 1) Installing the dependencies
```bash

$ yarn install
```

# 2) Docker is always welcome
```bash
$ docker-compose run --rm app ash
```

or

```bash
$ docker-compose build app 
```
whether you wants to rebuild an image


# 3) Initializing the application
inside the container run:
```bash
$ yarn start
```

### Running Tests

    yarn test

### Running Linter

    yarn lint

# 4) Be happy! :smiley:
