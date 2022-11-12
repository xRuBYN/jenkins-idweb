FROM adoptopenjdk/openjdk11:alpine-jre
ADD target/example-0.0.24.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
