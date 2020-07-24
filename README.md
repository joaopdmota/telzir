
# Project Name

FaleMais web app

    Telzir is always worried with their clients.
    Thinking about that, we created a webpage where you can calculate all the cost of call time.
    The instructions below will guide you to use this webpage

## Installation

    [Docker](https://www.docker.com)
    [docker-compose](https://docs.docker.com/compose)
    [npm](https://www.npmjs.com/)
    [yarn](https://yarnpkg.com/) (alternative to npm)


# 1) install the dependecies
```bash
$ yarn install
```

# 2) Running with docker
```bash
$ docker-compose run --rm app ash

or

$ docker-compose build app 

whether you wants to rebuild an image
```

# 3) Initializing the application
```bash
inside the container run:
$ yarn start
```

### Run Tests

    yarn test

### Run Linter

    yarn lint

## License

    Images by: https://www.vhv.rs/