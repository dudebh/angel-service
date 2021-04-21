const bcrypt = require('bcryptjs');

const passCompare = pass=>{
    return bcrypt.compareSync(pass, hash);
}