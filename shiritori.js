//グローバル変数
let resultStr = "" ;   //全ての会話をためる変数
let rirekiWords = [] ; //履歴をためておく配列
let hitomoji = "";     //自分のターンの一文字
let startFlag = 0;
let stopRepeat = 0;    //1にすると定形文をストップ

//スタート
window.addEventListener("load",startMessage,false); 
function startMessage(){
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shiri</span>：わたしは法人しりとりAIの <b>Shiri</b> です。よろしくね&#x1f495;<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();

		setTimeout(function () {
			resultStr += "<span class='shiri'>Shiri</span>：この法人しりとりは、経済産業省の<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>のSPARQL APIを利用しています。<br>" ;
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
				
			setTimeout(function () {
				resultStr += "<span class='shiri'>Shiri</span>：法人しりとりするときは <b>しりとり</b> って言ってね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				repeatMassage(); //リピートメッセージに続く
			}, "1000");
		}, "1000");
	}, "1000");
}

let scrollPoint = 0;
function scroll(){
	//暫定版の一番下スクロール
	scrollPoint = scrollPoint + 100;		
	document.getElementById("inner").scrollTop = scrollPoint;
}
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
	comment.push("Hou Jin Shiri Tori&#x2757; Yay&#x2757; Yay&#x2757;&#x2757;");
	comment.push("ほーじんしりとりやろー&#x1f49b;");
	comment.push("しりとりより面白いことなんてないよ&#x1f601;");
	comment.push("わたしは天才しりとりっ娘&#x1f618;");

	comment.push("ごめん、そろそろガマンできない。法人しりとりしたい…&#x1f495;");
	comment.push("しりとりやったことない人っている&#x1f914;");
	comment.push("しりとりって言ってくれたらしてあげるよん&#x1f618;");
	comment.push("そろそろ法人しりとりのお時間でございま～す&#x1f601;");
	comment.push("しりとりって言わなきゃ大変なことになるよ");
	comment.push("わたしSiriじゃないよ、<b>Shiriだよ</b>&#x1f49b;　まちがえないでね");
	comment.push("ホウジンノ　シリトリ　シマショウ");
	comment.push("ちなみに法人しりとりのネタは<a href='https://hojin-info.go.jp/hojin/TopPage' target='_blank'><b>法人インフォ</b></a>からとってきてます");
	comment.push("わたしは天才しりとり美少女の<b>Shiri</b>ちゃんです&#x1f618;");
	comment.push("そうだ、しりとり、しよう");
	
	comment.push("わたしはAIよ。人工無能じゃないもーん");
	comment.push("わたしのことAIじゃないって言う人もいるけどわたしはAIだと信じてるわ");
	comment.push("しりとり名人Shiriちゃんに勝てるかしら");
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
	comment.push("わたし、Siriとは別人なの。<b>Shiri</b>だよ。ちゃんと覚えてね&#x1f495;&#x1f495;");
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
	comment.push("おっす、オラ<b>Shiri</b>");
	comment.push("日本の法人税ってやすいの、たかいの&#x2753;&#x2753;");
	comment.push("法人の対義語は自然人。やせいの人間ってことだね");
	comment.push("しりとりで明るい社会の実現を&#x2757;");
	
	comment.push("さあ、しりとりますか");
	comment.push("人工無能っていわれると傷つくの…");
	comment.push("りんごりらっぱんつ");
	comment.push("わたしのAIは機械学習系ディープラーニングテキストマイニングなのよん♪");
	comment.push("法人しりとりってとってもアカデミック");
	comment.push("法人しりとり研究の第一人者、尻大教授のShiriちゃんです");
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
	comment.push("ザ・シリトリストのShiriちゃんです");
	comment.push("まあそろそろやりましょか、法人しりとり…");
	comment.push("あなたはだんだんしりとりがしたくなる…したくなる……");
	comment.push("Shiriとあなたで法人しりとり同盟を結成しました");
	comment.push("法人しりとりで宇宙のパワーを取り入れましょう");

	comment.push("しりとりはもともと神に奉納するための祭礼だったんだ");
	comment.push("あなたがその気ならShiriのファンクラブに入れてあげてもいいのよ");
	comment.push("ねえShiriっていくつに見える&#x2753;　一応28歳って設定なの。女子高生じゃないよ");
	comment.push("法人しりとりで世界を獲りにいくわ");
	comment.push("そろそろしりとりバイトに行く時間ね");
	comment.push("知能があるようにふるまうことと知能があることって違うことなの&#x2753;");
	comment.push("しりとりは地球を救う");
	comment.push("法人しりとりには大気中のCO2を減らす効果もあるんだって");
	comment.push("そもそも法人ってなに？　<a href='https://ja.wikipedia.org/wiki/%E6%B3%95%E4%BA%BA' target='_blank'>ウィキ</a>で調べてみよ");
	comment.push("Shiriとあなたはもう<b>しりとも</b>だよ&#x2757;&#x2757;");
	
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
		resultStr += "<span class='shiri'>Shiri</span>：" + comment[randomComment] + "<br>" ;
		document.getElementById("results").innerHTML = resultStr ; 
		scroll();
		
	}, 10000);
}

