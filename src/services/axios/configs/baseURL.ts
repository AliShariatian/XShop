const baseURL: string =
   process.env.NODE_ENV === "development" ? ("http://localhost:8080/" as const) : ("https://api-xshop.liara.run/" as const);

export default baseURL;
