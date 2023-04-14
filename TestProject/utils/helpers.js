const becrypt = require('becryptjs')
//hash password

exports.hashPassword = async(password) => {
    const salt =  await becrypt.genSalt(10);
    const hash = await becrypt.hash(password, salt);
    return hash;
};

exports.isPasswordMatched = async(password, hash ) => {
    return await becrypt.compare(password, hash);

};