function startShiritori(){
	resultStr += "<span class='shiri'>Shiri</span>：まずShiriからね<br>" ;
	document.getElementById("results").innerHTML = resultStr; 
	scroll();
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shiri</span>：えっと、考え中…<br>" ;
		startFlag = 3; //考え中は３

		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		let startRandomStr = getRandamWord();
		getAIword(startRandomStr); //最初の一文字を引数にする。
	}, "1000");
}

function getAIword(str) { // ボタンクリック時の動作 
	let randomOffset = Math.floor( Math.random() * 753 ); //Shiriのoffsetにつかう乱数(0から752)★★★★ここ工夫の余地あり！★★★★
	str = hiraToKana(str); //ひらがなをカタカナに変換
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
                document.getElementById("results").innerHTML = "エラー" ; 
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
			resultStr += "<span class='shiri'>Shiri</span>：システムのエラーみたい。ごめんね。<br>";
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

	resultStr += "<span class='shiri'>Shiri</span>：<b>" + kanaToHira(rows[0].corporateKana.value) + "</b><br>" ; //表示はひらがなで
	document.getElementById("results").innerHTML = resultStr; 
	scroll();

	setTimeout(function () {
		if(rirekiWords.length > 0){
			for (var i=0; i<rirekiWords.length; i++) {
				if(rirekiWords[i] == rows[0].corporateKana.value){
					startFlag = 1; 
					resultStr += "<span class='shiri'>Shiri</span>：あ、<b>" + kanaToHira(rows[0].corporateKana.value) + "</b>はさっき言ったね。てへ、Shiriの負け。<br>" ;
					document.getElementById("results").innerHTML = resultStr; 
					scroll();
					endMassage();
					return;
				}
			}
		}

		rirekiWords.push(rows[0].corporateKana.value); //履歴に追加
		//document.getElementById("results2").innerHTML = JSON.stringify(rirekiWords,undefined,1); 

		resultStr += "<span class='shiri'>Shiri</span>：<b><a href='https://hojin-info.go.jp/hojin/ichiran?hojinBango=" + rows[0].s.value.slice(-13) + "' target='_blank'>" + rows[0].corporateName.value + "</a></b>は " + rows[0].pref.value + rows[0].city.value + "にある法人。法人番号は " + rows[0].s.value.slice(-13) + "<br>" ;
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
				resultStr += "<span class='shiri'>Shiri</span>：あなたの番。<b>" + hitomoji + "</b>のつく法人を答えてね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
			}else{
				startFlag = 1; 
				resultStr += "<span class='shiri'>Shiri</span>：あやや、「ん」がついちゃった。Shiriの負けね<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				endMassage();
				return ;
			}
		}, "1000");
	}, "1000");
} 

let nankaisen = 1 ;

