export class AuthenticationService {
  private _isAuthenticated = false;
  private _callBacks: Array<(isAuthenticated: boolean) => void> = [];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {}

  public get isAuthenticated(): boolean {
    if (this._isAuthenticated === false) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
      if (currentUser && currentUser.username && currentUser.password) {
        this._isAuthenticated = true;
      }
    }
    return this._isAuthenticated;
  }

  // public set authenticationEvent(callBack: (isAuthenticated: boolean) => void) {
  //   this._callBacks.push(callBack);
  // }

  public registerAuthenticationHandlerFn(callBack: (isAuthenticated: boolean) => void) {
    this._callBacks.push(callBack);
  }

  public login(username = 'TEST_USERNAME', password = 'TEST_PASSWORD') {
    localStorage.setItem('currentUser', JSON.stringify({ username, password }));
    this._isAuthenticated = true;
    this._callBacks.forEach((callBack) => callBack(this._isAuthenticated));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this._isAuthenticated = false;
    this._callBacks.forEach((callBack) => callBack(this._isAuthenticated));
  }
}
