const logout = () => {
    console.log('ok');
    localStorage.removeItem("authToken");
    window.location.href = "/";
}

export { logout }