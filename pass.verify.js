const bcrypt = require ('bcrypt');

async function verifyPassword(){
  const myPassword = 'admin123.456'
  const hash = '$2b$10$ndeWLHlrLa6qUkkJ3Om8Hu07WemRb76sR9UJkhdaYlLb.MsaBBPhG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
