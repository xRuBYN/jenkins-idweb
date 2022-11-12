export const paths = {
  landingPage: "/",
  register: "/register",
  login: "/login",
  error: "/error",
  success: "/success",
  mainDashboard: "/main-dashboard",
  aboutUs: "/about-us",
  wishListDashboard: "/wishlist-dashboard",
}

export const url = {
  baseUrl: "http://app-jenkins-back:8080",
  get registerUrl() {
    return `${this.baseUrl}/register`
  },
  get loginUrl() {
    return `${this.baseUrl}/login`
  },
  get wishlistsUrl() {
    return `${this.baseUrl}/wishlists`
  },
  wishesByWishListIDUrl(wishListID) {
    return `${this.baseUrl}/wishes/wishlist/${wishListID}`
  },
  wishesByID(wishID) {
    return `${this.baseUrl}/wishes/${wishID}`
  },
  get mainDashboard() {
    return `${this.baseUrl}/main-dashboard`
  },
}
