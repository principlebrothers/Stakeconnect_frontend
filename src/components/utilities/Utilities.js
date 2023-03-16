export function setToken(response) {
  localStorage.setItem('token', response);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function clearToken() {
  localStorage.removeItem('token');
}
