#build stage
FROM golang:alpine AS builder
WORKDIR /go/src/app
COPY . .
RUN apk add --update go git build-base
RUN apk add --no-cache git`
RUN go get -d -v ./...
RUN go build -o /go/bin/app main.go

#final stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=builder /go/bin/app /app
ENTRYPOINT ./app
LABEL Name=backend Version=0.0.1
EXPOSE 8080