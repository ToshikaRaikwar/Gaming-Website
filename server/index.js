import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Change to match your frontend URL
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://raikwartoshika:oEgGvp8yio3tBgXr@cluster0.ynjcwjq.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.error("Error connecting to database:", err);
  });

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

// Flappy Bird Score Schema
const flappyScoreSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
});

const candyScoreSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
});

const tetrisScoreSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
});

const User = mongoose.model('User', userSchema);
const FlappyScore = mongoose.model('FlappyScore', flappyScoreSchema);
//const TicScore = mongoose.model('TicScore', ticScoreSchema);
const CandyScore = mongoose.model('CandyScore', candyScoreSchema);
const TetrisScore = mongoose.model('TetrisScore', tetrisScoreSchema);

// Handle POST request for signup
app.post("/signup", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;

  // Create a new user object
  var newUser = new User({
    name: name,
    email: email,
    password: password
  });

  try {
    // Save the new user to the database
    await newUser.save();
    console.log("User registered successfully");
    res.status(200).send("User registered successfully");
    
    
  } catch (err) {
    console.error("Error saving user to database:", err);
    res.status(500).send("Error saving user to database.");
  }
});

// Handle POST request to save Flappy Bird score
app.post("/savescore", async (req, res) => {
  const { userName, score } = req.body;
  try {
    const newScore = new FlappyScore({ userName, score });
    await newScore.save();
    res.status(200).send("Score saved successfully");
  } catch (err) {
    console.error("Error saving score:", err);
    res.status(500).send("Error saving score");
  }
});

app.post("/candysavescore", async (req, res) => {
  const { userName, score } = req.body;
  try {
    const newScore = new CandyScore({ userName, score });
    await newScore.save();
    res.status(200).send("Score saved successfully");
  } catch (err) {
    console.error("Error saving score:", err);
    res.status(500).send("Error saving score");
  }
});

app.post("/tetrissavescore", async (req, res) => {
  const { userName, score } = req.body;
  try {
    const newScore = new TetrisScore({ userName, score });
    await newScore.save();
    res.status(200).send("Score saved successfully");
  } catch (err) {
    console.error("Error saving score:", err);
    res.status(500).send("Error saving score");
  }
});




app.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  try {
    // Find the user in the database
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      // User found
      console.log("User found:", user);
      res.redirect('http://localhost:5173/dashboard'); // Redirect to the dashboard page
    } else {
      // User not found, handle failed login
      console.log("User not found");
      res.status(401).send("Invalid credentials");
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Error during login");
  }
});

app.get("/flappybirdscores", async (req, res) => {
  try {
    // Fetch top 10 scores in descending order
    const flappyBirdScores = await FlappyScore.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('userName', 'name'); // Populate the userName field with name from User collection

    res.json(flappyBirdScores);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/candycrushscores", async (req, res) => {
  try {
    // Fetch top 10 scores in descending order
    const candyCrushScores = await CandyScore.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('userName', 'name'); // Populate the userName field with name from User collection

    res.json(candyCrushScores);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/tetrisscores", async (req, res) => {
  try {
    // Fetch top 10 scores in descending order
    const tetrisScores = await TetrisScore.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('userName', 'name'); // Populate the userName field with name from User collection

    res.json(tetrisScores);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/memoryscores", async (req, res) => {
  try {
    // Fetch top 10 scores in descending order
    const memoryScores = await MemoryScore.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('userName', 'name'); // Populate the userName field with name from User collection

    res.json(memoryScores);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
