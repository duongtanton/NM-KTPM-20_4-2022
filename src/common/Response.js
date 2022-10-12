

const Response = (res, code, message, data) => {
    const { _user, layout } = res.locals;
    return {
        _user: _user,
        code,
        message,
        data,
        layout
    }
}
const ResponseApi = (res, code, message, data) => {
    const { _user, layout } = res.locals;
    return {
        _user: _user,
        code,
        message,
        data,
        layout
    }
}
module.exports = {
    Response,
    ResponseApi
}