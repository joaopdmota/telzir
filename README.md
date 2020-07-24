
# Project Name

FaleMais web app

    Telzir is always worried with their clients.
    Thinking about that, we created a webpage where you can calculate all the cost of call time.
    The instructions below will guide you to use this webpage

## Installation

[Docker](https://www.docker.com)

[docker-compose](https://docs.docker.com/compose)

[npm](https://www.npmjs.com) 

or

[yarn](https://yarnpkg.com) 


In this project I used yarn as default package manager. So lets start:

# 1) Install the dependencies
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
```
