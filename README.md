<p align="center">
    <!-- Discord Badge -->
    <a href="https://discord.justus0405.com/"><img src="https://img.shields.io/discord/1370519315400495234?logo=Discord&logoColor=FFFFFF&colorA=000000&colorB=FFFFFF&style=for-the-badge"></a>
    <!-- Forks Badge -->
    <a href="https://github.com/Justus0405/Redacted-Agent/forks"><img src="https://img.shields.io/github/forks/Justus0405/Redacted-Agent?colorA=000000&colorB=FFFFFF&style=for-the-badge"></a>
    <!-- Stars Badge -->
    <a href="https://github.com/Justus0405/Redacted-Agent/stargazers"><img src="https://img.shields.io/github/stars/Justus0405/Redacted-Agent?colorA=000000&colorB=FFFFFF&style=for-the-badge"></a>
    <!-- Last Commit Badge -->
    <a href="https://github.com/Justus0405/Redacted-Agent/commits/main/"><img src="https://img.shields.io/github/last-commit/Justus0405/Redacted-Agent?logo=github&logoColor=FFFFFF&colorA=000000&colorB=FFFFFF&style=for-the-badge"></a>
</p>

# About

A small standalone API Endpoint that checks text for toxicity. It loads a Hugging Face Transformers.js model (Xenova/toxic-bert) and exposes a single endpoint where you send text and get back a toxicity score from 0 – 100.

Built to be used by the [Redacted Discord Bot](https://github.com/Justus0405/Redacted-Bot).

### Run Dependencies

```plaintext
docker
docker-compose
docker-buildx
```

### Installation Steps

1. Clone the repository:

```shell
git clone --depth 1 https://github.com/Justus0405/Redacted-Agent.git
```

2. Navigate to the directory:

```shell
cd Redacted-Agent
```

3. Create a .env file from .env.example:

```shell
nano .env
```

4. Build and run with docker:

```shell
docker-compose up -d --build
```

### Testing

1. To test the endpoint do:

```shell
curl -X POST http://localhost:3000/classify \
  -H "Content-Type: application/json" \
  -d '{"text":"I love trains!"}'
```

#

<p align="center">
	Copyright &copy; 2026-present <a href="https://github.com/Justus0405" target="_blank">Justus0405</a>
</p>

<p align="center">
	<a href="https://github.com/Justus0405/Redacted-Agent/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Justus0405/Redacted-Agent?logo=Github&colorA=FFFFFF&colorB=000000&style=for-the-badge"></a>
</p>
