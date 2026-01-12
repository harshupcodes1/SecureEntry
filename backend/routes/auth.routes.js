const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

/* Register */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (await User.findOne({ email }))
    return res.status(400).json({ message: "User exists" });

  const hash = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hash });
  res.json({ message: "Registered" });
});

/* Login */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.json({ token });
});

/* Protected */
router.get("/profile", auth, (req, res) => res.json(req.user));
router.get("/admin", auth, role("admin"), (req, res) =>
  res.json({ message: "Admin access" })
);

module.exports = router;
