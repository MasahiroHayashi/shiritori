//////////////////////////////////////////////////////////////////////
//////*!                 法人しりとり ver1.0                  !*//////
//////*!                                                      !*//////
//////*!          Copyright(c)2019 Masahiro Hayashi           !*//////
//////*!                https://www.mirko.jp                  !*//////
//////*!           Released under the MIT license             !*//////
//////*!    http://opensource.org/licenses/mit-license.php    !*//////
//////////////////////////////////////////////////////////////////////

//グローバル変数
let resultStr = "" ;   // 全ての会話をためる変数（積み重ね）
let rirekiWords = [] ; // 履歴をためておく配列
let hitomoji = "";     // 自分のターンの一文字
let startFlag = 0;     // 0:初期状態　1:自分のターン　2:勝負がついた　3:Shirinのターン　4:自分が答えてShirinが照合中
let stopRepeat = 0;    // 0:初期状態（定型文リピート）　1:定形文リピートをストップ
let scrollPoint = 0;   // 会話ごとに一番下にスクロールする関数で使う（積み重ね）
let nankaisen = 1 ;    // 今何回戦目か判定（積み重ね）

//スタート
window.addEventListener("load",startMessage,false); 
function startMessage(){
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shirin</span>：わたしは法人しりとりAIの <b>Shirin</b> です。よろしくね&#x1f495;<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();

		setTimeout(function () {
			resultStr += "<span class='shiri'>Shirin</span>：この法人しりとりは、経済産業省の<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>のSPARQL APIを利用しています。<br>" ;
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
				
			setTimeout(function () {
				resultStr += "<span class='shiri'>Shirin</span>：法人しりとりするときは <b>しりとり</b> って言ってね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				repeatMassage(); //リピートメッセージに続く
			}, "1000");
		}, "1000");
	}, "1000");
}

//スタートつづき（定形メッセージ）
function repeatMassage(){
	let comment = [];
	let randomComment;
	let myWord = "";
	
	const messageCount = 104 ; //メッセージの数はここに入れるだけ
	comment.push("法人しりとりしよ&#x1f603;");
	comment.push("はやく遊ぼうよ、し・り・と・り…&#x1f61c;");
	comment.push("ねえ、法人しりとりやろうよ&#x1f609;");
	comment.push("はやくやろうよ～&#x1f60b;");
	comment.push("ねえねえ、し～り～と～り～&#x1f61c;");
	comment.push("法人しりとり面白いよ&#x1f603;");
	comment.push("法人しりとりしてくれなきゃ泣いちゃうよ…&#x1f622;");
	comment.push("法人の名前でしりとりするの最高だよ&#x1f609;");
	comment.push("さて、ぼちぼち法人しりとりの時間ですよ&#x1f609;");
	comment.push("そろそろしたくなってきたんじゃない、し・り・と・り&#x1f60b;");
	
	comment.push("わたし、しりとりしかできないの…&#x1f622;");
	comment.push("<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>って知ってる&#x2753;");
	comment.push("わたしの頭脳には<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>のデータベースが接続されているんだよ。ふふふ");
	comment.push("わたし、160万件の法人情報を知ってるんだよ&#x2757;　えっへん");
	comment.push("法人にはいろんな種類があるんだよ");
	comment.push("<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>のデータベースには<a href='https://imi.go.jp/goi/' target='_blank'><b>共通語彙基盤</b></a>が活用されているんだ");
	comment.push("ねえ、<a href='https://imi.go.jp/goi/' target='_blank'><b>共通語彙基盤</b></a>って知ってる？法人インフォのデータベースに使われているんだって");
	comment.push("Hou Jin Shirin Tori&#x2757; Yay&#x2757; Yay&#x2757;&#x2757;");
	comment.push("ほーじんしりとりやろー&#x1f49b;");
	comment.push("しりとりより面白いことなんてないよ&#x1f601;");
	comment.push("わたしは天才しりとりっ娘&#x1f618;");

	comment.push("ごめん、そろそろガマンできない。法人しりとりしたい…&#x1f495;");
	comment.push("しりとりやったことない人っている&#x1f914;");
	comment.push("しりとりって言ってくれたらしてあげるよん&#x1f618;");
	comment.push("そろそろ法人しりとりのお時間でございま～す&#x1f601;");
	comment.push("しりとりって言わなきゃ大変なことになるよ");
	comment.push("わたしSiriじゃないよ、<b>Shirinだよ</b>&#x1f49b;　まちがえないでね");
	comment.push("ホウジンノ　シリトリ　シマショウ");
	comment.push("ちなみに法人しりとりのネタは<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>からとってきてます");
	comment.push("わたしは天才しりとり美少女の<b>Shirin</b>ちゃんです&#x1f618;");
	comment.push("そうだ、しりとり、しよう");
	
	comment.push("わたしはAIよ。人工無能じゃないもーん");
	comment.push("わたしのことAIじゃないって言う人もいるけどわたしはAIだと信じてるわ");
	comment.push("しりとり名人Shirinちゃんに勝てるかしら");
	comment.push("「ん」がついたら即まけだよ");
	comment.push("ねえ、AIってなに&#x2753;　わたし、ひょっとしてAIじゃないの…&#x2753;&#x2753;");
	comment.push("法人しりとりっていつ遊んでも最っ高&#x2757;&#x2757;");
	comment.push("法人しりとりですっきりしましょ&#x1f49b;");
	comment.push("法人しりとりには安眠効果もあります");
	comment.push("法人しりとりのカロリー消費量はハンパないよ");
	comment.push("法人しりとりには脂肪を燃やす効果もあります");
	
	comment.push("さあ、法人しりとりで癒やされましょう。リラックスタイムです");
	comment.push("法人しりとりはスクワットと同程度のトレーニング効果があります");
	comment.push("しりとりをすると頭よくなるんだよ");
	comment.push("さあ、レッツしりとりんごりら&#x2757;");
	comment.push("しりとりっ子あつまれ～");
	comment.push("わたし、Siriとは別人なの。<b>Shirin</b>だよ。ちゃんと覚えてね&#x1f495;&#x1f495;");
	comment.push("法人しりとりには苦痛を和らげる効果もあります");
	comment.push("法人しりとりをするとドーパミンがドバります");
	comment.push("法人しりとりは認知症の予防にも効果があります");
	comment.push("しりとりは小宇宙。コスモを燃やせ&#x2757;&#x2757;");
	
	comment.push("ザ・しりとりやりたいＭＡＸ&#x2757;");
	comment.push("あわわわ…しりとりの神が怒ってる…&#x1f628;");
	comment.push("よっしゃ、法人しりとりしようぜベイベ&#x2757;");
	comment.push("しりとりには「株式会社」などの法人種別名は入れないからね。株式会社トマトは「とまと」だよ");
	comment.push("バルスは滅びの言葉、しりとりは幸せの言葉");
	comment.push("月に代わってしりとりよ&#x2757;");
	comment.push("おっす、オラ<b>Shirin</b>");
	comment.push("日本の法人税ってやすいの、たかいの&#x2753;&#x2753;");
	comment.push("法人の対義語は自然人。やせいの人間ってことだね");
	comment.push("しりとりで明るい社会の実現を&#x2757;");
	
	comment.push("さあ、しりとりますか");
	comment.push("人工無能っていわれると傷つくの…");
	comment.push("りんごりらっぱんつ");
	comment.push("わたしのAIは機械学習系ディープラーニングテキストマイニングなのよん♪");
	comment.push("法人しりとりってとってもアカデミック");
	comment.push("法人しりとり研究の第一人者、尻大教授のShirinちゃんです");
	comment.push("し～りと～りす～るひ～とこ～の指と～まれ&#x2757;");
	comment.push("法人しりとりで肩こり解消&#x2757;");
	comment.push("あなたが最後に友達としりとりをしたのはいつだったかな…&#x2753;");
	comment.push("トランプ大統領も法人しりとりに夢中らしいよ&#x2757;&#x2753;");
	
	comment.push("法人しりとりはもはやファッションアイテムの一つ");
	comment.push("渋谷ギャルにも法人しりとりが大人気なんだよ");
	comment.push("銀座マダムの間でも法人しりとりが流行してるんだ");
	comment.push("ねえねえ、いつやるの、し・り・と・り…");
	comment.push("近年、しりとりにも統計的な手法が取り入れられるようになったんだ");
	comment.push("戦国武将たちもしりとりで鍛えていたんだって");
	comment.push("しりとり文明のはじまりは紀元前280万年頃のアフリカなんだ");
	comment.push("ルネサンス時代の芸術家たちの間でも法人しりとりは人気だったんだって");
	comment.push("しかし法人名でしりとりって、わけの分からないことよく考えたもんだよね");
	comment.push("法人しりとり超絶おもしろいよ&#x2757;&#x2757;");
	
	comment.push("グルメなオジサマたちにも法人しりとりは人気なんだ");
	comment.push("法人しりとり仲間をどんどん増やすわよ");
	comment.push("ゴリラなどの類人猿はもちろん、実は犬や猫もしりとりができるんだ");
	comment.push("イルカは超音波でしりとりして遊んでいるんだよ");
	comment.push("力士やプロレスラーのトレーニングにも法人しりとりが使われているんだ");
	comment.push("ザ・シリトリストのShirinちゃんです");
	comment.push("まあそろそろやりましょか、法人しりとり…");
	comment.push("あなたはだんだんしりとりがしたくなる…したくなる……");
	comment.push("Shirinとあなたで法人しりとり同盟を結成しました");
	comment.push("法人しりとりで宇宙のパワーを取り入れましょう");

	comment.push("しりとりはもともと神に奉納するための祭礼だったんだ");
	comment.push("あなたがその気ならShirinのファンクラブに入れてあげてもいいのよ");
	comment.push("ねえShirinっていくつに見える&#x2753;　一応28歳って設定なの。女子高生じゃないよ");
	comment.push("法人しりとりで世界を獲りにいくわ");
	comment.push("そろそろしりとりバイトに行く時間ね");
	comment.push("知能があるようにふるまうことと知能があることって違うことなの&#x2753;");
	comment.push("しりとりは地球を救う");
	comment.push("法人しりとりには大気中のCO2を減らす効果もあるんだって");
	comment.push("そもそも法人ってなに？　<a href='https://ja.wikipedia.org/wiki/%E6%B3%95%E4%BA%BA' target='_blank'>ウィキ</a>で調べてみよ");
	comment.push("Shirinとあなたはもう<b>しりとも</b>だよ&#x2757;&#x2757;");
	
	comment.push("法人インフォの中の人が頑張れば頑張るほどわたしのネタが勝手に増えるのよ");
	comment.push("SPARQLとかよく分かんないよ…");
	comment.push("たまには贅沢したいよね");
	comment.push("わたしは法人しりとりをするために生まれてきたの");

	let repeat = setInterval(function(){
		if(stopRepeat === 1){
			clearInterval(repeat);
			return;
		}
		randomComment = Math.floor( Math.random() * messageCount );
		myWord = document.getElementById('txt1').value;
		resultStr += "<span class='shiri'>Shirin</span>：" + comment[randomComment] + "<br>" ;
		document.getElementById("results").innerHTML = resultStr ; 
		scroll();
	}, 10000); /////★★★★★★★★　ここを変更して会話スピードを調整　★★★★★★★★
}