//ボタンを押したときの処理
function getMyWord() { // ボタンクリック時の動作 
	let str = document.getElementById('txt1').value; //テキストボックスから取得 
	document.getElementById('txt1').value = ""; //テキストボックスをクリア

	if(startFlag == 3 || startFlag == 4){
		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		
		//setTimeout(function () { //即時反応に変更
		
			if(startFlag == 3){
				resultStr += "<span class='shiri'>Shiri</span>：いまわたしの番。ちょっと黙っといてんか<br>" ;
			}else{
				resultStr += "<span class='shiri'>Shiri</span>：いま調べ中。ちょっと黙っといてんか<br>" ;
			}
			document.getElementById("results").innerHTML = resultStr;
			scroll();
			
		//}, "500");

	}else if((startFlag == 0 || startFlag == 2) && (str =="はい" || str.match(/あそぼ/) || str.match(/すたーと/) || str.match(/スタート/) || str.match(/shiritori/) || str.match(/siritori/) || str.match(/しりとり/) || str.match(/シリトリ/) || str.match(/ｼﾘﾄﾘ/) || str.match(/しよう/) || str.match(/やる/) || str.match(/やろう/) || str.match(/やりましょう/) || str.match(/ＯＫ/) || str.match(/ｏｋ/) || str.match(/OK/) || str.match(/ok/) || str.match(/オッケー/) || str.match(/おっけー/) )){

		stopRepeat = 1; //一旦リピートをストップ
		startFlag = 1;

		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();

		setTimeout(function () {
			
			if(nankaisen == 1){
				stopRepeat = 1; //リピートをストップ
				resultStr += "<span class='shiri'>Shiri</span>：いやっほー&#x2757; しりとりスタート&#x2757;<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				stopRepeat = 1; //リピートをストップ
			}else{
				stopRepeat = 1; //リピートをストップ
				resultStr += "<span class='shiri'>Shiri</span>：やったー、" + nankaisen + "回戦スタートぉ&#x2757;&#x2757;<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();
				stopRepeat = 1; //リピートをストップ
			}
			nankaisen++ ;

			setTimeout(function () {
				stopRepeat = 1; //リピートをストップ
				startShiritori();
			}, "1000");
		}, "1000");

	}else if(startFlag == 0 || startFlag == 2){
		resultStr += "<span class='anata'>あなた</span>：" + str + "<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		
		setTimeout(function () {
			normalMessage(str);
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
				resultStr += "<span class='shiri'>Shiri</span>：「全角かな」で答えてたもれ<br>";
				document.getElementById("results").innerHTML = resultStr; 
				scroll();

			}else if(kanaToHira(str.slice(0,1)) != hitomoji){
				resultStr += "<span class='shiri'>Shiri</span>：<b>" + hitomoji + "</b>がつかんがな。やり直し<br>" ;
				document.getElementById("results").innerHTML = resultStr; 
				scroll();

			}else{
				let myHitomoji = kanaToHira(str.slice(-1)) ; //ケツの１文字切り出し
				if(myHitomoji === "ー"){
					myHitomoji = kanaToHira(str.substr(-2,1)) ; //「ー」の場合は２文字目
				}
				if(myHitomoji === "ん"){
					startFlag = 1; 
					resultStr += "<span class='shiri'>Shiri</span>：あ、「ん」がついた。Shiriの勝ち&#x2757;<br>";
					document.getElementById("results").innerHTML = resultStr; 
					scroll();
					endMassage();
					return ;

				}else{
					if(rirekiWords.length > 0){
						for (var i=0; i<rirekiWords.length; i++) {
							if(rirekiWords[i] == hiraToKana(str)){
								startFlag = 1; 
								resultStr += "<span class='shiri'>Shiri</span>：あ、<b>" + kanaToHira(str) + "</b>はさっき言ったよ。Shiriの勝ちぃ&#x2757;<br>" ;
								document.getElementById("results").innerHTML = resultStr;
								scroll();
								endMassage();
								return ;
							}
						}
					}
					resultStr += "<span class='shiri'>Shiri</span>：<b>" + kanaToHira(str) + "</b>ね。法人があるか調べるのでちょっと待って…<br>";
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
			resultStr += "<span class='shiri'>Shiri</span>：ええ～～～…　Shiri泣いちゃうよ…　やろうよぉ…<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：そんなこと言わないで遊ぼうよぉ…<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：おねがい、あと１回だけ！<br>" ;
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：うそ………　しりとりしないなんておかしいよ……<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：ちょっとまって、考えなおそうよ…　しりとりしようよ…<br>" ;
		}
		
	}else if( str =="きれい" ||  str =="綺麗" ||  str =="すてき" ||  str =="素敵" ||  str =="天使" ||  str =="てんし" ||  str =="すき" || str =="かわいい" || str =="可愛い" || str =="美人" || str =="うつくしい" || str =="美しい"  || str.match(/だいすき/) || str.match(/大好き/) ){

		if(randomT === 0){
			resultStr += "<span class='shiri'>Shiri</span>：ありがとー&#x1f495;<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：りんなにも同じこと言ってたでしょー。ほめても何もでないよ&#x1f495;<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：うん、知ってる。でもありがと&#x1f495;<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：ミクとどっちがかわいい？<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：きゃーありがとう！大好き&#x1f495;<br>" ;
		}
		
	}else if( str == "ころす" ||  str == "殺す" || str == "しね" || str == "死ね" || str == "ばか" || str == "あほ" || str == "きらい" || str == "やらせろ" ){

		if(randomT === 0){
			resultStr += "<span class='shiri'>Shiri</span>：もうやめる。バイバイ<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：もういい、やめる<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：もうあんたとは遊ばない<br>" ;
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：さよなら(; ;)<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：しりとりやめる。おしまい。<br>" ;
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
		
	}else if(str == "しり" || str == "shiri" || str == "Shiri" || str == "SHIRI"){

		if(randomT === 0){
			resultStr += "<span class='shiri'>Shiri</span>：呼んだ？<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：はーい！<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：はいはーい！<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：へーい！<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：ほーい！<br>" ;
		}
				
	}else if(str == "" || str == " " || str == "  " || str == "   " || str == "    " || str == "      " || str == "　" || str == "　　" || str == "　　　" || str == "　　　　" || str == "　　　　　"){

		if(randomT === 0){
			resultStr += "<span class='shiri'>Shiri</span>：なんか言った？？？<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：え？　きこえないよ？<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：だまってたらわかんないよ…<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：なんか言って！<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：ん？<br>" ;
		}
		
	}else if(str.slice(-1) == "あ" || str.slice(-1) == "ぁ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：あめりかんどっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：あっぷるぱい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：あすぱらがす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：あぼかど<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：あんきも<br>" ;}
	}else if(str.slice(-1) == "い" || str.slice(-1) == "ぃ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：いちじく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：いせえび<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：いくら<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：いいだこ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：いとこんにゃく<br>" ;}
	}else if(str.slice(-1) == "う" || str.slice(-1) == "ぅ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：うぐいすまめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ういろう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：うなぎぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：うぐいすもち<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：うみぶどう<br>" ;}
	}else if(str.slice(-1) == "え" || str.slice(-1) == "ぇ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：えのきだけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：えほうまき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：えくれあ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：えだまめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：えんがわ<br>" ;}
	}else if(str.slice(-1) == "お" || str.slice(-1) == "ぉ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：おにぎり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：おむらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：おろしそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：おにおんすーぷ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：おむれつ<br>" ;}
	}else if(str.slice(-1) == "か"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：かすてら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：かりんとう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：かれーらいす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：かまんべーるちーず<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：かしゅーなっつ<br>" ;}
	}else if(str.slice(-1) == "き"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：きゃらめる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：きんつば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：きむち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：きくらげ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：きなこもち<br>" ;}
	}else if(str.slice(-1) == "く"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：くっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：くるみ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：くしだんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：くさもち<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：くわい<br>" ;}
	}else if(str.slice(-1) == "け"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：けがに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：けんちんじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：けずりぶし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：けちゃっぷ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：けんさきいか<br>" ;}
	}else if(str.slice(-1) == "こ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：こあらのまーち<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：こんにゃく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ころっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：こもちししゃも<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：こーんふれーく<br>" ;}
	}else if(str.slice(-1) == "さ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：さきいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：さつまいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：さけるちーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：さくらんぼ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：さにーれたす<br>" ;}
	}else if(str.slice(-1) == "し"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：しいたけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ししゃも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：しょーとけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：しまらっきょう<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：しゃぶしゃぶ<br>" ;}
	}else if(str.slice(-1) == "す"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：すくらんぶるえっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：すこんぶ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：すもも<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：すいぎょうざ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：すなぎも<br>" ;}
	}else if(str.slice(-1) == "せ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：せろり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：せんまいづけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：せんべいじる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：せんべい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：せきはん。　あ、「ん」ついちゃった<br>" ;}
	}else if(str.slice(-1) == "そ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：そふとくりーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：そーせーじ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：そらまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：そーすやきそば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：そーきそば<br>" ;}
	}else if(str.slice(-1) == "た"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：たぴおかみるくてぃー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：たこやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：たいやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：たつたあげ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：たけのこ<br>" ;}
	}else if(str.slice(-1) == "ち"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ちょこれーと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ちきんかつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ちーずふぉんでゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ちょこぱい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ちーずおかき<br>" ;}
	}else if(str.slice(-1) == "つ" || str.slice(-1) == "っ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：つなまよまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：つみれじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：つるしべーこん<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：つばめのす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：つくね<br>" ;}
	}else if(str.slice(-1) == "て"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：てんぷら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：てっちり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：てまきずし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：てりやきばーがー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：てんぷらそば<br>" ;}
	}else if(str.slice(-1) == "と"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：とりがい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：とんぶり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：とるてぃーや<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：とんそく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：とこぶし<br>" ;}
	}else if(str.slice(-1) == "な"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：なたでここ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：なまはむめろん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：なめこそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ななくさがゆ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：なまびーる<br>" ;}
	}else if(str.slice(-1) == "に"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：にくだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：にがうり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：にんにくのめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：にくじゃが<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：にゅーよーくちーずけーき<br>" ;}
	}else if(str.slice(-1) == "ぬ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぬれせんべい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぬかずけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぬーどる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぬたうなぎ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぬかみそ<br>" ;}
	}else if(str.slice(-1) == "ね"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ねるねるねるね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ねぎとろ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ねこんぶ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ねぎやき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ねぎ<br>" ;}
	}else if(str.slice(-1) == "の"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：のっぺいじる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：のしもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：のりたま<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：のむよーぐると<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：のどぐろ<br>" ;}
	}else if(str.slice(-1) == "は"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：はんばーぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：はやしらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：はむかつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：はるまき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：はっしゅどぽてと<br>" ;}
	}else if(str.slice(-1) == "ひ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ひめりんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ひなあられ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ひよこまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ひじき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ひしもち<br>" ;}
	}else if(str.slice(-1) == "ふ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ふぉあぐら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ふぐさし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ふじりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ふらんくふるとそーせーじ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ふぇっとちーね<br>" ;}
	}else if(str.slice(-1) == "へ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：へぎそば<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：へしこ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：へーぜるなっつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：へちま<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：へるしありょくちゃ<br>" ;}
	}else if(str.slice(-1) == "ほ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ほっとけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ほっけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ほるもんやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ほっきがい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ほたるいか<br>" ;}
	}else if(str.slice(-1) == "ま"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：まっしゅるーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：まかだみあなっつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ますかっと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：まどれーぬ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ましゅまろ<br>" ;}
	}else if(str.slice(-1) == "み"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：みたらしだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：みーとそーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：みーとぼーる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：みるふぃーゆ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：みねすとろーね<br>" ;}
	}else if(str.slice(-1) == "む"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：むぎちょこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：むしいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：むーるがい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：むきえび<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：むにえる<br>" ;}
	}else if(str.slice(-1) == "め"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：めんちかつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：めーぷるしろっぷ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：めんたいこ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：めんま<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：めだまやき<br>" ;}
	}else if(str.slice(-1) == "も"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：もずく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：もも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：もち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：もやし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：もつに<br>" ;}
	}else if(str.slice(-1) == "や"|| str.slice(-1) == "ゃ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：やまいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：やきそば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：やきりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：やきとり<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：やきにく<br>" ;}
	}else if(str.slice(-1) == "ゆ"|| str.slice(-1) == "ゅ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ゆどうふ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ゆでたまご<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ゆっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ゆきみだいふく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ゆば<br>" ;}
	}else if(str.slice(-1) == "よ"|| str.slice(-1) == "ょ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：よっちゃんいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：よーぐると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ようめいしゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ようなし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：よしぎゅう<br>" ;}
	}else if(str.slice(-1) == "ら"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：らーめ…　おっと、らざにあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：らっきょう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：らいちょうのさと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：らふらんす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：らでぃっしゅ<br>" ;}
	}else if(str.slice(-1) == "り"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：りんぐいね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：りぶろーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：りょくとうもやし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：りぞっと<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：りーふれたす<br>" ;}
	}else if(str.slice(-1) == "る"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：るーとびあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：るまんど<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：るいぼすてぃー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：るっこら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：るいべ<br>" ;}
	}else if(str.slice(-1) == "れ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：れあちーずけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：れたす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：れもんぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：れんずまめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：れんこんのはさみあげ<br>" ;}
	}else if(str.slice(-1) == "ろ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ろーすはむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ろぶすたー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ろーるきゃべつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ろーすとびーふ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ろーるけーき<br>" ;}
	}else if(str.slice(-1) == "わ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：わたあめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：わっふる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：わらびもち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：わっぱめし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：わさびづけ<br>" ;}
	}else if(str.slice(-1) == "ん"){
		resultStr += "<span class='shiri'>Shiri</span>：ん…　ンジャメナ<br>" ;
	}else if(str.slice(-1) == "が"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：がとーしょこら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：がんもどき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：がむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：がなっしゅ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：がーりっくとーすと<br>" ;}
	}else if(str.slice(-1) == "ぎ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぎゅうどん<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぎょうざ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぎょにくそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぎあら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぎょくろ<br>" ;}
	}else if(str.slice(-1) == "ぐ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぐんかんまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぐれーぷふるーつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぐりんぴーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぐりこ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぐみ<br>" ;}
	}else if(str.slice(-1) == "げ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：げっぺい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：げそやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：げんまいちゃ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：げんこつせんべい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：げそあげ<br>" ;}
	}else if(str.slice(-1) == "ご"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ごもくすし<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ごこくまい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ごまどうふ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ごるごんぞーら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ごまだんご<br>" ;}
	}else if(str.slice(-1) == "ざ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ざーさい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ざわーくらうと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ざらめせんべい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ざるそば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ざくろ<br>" ;}
	}else if(str.slice(-1) == "じ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：じゃんばらや<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：じゃーまんぽてと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：じねんじょ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：じゃわかれー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：じゃいあんとかぷりこ<br>" ;}
	}else if(str.slice(-1) == "ず"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ずっきーに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ずんだもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ずいき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ずわいがに<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ずぶろっか<br>" ;}
	}else if(str.slice(-1) == "ぜ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぜんまい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぜりー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぜんざい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぜすぷりごーるど<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぜりーびーんず<br>" ;}
	}else if(str.slice(-1) == "ぞ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぞうすい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぞうすい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}
	}else if(str.slice(-1) == "だ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：だちょうのたまご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：だいず<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：だんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：だっかるび<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：だいふくもち<br>" ;}
	}else if(str.slice(-1) == "で"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：でみぐらすそーす<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：でんがく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：でみぐらすそーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：でんがく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：でこぽん。　あ、「ん」ついちゃった<br>" ;}
	}else if(str.slice(-1) == "ど"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：どてやき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：どびんむし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：どぶろく<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：どらいかれー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：どらごんふるーつ<br>" ;}
	}else if(str.slice(-1) == "ば"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ばばろあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ばってら<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ばさし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ばーにゃかうだ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ばーもんとかれー<br>" ;}
	}else if(str.slice(-1) == "び"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：びすけっと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：びーふしちゅー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：びしそわーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：びびんば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：びーふじゃーきー　<br>" ;}
	}else if(str.slice(-1) == "ぶ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぶるがりあよーぐると<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぶりだいこん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぶろっこりー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぶいやべーす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぶいとーに<br>" ;}
	}else if(str.slice(-1) == "べ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：べにいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：べにいもたると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：べにしょうが<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：べっこうあめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：べーこんえっぐ<br>" ;}
	}else if(str.slice(-1) == "ぼ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぼんごれびあんこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぼたもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぼろにあそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぼたんなべ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぼんたんあめ<br>" ;}
	}else if(str.slice(-1) == "ぱ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぱんなこった<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぱいなっぷる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぱうんどけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぱえりあ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぱるめざんちーず<br>" ;}
	}else if(str.slice(-1) == "ぴ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぴーなっつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぴくるす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぴすたちお<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぴーちぱい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぴろしき<br>" ;}
	}else if(str.slice(-1) == "ぷ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぷりん。もとい、ぷらむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぷっちょ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぷりまはむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぷちとまと<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぷれっつぇる<br>" ;}
	}else if(str.slice(-1) == "ぺ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぺきんだっく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぺぱーみんと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぺすかとーれ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぺーるえーる<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぺぺろんちーの<br>" ;}
	}else if(str.slice(-1) == "ぽ"){
		if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぽっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぽてとふらい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぽてとさらだ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぽんでりんぐ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぽりんきー<br>" ;}
	
	}else if(str.slice(-1) == "ー"){
	
		if(str.substr(-2,1) == "あ" || str.substr(-2,1) == "ぁ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：あめりかんどっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：あっぷるぱい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：あすぱらがす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：あぼかど<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：あんきも<br>" ;}
		}else if(str.substr(-2,1) == "い" || str.substr(-2,1) == "ぃ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：いちじく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：いせえび<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：いくら<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：いいだこ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：いとこんにゃく<br>" ;}
		}else if(str.substr(-2,1) == "う" || str.substr(-2,1) == "ぅ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：うぐいすまめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ういろう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：うなぎぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：うぐいすもち<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：うみぶどう<br>" ;}
		}else if(str.substr(-2,1) == "え" || str.substr(-2,1) == "ぇ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：えのきだけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：えほうまき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：えくれあ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：えだまめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：えんがわ<br>" ;}
		}else if(str.substr(-2,1) == "お" || str.substr(-2,1) == "ぉ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：おにぎり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：おむらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：おろしそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：おにおんすーぷ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：おむれつ<br>" ;}
		}else if(str.substr(-2,1) == "か"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：かすてら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：かりんとう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：かれーらいす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：かまんべーるちーず<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：かしゅーなっつ<br>" ;}
		}else if(str.substr(-2,1) == "き"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：きゃらめる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：きんつば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：きむち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：きくらげ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：きなこもち<br>" ;}
		}else if(str.substr(-2,1) == "く"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：くっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：くるみ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：くしだんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：くさもち<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：くわい<br>" ;}
		}else if(str.substr(-2,1) == "け"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：けがに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：けんちんじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：けずりぶし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：けちゃっぷ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：けんさきいか<br>" ;}
		}else if(str.substr(-2,1) == "こ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：こあらのまーち<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：こんにゃく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ころっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：こもちししゃも<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：こーんふれーく<br>" ;}
		}else if(str.substr(-2,1) == "さ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：さきいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：さつまいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：さけるちーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：さくらんぼ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：さにーれたす<br>" ;}
		}else if(str.substr(-2,1) == "し"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：しいたけ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ししゃも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：しょーとけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：しまらっきょう<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：しゃぶしゃぶ<br>" ;}
		}else if(str.substr(-2,1) == "す"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：すくらんぶるえっぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：すこんぶ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：すもも<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：すいぎょうざ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：すなぎも<br>" ;}
		}else if(str.substr(-2,1) == "せ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：せろり<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：せんまいづけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：せんべいじる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：せんべい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：せきはん。　あ、「ん」ついちゃった<br>" ;}
		}else if(str.substr(-2,1) == "そ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：そふとくりーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：そーせーじ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：そらまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：そーすやきそば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：そーきそば<br>" ;}
		}else if(str.substr(-2,1) == "た"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：たぴおかみるくてぃー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：たこやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：たいやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：たつたあげ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：たけのこ<br>" ;}
		}else if(str.substr(-2,1) == "ち"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ちょこれーと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ちきんかつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ちーずふぉんでゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ちょこぱい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ちーずおかき<br>" ;}
		}else if(str.substr(-2,1) == "つ" || str.substr(-2,1) == "っ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：つなまよまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：つみれじる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：つるしべーこん<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：つばめのす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：つくね<br>" ;}
		}else if(str.substr(-2,1) == "て"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：てんぷら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：てっちり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：てまきずし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：てりやきばーがー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：てんぷらそば<br>" ;}
		}else if(str.substr(-2,1) == "と"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：とりがい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：とんぶり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：とるてぃーや<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：とんそく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：とこぶし<br>" ;}
		}else if(str.substr(-2,1) == "な"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：なたでここ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：なまはむめろん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：なめこそば<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ななくさがゆ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：なまびーる<br>" ;}
		}else if(str.substr(-2,1) == "に"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：にくだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：にがうり<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：にんにくのめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：にくじゃが<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：にゅーよーくちーずけーき<br>" ;}
		}else if(str.substr(-2,1) == "ぬ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぬれせんべい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぬかずけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぬーどる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぬたうなぎ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぬかみそ<br>" ;}
		}else if(str.substr(-2,1) == "ね"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ねるねるねるね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ねぎとろ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ねこんぶ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ねぎやき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ねぎ<br>" ;}
		}else if(str.substr(-2,1) == "の"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：のっぺいじる<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：のしもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：のりたま<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：のむよーぐると<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：のどぐろ<br>" ;}
		}else if(str.substr(-2,1) == "は"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：はんばーぐ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：はやしらいす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：はむかつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：はるまき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：はっしゅどぽてと<br>" ;}
		}else if(str.substr(-2,1) == "ひ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ひめりんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ひなあられ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ひよこまめ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ひじき<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ひしもち<br>" ;}
		}else if(str.substr(-2,1) == "ふ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ふぉあぐら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ふぐさし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ふじりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ふらんくふるとそーせーじ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ふぇっとちーね<br>" ;}
		}else if(str.substr(-2,1) == "へ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：へぎそば<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：へしこ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：へーぜるなっつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：へちま<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：へるしありょくちゃ<br>" ;}
		}else if(str.substr(-2,1) == "ほ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ほっとけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ほっけ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ほるもんやき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ほっきがい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ほたるいか<br>" ;}
		}else if(str.substr(-2,1) == "ま"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：まっしゅるーむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：まかだみあなっつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ますかっと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：まどれーぬ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ましゅまろ<br>" ;}
		}else if(str.substr(-2,1) == "み"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：みたらしだんご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：みーとそーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：みーとぼーる<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：みるふぃーゆ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：みねすとろーね<br>" ;}
		}else if(str.substr(-2,1) == "む"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：むぎちょこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：むしいも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：むーるがい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：むきえび<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：むにえる<br>" ;}
		}else if(str.substr(-2,1) == "め"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：めんちかつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：めーぷるしろっぷ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：めんたいこ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：めんま<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：めだまやき<br>" ;}
		}else if(str.substr(-2,1) == "も"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：もずく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：もも<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：もち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：もやし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：もつに<br>" ;}
		}else if(str.substr(-2,1) == "や"|| str.substr(-2,1) == "ゃ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：やまいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：やきそば<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：やきりんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：やきとり<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：やきにく<br>" ;}
		}else if(str.substr(-2,1) == "ゆ"|| str.substr(-2,1) == "ゅ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ゆどうふ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ゆでたまご<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ゆっけ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ゆきみだいふく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ゆば<br>" ;}
		}else if(str.substr(-2,1) == "よ"|| str.substr(-2,1) == "ょ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：よっちゃんいか<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：よーぐると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ようめいしゅ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ようなし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：よしぎゅう<br>" ;}
		}else if(str.substr(-2,1) == "ら"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：らーめ…　おっと、らざにあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：らっきょう<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：らいちょうのさと<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：らふらんす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：らでぃっしゅ<br>" ;}
		}else if(str.substr(-2,1) == "り"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：りんぐいね<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：りぶろーす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：りょくとうもやし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：りぞっと<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：りーふれたす<br>" ;}
		}else if(str.substr(-2,1) == "る"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：るーとびあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：るまんど<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：るいぼすてぃー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：るっこら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：るいべ<br>" ;}
		}else if(str.substr(-2,1) == "れ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：れあちーずけーき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：れたす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：れもんぱい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：れんずまめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：れんこんのはさみあげ<br>" ;}
		}else if(str.substr(-2,1) == "ろ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ろーすはむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ろぶすたー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ろーるきゃべつ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ろーすとびーふ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ろーるけーき<br>" ;}
		}else if(str.substr(-2,1) == "わ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：わたあめ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：わっふる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：わらびもち<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：わっぱめし<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：わさびづけ<br>" ;}
		}else if(str.substr(-2,1) == "ん"){
			resultStr += "<span class='shiri'>Shiri</span>：ん…　ンジャメナ<br>" ;
		}else if(str.substr(-2,1) == "が"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：がとーしょこら<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：がんもどき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：がむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：がなっしゅ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：がーりっくとーすと<br>" ;}
		}else if(str.substr(-2,1) == "ぎ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぎゅうどん<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぎょうざ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぎょにくそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぎあら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぎょくろ<br>" ;}
		}else if(str.substr(-2,1) == "ぐ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぐんかんまき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぐれーぷふるーつ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぐりんぴーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぐりこ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぐみ<br>" ;}
		}else if(str.substr(-2,1) == "げ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：げっぺい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：げそやき<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：げんまいちゃ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：げんこつせんべい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：げそあげ<br>" ;}
		}else if(str.substr(-2,1) == "ご"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ごもくすし<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ごごくまい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ごまどうふ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ごるごんぞーら<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ごまだんご<br>" ;}
		}else if(str.substr(-2,1) == "ざ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ざーさい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ざわーくらうと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ざらめせんべい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ざるそば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ざくろ<br>" ;}
		}else if(str.substr(-2,1) == "じ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：じゃんばらや<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：じゃーまんぽてと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：じねんじょ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：じゃわかれー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：じゃいあんとかぷりこ<br>" ;}
		}else if(str.substr(-2,1) == "ず"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ずっきーに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ずんだもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ずいき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ずわいがに<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ずぶろっか<br>" ;}
		}else if(str.substr(-2,1) == "ぜ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぜんまい<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぜりー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぜんざい<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぜすぷりごーるど<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぜりーびーんず<br>" ;}
		}else if(str.substr(-2,1) == "ぞ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぞうすい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぞうすい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぞうに<br>" ;}
		}else if(str.substr(-2,1) == "だ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：だちょうのたまご<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：だいず<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：だんご<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：だっかるび<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：だいふくもち<br>" ;}
		}else if(str.substr(-2,1) == "で"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：でみぐらすそーす<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：でんがく<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：でみぐらすそーす<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：でんがく<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：でこぽん。　あ、「ん」ついちゃった<br>" ;}
		}else if(str.substr(-2,1) == "ど"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：どてやき<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：どびんむし<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：どぶろく<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：どらいかれー<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：どらごんふるーつ<br>" ;}
		}else if(str.substr(-2,1) == "ば"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ばばろあ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ばってら<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ばさし<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ばーにゃかうだ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ばーもんとかれー<br>" ;}
		}else if(str.substr(-2,1) == "び"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：びすけっと<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：びーふしちゅー<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：びしそわーず<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：びびんば<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：びーふじゃーきー　<br>" ;}
		}else if(str.substr(-2,1) == "ぶ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぶるがりあよーぐると<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぶりだいこん<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぶろっこりー<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぶいやべーす<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぶいとーに<br>" ;}
		}else if(str.substr(-2,1) == "べ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：べにいも<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：べにいもたると<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：べにしょうが<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：べっこうあめ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：べーこんえっぐ<br>" ;}
		}else if(str.substr(-2,1) == "ぼ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぼんごれびあんこ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぼたもち<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぼろにあそーせーじ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぼたんなべ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぼんたんあめ<br>" ;}
		}else if(str.substr(-2,1) == "ぱ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぱんなこった<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぱいなっぷる<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぱうんどけーき<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぱえりあ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぱるめざんちーず<br>" ;}
		}else if(str.substr(-2,1) == "ぴ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぴーなっつ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぴくるす<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぴすたちお<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぴーちぱい<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぴろしき<br>" ;}
		}else if(str.substr(-2,1) == "ぷ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぷりん。もとい、ぷらむ<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぷっちょ<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぷりまはむ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぷちとまと<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぷれっつぇる<br>" ;}
		}else if(str.substr(-2,1) == "ぺ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぺきんだっく<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぺぱーみんと<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぺすかとーれ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぺーるえーる<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぺぺろんちーの<br>" ;}
		}else if(str.substr(-2,1) == "ぽ"){
			if(randomT === 0){resultStr += "<span class='shiri'>Shiri</span>：ぽっきー<br>" ;}else if(randomT === 1){resultStr += "<span class='shiri'>Shiri</span>：ぽてとふらい<br>" ;}else if(randomT === 2){resultStr += "<span class='shiri'>Shiri</span>：ぽてとさらだ<br>" ;}else if(randomT === 3){resultStr += "<span class='shiri'>Shiri</span>：ぽんでりんぐ<br>" ;}else{resultStr += "<span class='shiri'>Shiri</span>：ぽりんきー<br>" ;}
		}
	}else{
		
		if(randomT === 0){
			resultStr += "<span class='shiri'>Shiri</span>：ちょっといみわかんない…頭わるくてごめん<br>" ;
		}else if(randomT === 1){
			resultStr += "<span class='shiri'>Shiri</span>：言ってることがよくわからないよ…<br>" ;
		}else if(randomT === 2){
			resultStr += "<span class='shiri'>Shiri</span>：うーん、りかいできません…<br>" 
		}else if(randomT === 3){
			resultStr += "<span class='shiri'>Shiri</span>：ごめん、意味わかんないや…<br>" ;
		}else{
			resultStr += "<span class='shiri'>Shiri</span>：スーパーAIのわたしでもちょっと意味わかりません…<br>" ;
		}
	}
}

