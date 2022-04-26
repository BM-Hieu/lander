function auth() {
  const checkTokenAuth = () => {
    if (window.localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
}
export default auth;