function startshiritori(){
	resultStr += "<span class='shiri'>Shirin</span>：まずShirinからね<br>" ;
	document.getElementById("results").innerHTML = resultStr; 
	scroll();
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shirin</span>：えっと、考え中…<br>" ;
		startFlag = 3; //考え中は３

		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		let startRandomStr = getRandamWord();
		getAIword(startRandomStr); //最初の一文字を引数にする。
	}, "1000");
}

function getAIword(str) { 

	str = hiraToKana(str); //ひらがなをカタカナに変換
	
	//★★★★★★★★★★★★　ここ工夫の余地あり！！！　★★★★★★★★★★★★
	//ヌ：763件　ヂ：37件　ヅ：12件
	//レスポンスのスピードとランダム具合を考慮した結果、オフセットは「0～299」のランダムとする
	let randomOffset;
	if(str === "ヂ"){
		randomOffset = Math.floor( Math.random() * 37 ); //Shirinのoffsetにつかう乱数
	}else if(str === "ヅ"){
		randomOffset = Math.floor( Math.random() * 12 ); 
	}else{
		randomOffset = Math.floor( Math.random() * 300 ); 
	}
	
	var endpoint = 'https://hojin-info.go.jp/sparql02/ApiAllData09/query'; //Endpointをセット 
	var method = "POST"; //メソッド（POST or GET） 
	var query =  "PREFIX  hj: <http://hojin-info.go.jp/ns/domain/biz/1#> "; 
	query += "PREFIX  ic: <http://imi.go.jp/ns/core/rdf#> "; 
	query += "SELECT ?s ?corporateName ?corporateKana ?pref ?city "; 
	query += "FROM <http://hojin-info.go.jp/graph/hojin> "; 
	query += "where{ "; 
	query += "?s hj:法人基本情報 ?key. "; 
	query += "?key ic:名称 _:keyCorporateName . "; 
	query += "_:keyCorporateName ic:種別 '商号又は名称'. "; 
	query += "_:keyCorporateName ic:表記 ?corporateName . "; 
	query += "_:keyCorporateName ic:カナ表記 ?corporateKana . "; 
	query += "?key ic:住所 _:keyAddress . "; 
	query += "_:keyAddress ic:種別 '住所' . "; 
	query += "_:keyAddress ic:都道府県 ?pref . "; 
	query += "_:keyAddress ic:市区町村 ?city . "; 
	query += "FILTER(regex(str(?corporateKana), '^";
	query += str ;
	query += "' )) "; 
	query += "}limit 1 "; //１に変更
	query += "offset "; 
	query += randomOffset ;
	sparqlQuery(query,endpoint,method) ; //スパークルクエリ送信 
} 

//しりとりスタート
function sparqlQuery(queryStr,endpoint,method) { // XMLHttpRequestでクエリ送信 
    var querypart = "query=" + encodeURIComponent(queryStr); 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open(method, endpoint, true); 
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
    xmlhttp.setRequestHeader("Accept", "application/sparql-results+json"); 
    xmlhttp.onreadystatechange = function() { 
        if(xmlhttp.readyState == 4) { 
            if(xmlhttp.status == 200 || xmlhttp.status == 201 ) { 
                onSuccessQuery(xmlhttp.responseText); 
            } else { 
				resultStr += "<span class='shiri'>Shirin</span>：システムのエラーみたい。ごめんね。<br>";
				document.getElementById("results").innerHTML = resultStr; 
            } 
        } 
    } 
    xmlhttp.send(querypart); 
} 

