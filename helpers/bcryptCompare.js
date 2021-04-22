const bcrypt = require('bcryptjs');

const passCompare = (pass, hash)=>{
    return bcrypt.compareSync(pass, hash);
}

module.exports = passCompare