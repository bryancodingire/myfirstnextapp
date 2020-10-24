import comments from './comments.json'

export default (req, res) => {
    console.log("I have got this far in comments");
  res.status(200).json(comments)
}