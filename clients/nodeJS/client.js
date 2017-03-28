const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883", {
  password: "matias19",
  username: "crow.mw@gmail.com"
});

client.on("connect", () => {
  console.log("Client connected!");
  client.subscribe("crowmw2/#");
  // client.subscribe('Alice/#')
  let weather = {
    temperature: 25.00,
    humidity: 35.00,
    name: "nodeJS",
    updated: new Date().toLocaleString()
  };
  client.publish("crowmw2/weather", JSON.stringify(weather));
  let weather1 = {
    temperature: 20.00,
    humidity: 30.00,
    name: "nodeJS",
    updated: new Date().toLocaleString()
  };
  client.publish("crowmw2/weather", JSON.stringify(weather1));
  client.publish("crowmw2/weather", JSON.stringify(weather1));
});
