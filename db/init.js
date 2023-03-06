let db = connect("localhost:27017");

db = db.getSiblingDB("cryptoclick");
db.createUser({
  user: "admin",
  pwd: "admin_pwd",
  roles: [{ role: "readWrite", db: "cryptoclick" }],
});

db.userentities.insert({
  login: "Eco",
  address: "0xb794f5ea0ba39494ce839613fffba74279579268",
});
