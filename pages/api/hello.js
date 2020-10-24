// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log("I'm in the house") // The request body
  console.log(req.body) // The request body
  console.log(req.query) // The url query string
  console.log(req.cookies) // The passed cookies

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
