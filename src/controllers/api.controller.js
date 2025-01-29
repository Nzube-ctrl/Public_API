const getInfo = async (req, res) => {
  try {
    res.json({
      email: `nzubeuwakwe@gmail.com`,
      current_datetime: new Date().toISOString(),
      github_url: `https://github.com/Nzube-ctrl/Public_API`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal server error`, error: error.message });
  }
};

module.exports = getInfo;
