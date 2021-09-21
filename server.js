const express = require("express");
const app = express();

app.get("/test/:number", async function (req, res) {
   try {
       const numberToTest = Number(req.params.number)
if (numberToTest % 3 ===0 && numberToTest % 5 ===0 ) return res.json("FizzBuzz")
  if (numberToTest % 3 ===0) return res.json("Fizz")
  if (numberToTest % 5 ===0) return res.json("Buzz")
  
  

  return res.json(numberToTest+1);
   } catch (err) {
     return res.json({ result: null, status: 500, error: err }).status(500);
	}
});

app.listen(4001, () => {
  
  console.log(`🚀 application ready at 4000`);
});
