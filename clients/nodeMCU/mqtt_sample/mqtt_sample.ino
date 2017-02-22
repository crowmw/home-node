#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

// Update these with values suitable for your network.
const char* ssid = "FunBox-F7AD";
const char* password = "F59274F514763D9F63ED6115DC";
const char* mqtt_server = "192.168.1.58";

const int RelayPin = 4;

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
   delay(100);
  // We start by connecting to a WiFi network
    Serial.print("Connecting to ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) 
    {
      delay(500);
      Serial.print(".");
    }
  randomSeed(micros());
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) 
{
  Serial.print("[");
  Serial.print(topic);
  Serial.print("]");
  Serial.println();

  payload[length] = '\0';
  String s = String((char*)payload);
  Serial.print(s);
  Serial.println();
  Serial.println();
  
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& root = jsonBuffer.parseObject(payload);
  if(!root.success())
  {
    Serial.println("parseObject() failed!");
    return;
  }

  String name = root["name"].asString();
  int value = root["value"];
  
  if(name == "nodeMCU") {
    if(value == 0){
      digitalWrite(RelayPin, HIGH);
    }
    if(value == 1){
      digitalWrite(RelayPin, LOW);
    }
  }
} //end callback

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) 
  {
    Serial.print("Attempting MQTT connection...");
    String clientId = "nodeMCU-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    //if you MQTT broker has clientID,username and password
    //please change following line to    if (client.connect(clientId,userName,passWord))
    if (client.connect(clientId.c_str()))
    {
      Serial.println("connected");
      Serial.println("--------------------------------------");
     //once connected to MQTT broker, subscribe command if any
      client.subscribe("onoff/nodeMCU");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 6 seconds before retrying
      delay(6000);
    }
  }
} //end reconnect()

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  pinMode(RelayPin, OUTPUT); //relay
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.setCallback(callback);
  client.loop();
}
