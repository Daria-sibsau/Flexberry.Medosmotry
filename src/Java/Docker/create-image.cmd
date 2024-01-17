docker build --no-cache -f SQL\Dockerfile.PostgreSql -t medosmotry-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t medosmotry-java/app ../../..