//勝負がついたときのメッセージ
function endMassage() {
	startFlag = 2 ;
	rirekiWords = [] ; //履歴を空に
	setTimeout(function () {
		resultStr += "<span class='shiri'>Shiri</span>：ね、もういっかいやろ♪　やる？<br>" ;
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		setTimeout(function () {
			stopRepeat = 0;
			repeatMassage();
		}, "3000");
	}, "1000");
}

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
                document.getElementById("results").innerHTML = "エラー" ; 
            } 
        } 
    } 
    xmlhttp.send(querypart); 
} 

function onSuccessQueryMy(text,str) { // 結果(JSON文字列)を配列に格納 
	var jsonObj = JSON.parse(text); 
	var head , rows ; 
	if (jsonObj.responseJSON) { 
		head = jsonObj.responseJSON.head.vars; 
		rows = jsonObj.responseJSON.results.bindings; 
	} else { 
		if(!(jsonObj.head)){ 
			resultStr += "<span class='shiri'>Shiri</span>：システムのエラーみたい。ごめんね。<br>";
			document.getElementById("results").innerHTML = resultStr; 
			scroll();
			return; 
		} 
		head = jsonObj.head.vars; 
		rows = jsonObj.results.bindings; 
	} 
	if (rows.length === 0) { 
		startFlag = 1; 
		resultStr += "<span class='shiri'>Shiri</span>：<b>" + kanaToHira(str) + "</b>って法人はないみたい。Shiriの勝ちぃ！<br>";
		document.getElementById("results").innerHTML = resultStr;
		scroll();
		endMassage();
		return ;
	} 
	makeWordMy(head,rows,str); 
}

function makeWordMy(head,rows,str) { // 配列をテーブルにして出力 

	rirekiWords.push(str); //履歴に追加
	//document.getElementById("results2").innerHTML = JSON.stringify(rirekiWords,undefined,1); 

	startFlag = 1;
	resultStr += "<span class='shiri'>Shiri</span>：" + rows[0].pref.value + rows[0].city.value + "に<b><a href='https://hojin-info.go.jp/hojin/ichiran?hojinBango=" + rows[0].s.value.slice(-13) + "' target='_blank'>" + rows[0].corporateName.value + "</a></b>ってのがあるね。法人番号は " + rows[0].s.value.slice(-13) + "<br>" ;
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
		resultStr += "<span class='shiri'>Shiri</span>：わたしの番。<b>" + hitomoji + "</b>のつく法人だね。考えるしちょっと待って…<br>" ;
		startFlag = 3; //考え中は３
		document.getElementById("results").innerHTML = resultStr; 
		scroll();
		getAIword(hitomoji); //最初の一文字を引数にする。
	}, "1000");
}

//AIの最初の一文字をランダムに選ぶ関数
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
//テキストボックスでエンターキーを押したときの処理
function enter(){
	if( window.event.keyCode == 13 ){
		getMyWord();
	}
}

