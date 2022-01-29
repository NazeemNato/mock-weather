const cities = require("./data/city");

exports.cityController = (req, res) => {
  try {
    const c = req.query.c;
    if (!c) {
      res.status(400).send({
        message: "Please provide a city name",
      });
    }
    const city = cities.find((c) => c.toLowerCase() === c.toLowerCase());
    if (!city) {
      res.status(404).send({
        message: "City not found",
      });
    }
    const temp_c = Math.floor(Math.random() * 100);
    const temp_f = Math.floor(temp_c * 1.8 + 32);
    // calculate humidity
    const humidity = Math.floor(Math.random() * 100);
    // calculate wind speed from humidity
    const wind = Math.floor(Math.random() * 100);
    res.status(200).send({
      city,
      temp_c,
      temp_f,
      humidity,
      wind,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.cityListController = (req, res) => {
  try {
    const q = req.query.q;
    if (!q) {
      res.status(400).send({
        message: "Please provide a city name",
      });
    }
    // find cities in q
    const result = [];
    const data = cities.filter((c) =>
      c.toLowerCase().includes(q.toLowerCase())
    );
    for (const city of data) {
      const temp_c = Math.floor(Math.random() * 100);
      const temp_f = Math.floor(temp_c * 1.8 + 32);
      // calculate humidity
      const humidity = Math.floor(Math.random() * 100);
      // calculate wind speed from humidity
      const wind = Math.floor(Math.random() * 100);
      result.push({
        city,
        temp_c,
        temp_f,
        humidity,
        wind,
      });
    }
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
