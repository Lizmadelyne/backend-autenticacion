const bcrypt = require ('bcrypt');

async function hassPassword(){
  const myPassword = 'admin123.456'
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hassPassword();
