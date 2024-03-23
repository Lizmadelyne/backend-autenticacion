const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxMDgwNzQzOX0.UiG9nL93RRlXAq6_HHoikE00faqT_2flOA2zlpjdh84';

function verifyToken (token, secret){
    return jwt.verify(token, secret)
};
const payload = verifyToken(token, secret);
console.log(payload);