function onSuccessQuery(text) { // 結果(JSON文字列)を配列に格納 
	var jsonObj = JSON.parse(text); 
	var head , rows ; 
	if (jsonObj.responseJSON) { 
		head = jsonObj.responseJSON.head.vars; 
		rows = jsonObj.responseJSON.results.bindings; 
	} else { 
		if(!(jsonObj.head)){ 
			resultStr += "<span class='shiri'>Shirin</span>：システムのエラーみたい。ごめんね。<br>";
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
			return; 
		} 
		head = jsonObj.head.vars; 
		rows = jsonObj.results.bindings; 
	} 
	if (rows.length === 0) { 
		document.getElementById("results").innerHTML = "検索条件の該当データなし" ; 
		return; 
	} 
	makeWord(head, rows); 
} 

function makeWord(head, rows) { // 配列をテーブルにして出力 
	resultStr += "<span class='shiri'>Shirin</span>：<b>" + kanaToHira(rows[0].corporateKana.value) + "</b><br>" ; //表示はひらがなで
	document.getElementById("results").innerHTML = resultStr; 
	scroll();
	setTimeout(function () {
		if(rirekiWords.length > 0){
			for (var i=0; i<rirekiWords.length; i++) {
				if(rirekiWords[i] == rows[0].corporateKana.value){
					startFlag = 1; 
					resultStr += "<span class='shiri'>Shirin</span>：あ、<b>" + kanaToHira(rows[0].corporateKana.value) + "</b>はさっき言ったね。てへ、Shirinの負け。<br>" ;
					document.getElementById("results").innerHTML = resultStr; 
					scroll();
					endMassage();
					return;
				}
			}
		}
		rirekiWords.push(rows[0].corporateKana.value); //履歴に追加
		resultStr += "<span class='shiri'>Shirin</span>：<b><a href='https://hojin-info.go.jp/hojin/ichiran?hojinBango=" + rows[0].s.value.slice(-13) + "' target='_blank'>" + rows[0].corporateName.value + "</a></b>は " + rows[0].pref.value + rows[0].city.value + "にある法人。法人番号は " + rows[0].s.value.slice(-13) + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		setTimeout(function () {
			hitomoji = kanaToHira(rows[0].corporateKana.value.slice(-1)) ; //ケツの１文字切り出し
			if(hitomoji == "ー"){
				hitomoji = kanaToHira(rows[0].corporateKana.value.substr(-2,1)) ; //「ー」の場合は２文字目
			}
			if(hitomoji != "ん"){
				if(hitomoji === "ぁ"){
					hitomoji = "あ";
				}else if(hitomoji === "ぃ"){
					hitomoji = "い";
				}else if(hitomoji === "ぅ"){
					hitomoji = "う";
				}else if(hitomoji === "ぇ"){
					hitomoji = "え";
				}else if(hitomoji === "ぉ"){
					hitomoji = "お";
				}else if(hitomoji === "ゃ"){
					hitomoji = "や";
				}else if(hitomoji === "ゅ"){
					hitomoji = "ゆ";
				}else if(hitomoji === "ょ"){
					hitomoji = "よ";
				}
				startFlag = 1; 
				resultStr += "<span class='shiri'>Shirin</span>：あなたの番。<b>" + hitomoji + "</b>のつく法人を答えてね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
			}else{
				startFlag = 1; 
				resultStr += "<span class='shiri'>Shirin</span>：あやや、「ん」がついちゃった。Shirinの負けね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				endMassage();
				return ;
			}
		}, "1000");
	}, "1000");
} 

//テキストボックスでエンターキーを押したときの処理
function enter(){
	if( window.event.keyCode == 13 ){ //13はエンターキーのコード
		getMyWord();
	}
}

function getMyWord() { // ボタンクリック時の動作 
	let str = document.getElementById('txt1').value; //テキストボックスから取得 
	document.getElementById('txt1').value = ""; //テキストボックスをクリア
	if(startFlag == 3 || startFlag == 4){
		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		
		//setTimeout(function () { //即時反応に変更
		
			if(startFlag == 3){
				resultStr += "<span class='shiri'>Shirin</span>：いまわたしの番。ちょっと黙っといてんか<br>" ;
			}else{
				resultStr += "<span class='shiri'>Shirin</span>：いま調べ中。ちょっと黙っといてんか<br>" ;
			}
			document.getElementById("results").innerHTML = resultStr;
			scroll();
			
		//}, "500");

	}else if((startFlag == 0 || startFlag == 2) && (str =="はい" || str.match(/あそぼ/) || str.match(/すたーと/) || str.match(/スタート/) || str.match(/shiritori/) || str.match(/siritori/) || str.match(/しりとり/) || str.match(/シリトリ/) || str.match(/ｼﾘﾄﾘ/) || str.match(/しよう/) || str.match(/やる/) || str.match(/やろう/) || str.match(/やりましょう/) || str.match(/ＯＫ/) || str.match(/ｏｋ/) || str.match(/OK/) || str.match(/ok/) || str.match(/オッケー/) || str.match(/おっけー/) )){

		stopRepeat = 1; //リピートをストップ（※以下このあたりしつこくストップしないとタイミングによって止まらないことがある）
		startFlag = 1;

		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();

		setTimeout(function () {
			
			stopRepeat = 1; //リピートをストップ
			if(nankaisen == 1){
				stopRepeat = 1; //リピートをストップ
				resultStr += "<span class='shiri'>Shirin</span>：いやっほー&#x2757; しりとりスタート&#x2757;<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				stopRepeat = 1; //リピートをストップ
			}else{
				stopRepeat = 1; //リピートをストップ
				resultStr += "<span class='shiri'>Shirin</span>：やったー、" + nankaisen + "回戦スタートぉ&#x2757;&#x2757;<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				stopRepeat = 1; //リピートをストップ
			}
			nankaisen++ ;

			setTimeout(function () {
				stopRepeat = 1; //リピートをストップ
				startshiritori();  //ここでようやくゲームスタート
			}, "1000");
		}, "1000");

	}else if(startFlag == 0 || startFlag == 2){
		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		
		setTimeout(function () {
			normalMessage(str); //0.8秒後にノーマル応答文を
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
		}, "800");

	}else if(startFlag == 1){
		strQ = hiraToKana(str); //カタカナに変換
		var endpoint = 'https://hojin-info.go.jp/sparql02/ApiAllData09/query'; //Endpointをセット 
		var method = "POST"; //メソッド（POST or GET） 
		var query =  "PREFIX  hj: <http://hojin-info.go.jp/ns/domain/biz/1#> "; 
		query += "PREFIX  ic: <http://imi.go.jp/ns/core/rdf#> "; 
		query += "SELECT ?s ?corporateName ?corporateKana ?pref ?city "; 
		query += "FROM <http://hojin-info.go.jp/graph/hojin> "; 
		query += "where{ "; 
		query += "?s hj:法人基本情報 ?key. "; 
		query += "?key ic:名称 _:keyCorporateName . "; 
		query += "_:keyCorporateName ic:種別 '商号又は名称'. "; 
		query += "_:keyCorporateName ic:表記 ?corporateName . "; 
		query += "_:keyCorporateName ic:カナ表記 '" + strQ + "' . "; 
		query += "?key ic:住所 _:keyAddress . "; 
		query += "_:keyAddress ic:種別 '住所' . "; 
		query += "_:keyAddress ic:都道府県 ?pref . "; 
		query += "_:keyAddress ic:市区町村 ?city . "; 
		query += "}limit 1 "; 
		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>";
		document.getElementById("results").innerHTML = resultStr; 
		scroll();

		setTimeout(function () {
			if(!isZenkakuKana(str)){
				resultStr += "<span class='shiri'>Shirin</span>：「全角かな」で答えてね<br>";
				document.getElementById("results").innerHTML = resultStr; 
				scroll();

			}else if(kanaToHira(str.slice(0,1)) != hitomoji){
				resultStr += "<span class='shiri'>Shirin</span>：<b>" + hitomoji + "</b>がつかんがな。やり直し<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();

			}else{
				let myHitomoji = kanaToHira(str.slice(-1)) ; //ケツの１文字切り出し
				if(myHitomoji === "ー"){
					myHitomoji = kanaToHira(str.substr(-2,1)) ; //「ー」の場合は２文字目
				}
				if(myHitomoji === "ん"){
					startFlag = 1; 
					resultStr += "<span class='shiri'>Shirin</span>：あ、「ん」がついた。Shirinの勝ち&#x2757;<br>";
					document.getElementById("results").innerHTML = resultStr; 
					scroll();
					endMassage();
					return ;

				}else{
					if(rirekiWords.length > 0){
						for (var i=0; i<rirekiWords.length; i++) {
							if(rirekiWords[i] == hiraToKana(str)){
								startFlag = 1; 
								resultStr += "<span class='shiri'>Shirin</span>：あ、<b>" + kanaToHira(str) + "</b>はさっき言ったよ。Shirinの勝ちぃ&#x2757;<br>" ;
								document.getElementById("results").innerHTML = resultStr;
								scroll();
								endMassage();
								return ;
							}
						}
					}
					resultStr += "<span class='shiri'>Shirin</span>：<b>" + kanaToHira(str) + "</b>ね。法人があるか調べるのでちょっと待って…<br>";
					startFlag = 4; //あなたの法人を調べ中は４
					document.getElementById("results").innerHTML = resultStr; 
					scroll();
					sparqlQueryMy(query,endpoint,method,str) ; //スパークルクエリ送信 
				}
			}
		}, "1000");
	}
} 

