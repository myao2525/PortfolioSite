  $(function(){
        $('#contents').css('display', 'none');
    });
    //ページの読み込み完了後に実行
    window.onload = function(){
        $(function() {
            //ページの読み込みが完了したのでアニメーションはフェードアウトさせる
            $("#loading").fadeOut();
            //ページの表示準備が整ったのでコンテンツをフェードインさせる
            $("#contents").fadeIn();
        });
  }