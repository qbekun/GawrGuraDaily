<div align="center">
  <h1>Gawr Gura Daily</h1>
  <img src="https://raw.githubusercontent.com/qbekun/qbekun/refs/heads/main/gawrgura_FgNW12YVEAAf--4.png" height="128" />
  <p>Daily Gawr Gura pictures via Discord webhook<p>
</div>

# Installation

```bash
$ git clone https://github.com/qbekun/GawrGuraDaily.git
$ cd GawrGuraDaily
$ cp .env.example .env
$ npm i
$ npm start
```

You can also use something like [pm2](https://pm2.keymetrics.io/)!

```bash
$ npm i -g pm2
$ pm2 start index.js
```

# Configuration

```sh
# .env.example
API_KEY="" # Gelbooru API key
USER_ID="" # Gelbooru user ID
WEBHOOK="" # Discord webhook
```

# License

This project is licensed under the [MIT License](https://github.com/FireStreaker2/HutaoDaily/blob/main/LICENSE).

Originally based on [HutaoDaily](https://github.com/FireStreaker2/HutaoDaily) by FireStreaker2.
