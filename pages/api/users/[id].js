export default (req, res) => {
    const { query: { id } } = req

  if (id === "1234") {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    })
  }
    res.json({ user: { id, name: 'Test User' } })
  }