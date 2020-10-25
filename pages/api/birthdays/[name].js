import birthdays from './birthdays.json'

export default (req, res) => {
    console.log("I have got this far in birthdays");
    const { query: { name } } = req

  var birthday = getBirthday(name)
  
    res.status(200).json({ birthday })
}

const getBirthday = (name) =>{
  return birthdays.filter(birthdays => birthdays.name.toUpperCase() === name.toUpperCase())
}
