const baseURL: string =
   process.env.NODE_ENV === "development" ? ("http://localhost:8080/" as const) : ("https://api.xshop.shariatian.ir/" as const);

export default baseURL;
