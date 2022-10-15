

const Response = (res, code, message, data) => {
    const { _user, layout, url } = res.locals;
    return {
        _user: _user,
        code,
        url,
        message,
        data,
        layout
    }
}
const ResponseApi = (res, code, message, data) => {
    const { _user, layout, url } = res.locals;
    return {
        _user: _user,
        code,
        url,
        message,
        data,
        layout
    }
}
module.exports = {
    Response,
    ResponseApi
}