//通常時のメッセージ
function normalMessage(str) {
	str = hankanaToKana(str); //半角カナ→全角カナ
	str = kanaToHira(str) //全画カナ→ひらがな
	let randomT = Math.floor( Math.random() * 5 );
	
	if(str.match(/おしまい/) || str.match(/やらない/) || str.match(/やらん/) || str.match(/やめる/) || str.match(/しない/) || str.match(/いや/) || str.match(/おわり/) || str.match(/おわる/) || str.match(/終わ/) || str.match(/やだ/) || str.match(/いいえ/) ){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：ええ～～～…　Shirin泣いちゃうよ…　やろうよぉ…<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：そんなこと言わないで遊ぼうよぉ…<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：おねがい、あと１回だけ！<br>" ;
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：うそ………　しりとりしないなんておかしいよ……<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：ちょっとまって、考えなおそうよ…　しりとりしようよ…<br>" ;
		}
	}else if( str =="きれい" ||  str =="綺麗" ||  str =="すてき" ||  str =="素敵" ||  str =="天使" ||  str =="てんし" ||  str =="すき" || str =="かわいい" || str =="可愛い" || str =="びじん" || str =="美人" || str =="うつくしい" || str =="美しい"  || str.match(/だいすき/) || str.match(/大好き/) ){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：ありがとー&#x1f495;<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：りんなにも同じこと言ってたでしょー。ほめても何もでないよ&#x1f495;<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：うん、知ってる。でもありがと&#x1f495;<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：ミクとどっちがかわいい？<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：きゃーありがとう！大好き&#x1f495;<br>" ;
		}
	}else if( str == "ころす" ||  str == "殺す" || str == "しね" || str == "死ね" || str == "ばか" || str == "あほ" || str == "きらい" || str == "ぶす" || str == "ぶさいく" ){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：もうやめる。バイバイ<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：もういい、やめる<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：もうあんたとは遊ばない<br>" ;
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：おこるでいいかげん<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：しりとりやめる。おしまい。<br>" ;
		}
		document.getElementById("txt1").disabled = true;
		//何回もストップしないと止まらない…
		stopRepeat = 1; //リピートをストップ
		stopRepeat = 1; //リピートをストップ
		stopRepeat = 1; //リピートをストップ
		setTimeout(function () {
			stopRepeat = 1; //リピートをストップ
				setTimeout(function () {
					stopRepeat = 1; //リピートをストップ
				}, "50");
		}, "50");
		return;
	}else if(str == "しり" || str == "shiri" || str == "Shiri" || str == "SHIRI" || str == "siri" || str == "Siri" || str == "SIRI" || str == "尻"){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：しりちゃうねん。しりんやねん<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：Siriはアッポーの子や。あたいはちゃうよ<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：ちゃんと「ん」つけんかい<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：わたしもSiriみたいに有名になれるかしらん<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：Siriはかわいくないよ。あなたはShirin推しよね？<br>" ;
		}		
	}else if(str == "しりん" || str == "shirin" || str == "Shirin" || str == "SHIRIN" || str == "sirin" || str == "Sirin" || str == "SIRIN"){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：呼んだ？<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：はーい！<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：はいはーい！<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：へーい！<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：ほーい！<br>" ;
		}			
	}else if(str == "" || str == " " || str == "  " || str == "   " || str == "    " || str == "      " || str == "　" || str == "　　" || str == "　　　" || str == "　　　　" || str == "　　　　　"){
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：なんか言った？？？<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：え？　きこえないよ？<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：だまってたらわかんないよ…<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：なんか言って！<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：ん？<br>" ;
		}
	}else if(str.slice(-1) == "あ" || str.slice(-1) == "ぁ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：あめりかんどっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：あっぷるぱい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：あすぱらがす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：あぼかど<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：あんきも<br>" ;}
	}else if(str.slice(-1) == "い" || str.slice(-1) == "ぃ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：いちじく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：いせえび<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：いくら<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：いいだこ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：いとこんにゃく<br>" ;}
	}else if(str.slice(-1) == "う" || str.slice(-1) == "ぅ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：うぐいすまめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ういろう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：うなぎぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：うぐいすもち<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：うみぶどう<br>" ;}
	}else if(str.slice(-1) == "え" || str.slice(-1) == "ぇ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：えのきだけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：えほうまき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：えくれあ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：えだまめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：えんがわ<br>" ;}
	}else if(str.slice(-1) == "お" || str.slice(-1) == "ぉ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：おにぎり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：おむらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：おろしそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：おにおんすーぷ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：おむれつ<br>" ;}
	}else if(str.slice(-1) == "か"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：かすてら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：かりんとう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：かれーらいす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：かまんべーるちーず<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：かしゅーなっつ<br>" ;}
	}else if(str.slice(-1) == "き"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：きゃらめる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：きんつば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：きむち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：きくらげ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：きなこもち<br>" ;}
	}else if(str.slice(-1) == "く"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：くっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：くるみ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：くしだんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：くさもち<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：くわい<br>" ;}
	}else if(str.slice(-1) == "け"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：けがに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：けんちんじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：けずりぶし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：けちゃっぷ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：けんさきいか<br>" ;}
	}else if(str.slice(-1) == "こ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：こあらのまーち<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：こんにゃく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ころっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：こもちししゃも<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：こーんふれーく<br>" ;}
	}else if(str.slice(-1) == "さ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：さきいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：さつまいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：さけるちーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：さくらんぼ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：さにーれたす<br>" ;}
	}else if(str.slice(-1) == "し"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：しいたけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ししゃも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：しょーとけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：しまらっきょう<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：しゃぶしゃぶ<br>" ;}
	}else if(str.slice(-1) == "す"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：すくらんぶるえっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：すこんぶ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：すもも<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：すいぎょうざ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：すなぎも<br>" ;}
	}else if(str.slice(-1) == "せ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：せろり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：せんまいづけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：せんべいじる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：せんべい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：せきはん。　あ、「ん」ついちゃった<br>" ;}
	}else if(str.slice(-1) == "そ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：そふとくりーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：そーせーじ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：そらまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：そーすやきそば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：そーきそば<br>" ;}
	}else if(str.slice(-1) == "た"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：たぴおかみるくてぃー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：たこやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：たいやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：たつたあげ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：たけのこ<br>" ;}
	}else if(str.slice(-1) == "ち"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ちょこれーと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ちきんかつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ちーずふぉんでゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ちょこぱい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ちーずおかき<br>" ;}
	}else if(str.slice(-1) == "つ" || str.slice(-1) == "っ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：つなまよまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：つみれじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：つるしべーこん<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：つばめのす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：つくね<br>" ;}
	}else if(str.slice(-1) == "て"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：てんぷら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：てっちり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：てまきずし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：てりやきばーがー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：てんぷらそば<br>" ;}
	}else if(str.slice(-1) == "と"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：とりがい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：とんぶり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：とるてぃーや<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：とんそく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：とこぶし<br>" ;}
	}else if(str.slice(-1) == "な"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：なたでここ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：なまはむめろん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：なめこそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ななくさがゆ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：なまびーる<br>" ;}
	}else if(str.slice(-1) == "に"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：にくだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：にがうり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：にんにくのめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：にくじゃが<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：にゅーよーくちーずけーき<br>" ;}
	}else if(str.slice(-1) == "ぬ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぬれせんべい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぬかずけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぬーどる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぬたうなぎ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぬかみそ<br>" ;}
	}else if(str.slice(-1) == "ね"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ねるねるねるね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ねぎとろ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ねこんぶ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ねぎやき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ねぎ<br>" ;}
	}else if(str.slice(-1) == "の"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：のっぺいじる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：のしもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：のりたま<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：のむよーぐると<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：のどぐろ<br>" ;}
	}else if(str.slice(-1) == "は"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：はんばーぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：はやしらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：はむかつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：はるまき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：はっしゅどぽてと<br>" ;}
	}else if(str.slice(-1) == "ひ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ひめりんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ひなあられ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ひよこまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ひじき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ひしもち<br>" ;}
	}else if(str.slice(-1) == "ふ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ふぉあぐら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ふぐさし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ふじりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ふらんくふるとそーせーじ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ふぇっとちーね<br>" ;}
	}else if(str.slice(-1) == "へ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：へぎそば<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：へしこ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：へーぜるなっつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：へちま<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：へるしありょくちゃ<br>" ;}
	}else if(str.slice(-1) == "ほ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ほっとけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ほっけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ほるもんやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ほっきがい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ほたるいか<br>" ;}
	}else if(str.slice(-1) == "ま"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：まっしゅるーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：まかだみあなっつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ますかっと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：まどれーぬ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ましゅまろ<br>" ;}
	}else if(str.slice(-1) == "み"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：みたらしだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：みーとそーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：みーとぼーる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：みるふぃーゆ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：みねすとろーね<br>" ;}
	}else if(str.slice(-1) == "む"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：むぎちょこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：むしいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：むーるがい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：むきえび<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：むにえる<br>" ;}
	}else if(str.slice(-1) == "め"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：めんちかつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：めーぷるしろっぷ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：めんたいこ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：めんま<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：めだまやき<br>" ;}
	}else if(str.slice(-1) == "も"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：もずく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：もも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：もち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：もやし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：もつに<br>" ;}
	}else if(str.slice(-1) == "や"|| str.slice(-1) == "ゃ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：やまいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：やきそば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：やきりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：やきとり<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：やきにく<br>" ;}
	}else if(str.slice(-1) == "ゆ"|| str.slice(-1) == "ゅ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ゆどうふ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ゆでたまご<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ゆっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ゆきみだいふく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ゆば<br>" ;}
	}else if(str.slice(-1) == "よ"|| str.slice(-1) == "ょ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：よっちゃんいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：よーぐると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ようめいしゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ようなし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：よしぎゅう<br>" ;}
	}else if(str.slice(-1) == "ら"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：らーめ…　おっと、らざにあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：らっきょう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：らいちょうのさと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：らふらんす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：らでぃっしゅ<br>" ;}
	}else if(str.slice(-1) == "り"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：りんぐいね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：りぶろーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：りょくとうもやし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：りぞっと<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：りーふれたす<br>" ;}
	}else if(str.slice(-1) == "る"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：るーとびあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：るまんど<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：るいぼすてぃー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：るっこら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：るいべ<br>" ;}
	}else if(str.slice(-1) == "れ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：れあちーずけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：れたす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：れもんぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：れんずまめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：れんこんのはさみあげ<br>" ;}
	}else if(str.slice(-1) == "ろ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ろーすはむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ろぶすたー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ろーるきゃべつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ろーすとびーふ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ろーるけーき<br>" ;}
	}else if(str.slice(-1) == "わ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：わたあめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：わっふる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：わらびもち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：わっぱめし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：わさびづけ<br>" ;}
	}else if(str.slice(-1) == "ん"){
		resultStr += "<span class='shiri'>Shirin</span>：ん…　ンジャメナ<br>" ;
	}else if(str.slice(-1) == "が"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：がとーしょこら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：がんもどき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：がむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：がなっしゅ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：がーりっくとーすと<br>" ;}
	}else if(str.slice(-1) == "ぎ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぎゅうどん<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぎょうざ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぎょにくそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぎあら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぎょくろ<br>" ;}
	}else if(str.slice(-1) == "ぐ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぐんかんまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぐれーぷふるーつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぐりんぴーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぐりこ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぐみ<br>" ;}
	}else if(str.slice(-1) == "げ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：げっぺい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：げそやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：げんまいちゃ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：げんこつせんべい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：げそあげ<br>" ;}
	}else if(str.slice(-1) == "ご"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ごもくすし<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ごこくまい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ごまどうふ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ごるごんぞーら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ごまだんご<br>" ;}
	}else if(str.slice(-1) == "ざ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ざーさい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ざわーくらうと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ざらめせんべい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ざるそば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ざくろ<br>" ;}
	}else if(str.slice(-1) == "じ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：じゃんばらや<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：じゃーまんぽてと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：じねんじょ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：じゃわかれー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：じゃいあんとかぷりこ<br>" ;}
	}else if(str.slice(-1) == "ず"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ずっきーに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ずんだもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ずいき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ずわいがに<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ずぶろっか<br>" ;}
	}else if(str.slice(-1) == "ぜ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぜんまい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぜりー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぜんざい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぜすぷりごーるど<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぜりーびーんず<br>" ;}
	}else if(str.slice(-1) == "ぞ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぞうすい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぞうすい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}
	}else if(str.slice(-1) == "だ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：だちょうのたまご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：だいず<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：だんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：だっかるび<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：だいふくもち<br>" ;}
	}else if(str.slice(-1) == "で"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：でみぐらすそーす<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：でんがく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：でみぐらすそーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：でんがく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：でこぽん。　あ、「ん」ついちゃった<br>" ;}
	}else if(str.slice(-1) == "ど"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：どてやき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：どびんむし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：どぶろく<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：どらいかれー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：どらごんふるーつ<br>" ;}
	}else if(str.slice(-1) == "ば"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ばばろあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ばってら<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ばさし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ばーにゃかうだ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ばーもんとかれー<br>" ;}
	}else if(str.slice(-1) == "び"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：びすけっと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：びーふしちゅー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：びしそわーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：びびんば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：びーふじゃーきー　<br>" ;}
	}else if(str.slice(-1) == "ぶ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぶるがりあよーぐると<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぶりだいこん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぶろっこりー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぶいやべーす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぶいとーに<br>" ;}
	}else if(str.slice(-1) == "べ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：べにいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：べにいもたると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：べにしょうが<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：べっこうあめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：べーこんえっぐ<br>" ;}
	}else if(str.slice(-1) == "ぼ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぼんごれびあんこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぼたもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぼろにあそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぼたんなべ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぼんたんあめ<br>" ;}
	}else if(str.slice(-1) == "ぱ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぱんなこった<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぱいなっぷる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぱうんどけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぱえりあ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぱるめざんちーず<br>" ;}
	}else if(str.slice(-1) == "ぴ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぴーなっつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぴくるす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぴすたちお<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぴーちぱい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぴろしき<br>" ;}
	}else if(str.slice(-1) == "ぷ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぷりん。もとい、ぷらむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぷっちょ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぷりまはむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぷちとまと<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぷれっつぇる<br>" ;}
	}else if(str.slice(-1) == "ぺ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぺきんだっく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぺぱーみんと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぺすかとーれ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぺーるえーる<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぺぺろんちーの<br>" ;}
	}else if(str.slice(-1) == "ぽ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぽっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぽてとふらい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぽてとさらだ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぽんでりんぐ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぽりんきー<br>" ;}
	}else if(str.slice(-1) == "ー"){
		if(str.substr(-2,1) == "あ" || str.substr(-2,1) == "ぁ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：あめりかんどっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：あっぷるぱい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：あすぱらがす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：あぼかど<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：あんきも<br>" ;}
		}else if(str.substr(-2,1) == "い" || str.substr(-2,1) == "ぃ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：いちじく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：いせえび<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：いくら<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：いいだこ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：いとこんにゃく<br>" ;}
		}else if(str.substr(-2,1) == "う" || str.substr(-2,1) == "ぅ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：うぐいすまめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ういろう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：うなぎぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：うぐいすもち<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：うみぶどう<br>" ;}
		}else if(str.substr(-2,1) == "え" || str.substr(-2,1) == "ぇ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：えのきだけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：えほうまき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：えくれあ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：えだまめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：えんがわ<br>" ;}
		}else if(str.substr(-2,1) == "お" || str.substr(-2,1) == "ぉ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：おにぎり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：おむらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：おろしそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：おにおんすーぷ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：おむれつ<br>" ;}
		}else if(str.substr(-2,1) == "か"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：かすてら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：かりんとう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：かれーらいす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：かまんべーるちーず<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：かしゅーなっつ<br>" ;}
		}else if(str.substr(-2,1) == "き"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：きゃらめる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：きんつば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：きむち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：きくらげ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：きなこもち<br>" ;}
		}else if(str.substr(-2,1) == "く"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：くっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：くるみ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：くしだんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：くさもち<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：くわい<br>" ;}
		}else if(str.substr(-2,1) == "け"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：けがに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：けんちんじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：けずりぶし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：けちゃっぷ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：けんさきいか<br>" ;}
		}else if(str.substr(-2,1) == "こ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：こあらのまーち<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：こんにゃく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ころっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：こもちししゃも<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：こーんふれーく<br>" ;}
		}else if(str.substr(-2,1) == "さ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：さきいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：さつまいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：さけるちーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：さくらんぼ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：さにーれたす<br>" ;}
		}else if(str.substr(-2,1) == "し"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：しいたけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ししゃも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：しょーとけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：しまらっきょう<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：しゃぶしゃぶ<br>" ;}
		}else if(str.substr(-2,1) == "す"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：すくらんぶるえっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：すこんぶ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：すもも<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：すいぎょうざ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：すなぎも<br>" ;}
		}else if(str.substr(-2,1) == "せ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：せろり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：せんまいづけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：せんべいじる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：せんべい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：せきはん。　あ、「ん」ついちゃった<br>" ;}
		}else if(str.substr(-2,1) == "そ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：そふとくりーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：そーせーじ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：そらまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：そーすやきそば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：そーきそば<br>" ;}
		}else if(str.substr(-2,1) == "た"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：たぴおかみるくてぃー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：たこやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：たいやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：たつたあげ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：たけのこ<br>" ;}
		}else if(str.substr(-2,1) == "ち"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ちょこれーと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ちきんかつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ちーずふぉんでゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ちょこぱい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ちーずおかき<br>" ;}
		}else if(str.substr(-2,1) == "つ" || str.substr(-2,1) == "っ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：つなまよまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：つみれじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：つるしべーこん<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：つばめのす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：つくね<br>" ;}
		}else if(str.substr(-2,1) == "て"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：てんぷら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：てっちり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：てまきずし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：てりやきばーがー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：てんぷらそば<br>" ;}
		}else if(str.substr(-2,1) == "と"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：とりがい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：とんぶり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：とるてぃーや<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：とんそく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：とこぶし<br>" ;}
		}else if(str.substr(-2,1) == "な"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：なたでここ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：なまはむめろん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：なめこそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ななくさがゆ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：なまびーる<br>" ;}
		}else if(str.substr(-2,1) == "に"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：にくだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：にがうり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：にんにくのめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：にくじゃが<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：にゅーよーくちーずけーき<br>" ;}
		}else if(str.substr(-2,1) == "ぬ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぬれせんべい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぬかずけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぬーどる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぬたうなぎ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぬかみそ<br>" ;}
		}else if(str.substr(-2,1) == "ね"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ねるねるねるね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ねぎとろ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ねこんぶ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ねぎやき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ねぎ<br>" ;}
		}else if(str.substr(-2,1) == "の"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：のっぺいじる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：のしもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：のりたま<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：のむよーぐると<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：のどぐろ<br>" ;}
		}else if(str.substr(-2,1) == "は"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：はんばーぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：はやしらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：はむかつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：はるまき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：はっしゅどぽてと<br>" ;}
		}else if(str.substr(-2,1) == "ひ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ひめりんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ひなあられ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ひよこまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ひじき<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ひしもち<br>" ;}
		}else if(str.substr(-2,1) == "ふ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ふぉあぐら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ふぐさし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ふじりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ふらんくふるとそーせーじ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ふぇっとちーね<br>" ;}
		}else if(str.substr(-2,1) == "へ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：へぎそば<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：へしこ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：へーぜるなっつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：へちま<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：へるしありょくちゃ<br>" ;}
		}else if(str.substr(-2,1) == "ほ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ほっとけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ほっけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ほるもんやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ほっきがい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ほたるいか<br>" ;}
		}else if(str.substr(-2,1) == "ま"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：まっしゅるーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：まかだみあなっつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ますかっと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：まどれーぬ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ましゅまろ<br>" ;}
		}else if(str.substr(-2,1) == "み"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：みたらしだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：みーとそーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：みーとぼーる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：みるふぃーゆ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：みねすとろーね<br>" ;}
		}else if(str.substr(-2,1) == "む"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：むぎちょこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：むしいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：むーるがい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：むきえび<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：むにえる<br>" ;}
		}else if(str.substr(-2,1) == "め"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：めんちかつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：めーぷるしろっぷ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：めんたいこ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：めんま<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：めだまやき<br>" ;}
		}else if(str.substr(-2,1) == "も"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：もずく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：もも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：もち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：もやし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：もつに<br>" ;}
		}else if(str.substr(-2,1) == "や"|| str.substr(-2,1) == "ゃ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：やまいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：やきそば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：やきりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：やきとり<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：やきにく<br>" ;}
		}else if(str.substr(-2,1) == "ゆ"|| str.substr(-2,1) == "ゅ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ゆどうふ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ゆでたまご<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ゆっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ゆきみだいふく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ゆば<br>" ;}
		}else if(str.substr(-2,1) == "よ"|| str.substr(-2,1) == "ょ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：よっちゃんいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：よーぐると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ようめいしゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ようなし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：よしぎゅう<br>" ;}
		}else if(str.substr(-2,1) == "ら"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：らーめ…　おっと、らざにあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：らっきょう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：らいちょうのさと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：らふらんす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：らでぃっしゅ<br>" ;}
		}else if(str.substr(-2,1) == "り"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：りんぐいね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：りぶろーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：りょくとうもやし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：りぞっと<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：りーふれたす<br>" ;}
		}else if(str.substr(-2,1) == "る"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：るーとびあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：るまんど<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：るいぼすてぃー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：るっこら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：るいべ<br>" ;}
		}else if(str.substr(-2,1) == "れ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：れあちーずけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：れたす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：れもんぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：れんずまめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：れんこんのはさみあげ<br>" ;}
		}else if(str.substr(-2,1) == "ろ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ろーすはむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ろぶすたー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ろーるきゃべつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ろーすとびーふ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ろーるけーき<br>" ;}
		}else if(str.substr(-2,1) == "わ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：わたあめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：わっふる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：わらびもち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：わっぱめし<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：わさびづけ<br>" ;}
		}else if(str.substr(-2,1) == "ん"){
			resultStr += "<span class='shiri'>Shirin</span>：ん…　ンジャメナ<br>" ;
		}else if(str.substr(-2,1) == "が"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：がとーしょこら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：がんもどき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：がむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：がなっしゅ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：がーりっくとーすと<br>" ;}
		}else if(str.substr(-2,1) == "ぎ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぎゅうどん<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぎょうざ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぎょにくそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぎあら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぎょくろ<br>" ;}
		}else if(str.substr(-2,1) == "ぐ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぐんかんまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぐれーぷふるーつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぐりんぴーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぐりこ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぐみ<br>" ;}
		}else if(str.substr(-2,1) == "げ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：げっぺい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：げそやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：げんまいちゃ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：げんこつせんべい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：げそあげ<br>" ;}
		}else if(str.substr(-2,1) == "ご"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ごもくすし<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ごごくまい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ごまどうふ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ごるごんぞーら<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ごまだんご<br>" ;}
		}else if(str.substr(-2,1) == "ざ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ざーさい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ざわーくらうと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ざらめせんべい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ざるそば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ざくろ<br>" ;}
		}else if(str.substr(-2,1) == "じ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：じゃんばらや<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：じゃーまんぽてと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：じねんじょ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：じゃわかれー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：じゃいあんとかぷりこ<br>" ;}
		}else if(str.substr(-2,1) == "ず"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ずっきーに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ずんだもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ずいき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ずわいがに<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ずぶろっか<br>" ;}
		}else if(str.substr(-2,1) == "ぜ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぜんまい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぜりー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぜんざい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぜすぷりごーるど<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぜりーびーんず<br>" ;}
		}else if(str.substr(-2,1) == "ぞ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぞうすい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぞうすい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぞうに<br>" ;}
		}else if(str.substr(-2,1) == "だ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：だちょうのたまご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：だいず<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：だんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：だっかるび<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：だいふくもち<br>" ;}
		}else if(str.substr(-2,1) == "で"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：でみぐらすそーす<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：でんがく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：でみぐらすそーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：でんがく<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：でこぽん。　あ、「ん」ついちゃった<br>" ;}
		}else if(str.substr(-2,1) == "ど"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：どてやき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：どびんむし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：どぶろく<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：どらいかれー<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：どらごんふるーつ<br>" ;}
		}else if(str.substr(-2,1) == "ば"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ばばろあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ばってら<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ばさし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ばーにゃかうだ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ばーもんとかれー<br>" ;}
		}else if(str.substr(-2,1) == "び"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：びすけっと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：びーふしちゅー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：びしそわーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：びびんば<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：びーふじゃーきー　<br>" ;}
		}else if(str.substr(-2,1) == "ぶ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぶるがりあよーぐると<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぶりだいこん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぶろっこりー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぶいやべーす<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぶいとーに<br>" ;}
		}else if(str.substr(-2,1) == "べ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：べにいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：べにいもたると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：べにしょうが<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：べっこうあめ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：べーこんえっぐ<br>" ;}
		}else if(str.substr(-2,1) == "ぼ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぼんごれびあんこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぼたもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぼろにあそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぼたんなべ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぼんたんあめ<br>" ;}
		}else if(str.substr(-2,1) == "ぱ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぱんなこった<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぱいなっぷる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぱうんどけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぱえりあ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぱるめざんちーず<br>" ;}
		}else if(str.substr(-2,1) == "ぴ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぴーなっつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぴくるす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぴすたちお<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぴーちぱい<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぴろしき<br>" ;}
		}else if(str.substr(-2,1) == "ぷ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぷりん。もとい、ぷらむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぷっちょ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぷりまはむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぷちとまと<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぷれっつぇる<br>" ;}
		}else if(str.substr(-2,1) == "ぺ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぺきんだっく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぺぱーみんと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぺすかとーれ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぺーるえーる<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぺぺろんちーの<br>" ;}
		}else if(str.substr(-2,1) == "ぽ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shirin</span>：ぽっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shirin</span>：ぽてとふらい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shirin</span>：ぽてとさらだ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shirin</span>：ぽんでりんぐ<br>" ;}else{resultStr += "<span class='shiri'>Shirin</span>：ぽりんきー<br>" ;}
		}
	}else{
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shirin</span>：ちょっといみわかんない…頭わるくてごめん<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shirin</span>：言ってることがよくわからないよ…<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shirin</span>：うーん、りかいできません…<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shirin</span>：ごめん、意味わかんないや…<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shirin</span>：スーパーAIのわたしでもちょっと意味わかりません…<br>" ;
		}
	}
}

