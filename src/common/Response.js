

const Response = (res, code, message, data) => {
    const { _user, layout, url } = res.locals;
    return {
        _user: _user,
        code,
        url,
        message,
        layout,
        ...data,
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
        layout,
        ...data,
    }
}
module.exports = {
    Response,
    ResponseApi
}