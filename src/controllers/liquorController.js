const Liquor = require('../models/liquorModel');

// Create a liquor
exports.createLiquor = async (req, res) => {
  try {
    const liquor = new Liquor(req.body);
    const savedLiquor = await liquor.save();
    res.status(201).json(savedLiquor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all liquors
exports.getAllLiquors = async (req, res) => {
  try {
    const liquors = await Liquor.find();
    res.json(liquors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single liquor by ID
exports.getLiquorById = async (req, res) => {
  try {
    const liquor = await Liquor.findById(req.params.id);
    if (!liquor) return res.status(404).json({ message: "Licor no encontrado" });
    res.json(liquor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a liquor
exports.updateLiquor = async (req, res) => {
  try {
    const updatedLiquor = await Liquor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLiquor) return res.status(404).json({ message: "Licor no encontrado" });
    res.json(updatedLiquor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a liquor
exports.deleteLiquor = async (req, res) => {
  try {
    const deletedLiquor = await Liquor.findByIdAndDelete(req.params.id);
    if (!deletedLiquor) return res.status(404).json({ message: "Licor no encontrado" });
    res.json({ message: "Licor eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