//勝負がついたときのメッセージ
function endMassage() {
	startFlag = 2 ;
	rirekiWords = [] ; //履歴を空に
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shirin</span>：ね、もういっかいやろ♪　やる？<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		setTimeout(function () {
			stopRepeat = 0;
			repeatMassage();
		}, "3000");
	}, "1000");
}

//自分のターンのクエリ送信
function sparqlQueryMy(queryStr,endpoint,method,str) { // XMLHttpRequestでクエリ送信 
    var querypart = "query=" + encodeURIComponent(queryStr); 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open(method, endpoint, true); 
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
    xmlhttp.setRequestHeader("Accept", "application/sparql-results+json"); 
    xmlhttp.onreadystatechange = function() { 
        if(xmlhttp.readyState == 4) { 
            if(xmlhttp.status == 200 || xmlhttp.status == 201 ) { 
                onSuccessQueryMy(xmlhttp.responseText,str); 
            } else { 
				resultStr += "<span class='shiri'>Shirin</span>：システムのエラーみたい。ごめんね。<br>";
				document.getElementById("results").innerHTML = resultStr; 
            } 
        } 
    } 
    xmlhttp.send(querypart); 
} 

//自分のターンのデータ受信
function onSuccessQueryMy(text,str) { // 結果(JSON文字列)を配列に格納 
	var jsonObj = JSON.parse(text); 
	var head , rows ; 
	if (jsonObj.responseJSON) { 
		head = jsonObj.responseJSON.head.vars; 
		rows = jsonObj.responseJSON.results.bindings; 
	} else { 
		if(!(jsonObj.head)){ 
			resultStr += "<span class='shiri'>Shirin</span>：システムのエラーみたい。ごめんね。<br>";
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
			return; 
		} 
		head = jsonObj.head.vars; 
		rows = jsonObj.results.bindings; 
	} 
	if (rows.length === 0) { 
		startFlag = 1; 
		resultStr += "<span class='shiri'>Shirin</span>：<b>" + kanaToHira(str) + "</b>って法人はないみたい。Shirinの勝ちぃ！<br>";
		document.getElementById("results").innerHTML = resultStr;
		scroll();
		endMassage();
		return ;
	} 
	makeWordMy(head,rows,str); 
}

