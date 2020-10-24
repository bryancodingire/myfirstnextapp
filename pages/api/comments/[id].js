import comments from './comments.json'

export default (req, res) => {
    console.log("I have got this far in id");
    const { query: { id } } = req
  res.status(200).json({ post: id, comments })
}
