const notFound = (req, res) => {
  return res.status(404).send("This route doesn't exist")
}

module.exports = notFound