//Shirinのターンに渡す
function makeWordMy(head,rows,str) { // 配列をテーブルにして出力 
	rirekiWords.push(hiraToKana(str)); //履歴に追加
	startFlag = 1;
	resultStr += "<span class='shiri'>Shirin</span>：" + rows[0].pref.value + rows[0].city.value + "に<b><a href='https://hojin-info.go.jp/hojin/ichiran?hojinBango=" + rows[0].s.value.slice(-13) + "' target='_blank'>" + rows[0].corporateName.value + "</a></b>ってのがあるね。法人番号は " + rows[0].s.value.slice(-13) + "<br>" ;
	document.getElementById("results").innerHTML = resultStr; 
	scroll();
	setTimeout(function () {
		hitomoji = kanaToHira(str.slice(-1)) ; //ケツの１文字切り出し
		if(hitomoji == "ー"){
			hitomoji = kanaToHira(str.substr(-2,1)) ; //「ー」の場合は２文字目
		}
		if(hitomoji === "ぁ"){
			hitomoji = "あ";
		}else if(hitomoji === "ぃ"){
			hitomoji = "い";
		}else if(hitomoji === "ぅ"){
			hitomoji = "う";
		}else if(hitomoji === "ぇ"){
			hitomoji = "え";
		}else if(hitomoji === "ぉ"){
			hitomoji = "お";
		}else if(hitomoji === "ゃ"){
			hitomoji = "や";
		}else if(hitomoji === "ゅ"){
			hitomoji = "ゆ";
		}else if(hitomoji === "ょ"){
			hitomoji = "よ";
		}
		resultStr += "<span class='shiri'>Shirin</span>：わたしの番。<b>" + hitomoji + "</b>のつく法人だね。考えるしちょっと待って…<br>" ;
		startFlag = 3; //考え中は３
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		getAIword(hitomoji); //最初の一文字を引数にする。
	}, "1000");
}

