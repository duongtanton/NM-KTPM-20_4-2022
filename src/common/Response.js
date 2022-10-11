

const Response = (res, code, message, data) => {
    const { _user, layout } = res.locals;
    return {
        user: _user,
        code,
        message,
        data,
        layout
    }
}
module.exports = {
    Response
}