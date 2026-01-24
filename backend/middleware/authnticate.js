const jwt = require('jsonwebtoken');
const mykey = "qqwewerweuyyszewdwdws";

 function verifyToken(req, res, next) {
 let token = req.headers.authorization;
    // console.log("mytoken" + token);
  if (!token) {
    return res.status(401).send('Token is requirede');
  }
  if (token.startsWith('Bearer')) {
    token = token.split(' ')[1];
  }
  try {
    const decoded = jwt.verify(token, mykey);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verify error:', err.name, err.message);
    res.json({ message: "selected data removed", status: 421 });
  }


}

module.exports = verifyToken;