document.addEventListener('DOMContentLoaded', () => {
  try {
    var login = JSON.parse(localStorage.getItem('login'));
    var auth = JSON.parse(localStorage.getItem('auth'));
    // ログイン中
    if ((auth && auth.token) || (login && login.authToken)) {
      if (auth && auth.user && auth.user.pictureUrl) {
        document.querySelector('.header__login img').setAttribute('data-src', auth.user.pictureUrl);
      } else if (login && login.user && login.user.pictureUrl) {
        document.querySelector('.header__login img').setAttribute('data-src', login.user.pictureUrl);
      }
      document.querySelector('html').classList.add('is-login');

      // フリープランの「無料で登録」を非表示
      document.querySelector('.m-plan__list .free .item__btn').style.display = 'none';
      document.querySelector('.m-recommend__list .free .item__btn').style.display = 'none';

      // リダイレクト先が設定されている場合はそのページへ遷移
      // var redirectUri = (auth && auth.loginParams) ? auth.loginParams.redirectUrl : (login && login.redirectUrl); 
      // if (redirectUri) {
      //   // sessionStorage.removeItem('redirectUri');
      //   window.location.href = redirectUri;
      //   return;
      // }
    }
  } catch (err) {}
});
