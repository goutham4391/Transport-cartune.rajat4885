$(document).ready(function(){char_dict={"ア":"a","イ":"a","ウ":"a","エ":"a","オ":"a","ヴ":"a","カ":"ka","キ":"ka","ク":"ka","ケ":"ka","コ":"ka","ガ":"ka","ギ":"ka","グ":"ka","ゲ":"ka","ゴ":"ka","サ":"sa","シ":"sa","ス":"sa","セ":"sa","ソ":"sa","ザ":"sa","ジ":"sa","ズ":"sa","ゼ":"sa","ゾ":"sa","タ":"ta","チ":"ta","ツ":"ta","テ":"ta","ト":"ta","ダ":"ta","ヂ":"ta","ヅ":"ta","デ":"ta","ド":"ta","ナ":"na","ニ":"na","ヌ":"na","ネ":"na","ノ":"na","ハ":"ha","ヒ":"ha","フ":"ha","ヘ":"ha","ホ":"ha","パ":"ha","ピ":"ha","プ":"ha","ペ":"ha","ポ":"ha","バ":"ha","ビ":"ha","ブ":"ha","ベ":"ha","ボ":"ha","マ":"ma","ミ":"ma","ム":"ma","メ":"ma","モ":"ma","ヤ":"ya","ユ":"ya","ヨ":"ya","ラ":"ra","リ":"ra","ル":"ra","レ":"ra","ロ":"ra","ワ":"wa","ヲ":"wa","ン":"wa"},$(".filter-items .filter-item").each(function(){var a=$(this).find(".carList-title").text(),t=a.slice(0,1).replace(/[\u3041-\u3096]/g,function(a){var t=a.charCodeAt(0)+96;return String.fromCharCode(t)}),i=char_dict[t];null==i&&(i="other"),$(this).addClass(i)}),$(".filter-control").click(function(){$(".filter-control").removeClass("active-filter"),$(this).addClass("active-filter"),$(".filter-title").text($(this).text());var a=$(this).data("filter");"all"==a?$(".filter-item").css({display:"block"}):($(".filter-item").css({display:"none"}),$(a).css({display:"block"}))})});