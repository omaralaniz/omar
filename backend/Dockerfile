FROM golang

ENV GO111MODULE=on

WORKDIR app/
COPY . .

EXPOSE 8080

RUN GOOS=windows GOARCH=amd64 go build

ENTRYPOINT [ "/app/backend" ]