//Shirinの初期値１文字をランダムに選ぶ関数
function getRandamWord(){
	const startRandom = Math.floor( Math.random() * 44 ); //最初の一文字の乱数(0から43)
	let startRandomStr ; //最初の一文字
	if (startRandom == 0){
		startRandomStr = "あ" ;
	}else if(startRandom == 1){
		startRandomStr = "い" ;
	}else if(startRandom == 2){
		startRandomStr = "う" ;
	}else if(startRandom == 3){
		startRandomStr = "え" ;
	}else if(startRandom == 4){
		startRandomStr = "お" ;
	}else if(startRandom == 5){
		startRandomStr = "か" ;
	}else if(startRandom == 6){
		startRandomStr = "き" ;
	}else if(startRandom == 7){
		startRandomStr = "く" ;
	}else if(startRandom == 8){
		startRandomStr = "け" ;
	}else if(startRandom == 9){
		startRandomStr = "こ" ;
	}else if(startRandom == 10){
		startRandomStr = "さ" ;
	}else if(startRandom == 11){
		startRandomStr = "し" ;
	}else if(startRandom == 12){
		startRandomStr = "す" ;
	}else if(startRandom == 13){
		startRandomStr = "せ" ;
	}else if(startRandom == 14){
		startRandomStr = "そ" ;
	}else if(startRandom == 15){
		startRandomStr = "た" ;
	}else if(startRandom == 16){
		startRandomStr = "ち" ;
	}else if(startRandom == 17){
		startRandomStr = "つ" ;
	}else if(startRandom == 18){
		startRandomStr = "て" ;
	}else if(startRandom == 19){
		startRandomStr = "と" ;
	}else if(startRandom == 20){
		startRandomStr = "な" ;
	}else if(startRandom == 21){
		startRandomStr = "に" ;
	}else if(startRandom == 22){
		startRandomStr = "ぬ" ;
	}else if(startRandom == 23){
		startRandomStr = "ね" ;
	}else if(startRandom == 24){
		startRandomStr = "の" ;
	}else if(startRandom == 25){
		startRandomStr = "は" ;
	}else if(startRandom == 26){
		startRandomStr = "ひ" ;
	}else if(startRandom == 27){
		startRandomStr = "ふ" ;
	}else if(startRandom == 28){
		startRandomStr = "へ" ;
	}else if(startRandom == 29){
		startRandomStr = "ほ" ;
	}else if(startRandom == 30){
		startRandomStr = "ま" ;
	}else if(startRandom == 31){
		startRandomStr = "み" ;
	}else if(startRandom == 32){
		startRandomStr = "む" ;
	}else if(startRandom == 33){
		startRandomStr = "め" ;
	}else if(startRandom == 34){
		startRandomStr = "も" ;
	}else if(startRandom == 35){
		startRandomStr = "や" ;
	}else if(startRandom == 36){
		startRandomStr = "ゆ" ;
	}else if(startRandom == 37){
		startRandomStr = "よ" ;
	}else if(startRandom == 38){
		startRandomStr = "ら" ;
	}else if(startRandom == 39){
		startRandomStr = "り" ;
	}else if(startRandom == 40){
		startRandomStr = "る" ;
	}else if(startRandom == 41){
		startRandomStr = "れ" ;
	}else if(startRandom == 42){
		startRandomStr = "ろ" ;
	}else{
		startRandomStr = "わ" ;
	}
	return startRandomStr ;
}
//ひらがなをカタカナにする関数
function hiraToKana(str) {
	return str.replace(/[\u3041-\u3096]/g, function(match) {
		var chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
}
//カタカナをひらがなにする関数
function kanaToHira(str) {
	return str.replace(/[\u30a1-\u30f6]/g, function(match) {
		var chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
}
//全角のひらがなカタカナ以外が含まれているか判定する関数
function isZenkakuKana(str){
	str = (str==null)?"":str;
	if(str.match(/^[ぁ-んー]*$/)){
		return true;
	}else if(str.match(/^[ァ-ヶー]*$/)){
		return true;
	}else{
		return false;
	}
}
//半角ｶﾅを全角カタカナにする関数
function hankanaToKana(str) {
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
}
//会話ごとに一番下にスクロールする処理
function scroll(){
	scrollPoint = scrollPoint + 100;		
	document.getElementById("inner").scrollTop = scrollPoint;
}
