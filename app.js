require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cron = require("node-cron");

const allRoutes = require("./routes"); // import routing endpoint
const db = require("./db");

// cek koneksi db
db.then(() => {
  console.log("berhasil connect db womenrise3t");
}).catch(() => {
  console.log("gagal connect ke db womenrise3t");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes); // import routing endpoint

cron.schedule("0 0 * * *", async () => {
  try {
    const currentDate = new Date();
    await Mentorship.updateMany(
      { tanggal: { $lt: currentDate } },
      { $set: { status: false } }
    );
    console.log("Updated expired mentorship records at midnight");
  } catch (error) {
    console.error("Error updating mentorship records:", error);
  }
});

app.listen(PORT, () => {
  console.log("server running on PORT " + 3000);
});
