var arrayBookMarkRecord=[];
$(function(){
	/*翻書初始化*/
	init();
	//書籤初始化
	initBookMark();
	//捲軸事件
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if(y >= 10){
			$(".logo img").show();
		}
		else {
			$(".logo img").hide();
		}
	});

	//卷軸置頂動畫
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});

	//加入書籤的動作
	$(document).on("click", ".bookmark", function(){
		let id=$(this).attr("data-id");
		let page=$(this).parent("div").next("div").find(".fb5-num").text();
		let title=$(this).prev("h1").text();
		toAddBookMarkRecord(id, title, page);
		initBookMark();
	});

	//刪除書籤
	$(document).on("click", ".delete", function(){
		toDeleteMarkRecord($(this).attr("data-title"), $(this).attr("data-page"));
		initBookMark();
	});

	//選擇書籤
	$(document).on("click", ".bookMarkRecord", function(){
		setPage($(this).attr("data-page"));
	});
});

function init(){
	renderBook($.UrlParam("id"), 1);
	$(".logo img").hide();
	$("#loading").hide();
	if($("#wrapper").width()<$("#wrapper").height()){
		$("#bannerVideo").attr("poster", "images/banner2.jpg");
	}

	/*CONFIGURATION FLIPBOOK*/
	jQuery('#fb5').data('config',
    {
		"page_width":"550",
		"page_height":"715",
		"email_form":"office@somedomain.com",
		"zoom_double_click":"1",
		"zoom_step":"0.06",
		"double_click_enabled":"true",
		"tooltip_visible":"true",
		"toolbar_visible":"true",
		"gotopage_width":"30",
		"deeplinking_enabled":"true",
		"rtl":"false",
		'full_area':'false',
		'lazy_loading_thumbs':'false',
		'lazy_loading_pages':'false'
    })
}

function isMobile() {
	try{ 
		document.createEvent("TouchEvent"); return true; 
	}
	catch(e){ 
		return false;
	}
}

function initBookStore(id){
	/*建構書局*/
	var bookStore=[];
	var book1={
		id: 1,
		title: "正負之間",
		article: [
			{
				content: "<p>我們練太極拳的人，在陰陽並濟的拳路上前進，一輩子就在陰陽之間摸索、在正負之間掙扎，終究接近臨界點“零”的空、虛、無之圓融妙境。</p><p>就我本身而言，開始時不太在意，以為陰陽就是一種理論。黑白、晝夜、上下、盈虧等，凡是有對立性的事或物，掛以陰陽之名，無一不可，因為“想當然爾”，所以自以為明白陰陽道理，也就不經意的將“陰陽道理”拋諸腦後。</p><p>後來練拳經年，慢慢發覺，陰陽之理，不止於我當初所認知的膚淺、表層的領域而已，這並不是說陰陽道理是錯的，而是當初我自以為知道的陰陽，在日後看來，它是空洞不實的，我並沒有在行拳走架中去實踐。這也就意味著，我只是掛羊頭賣狗肉，打著練太極拳的名號，卻沒真正落實太極陰陽大道。</p><p>就因為知道必須在肢體動作中落實陰陽之道，所以我堅信一定要勤練，唯有勤練才能在拳藝上有所精進。也就是因為勤練，才漸漸把實際肢體的運作練出陰陽道理來，就是在行拳</p>",
				page: 1
			},
			{
				content: "<p>走架，一手、一足，都不悖陰陽之理，換另外一個角度來說就是把每一吋肌膚都練出陰陽至理來。</p><p>但是“知易行難”，這一階段的磨練需要很長的時間，一般人往往都在這一段時間內，見異思遷而亂了陣腳。依  恩師《陳氏太極拳五層功夫》一文中，在第二層後半段到第三第四層，都是屬於這一階段精雕細琢期間，大約要七年〈若沒依照文中要求，每日練拳十至十五趟，那鐵定要延長許久〉。像我就是沒有依教奉行，所以練拳已經二十幾年，自知只實踐了一小部分的陰陽道理，尚覺大部份未能落實。我自己常常覺得資質魯鈍，連一點點小小的勁道，都要琢磨兩三年才稍有領悟。所以在師兄弟討論練拳心得時，我是聽得多，發表得少，我總覺得師兄弟的境界都很高，我是不易辦到的，甚至連我自己的學生與人言談之間那種“震退對手數丈”的功力，我真是又驚訝又讚嘆，自覺不如啊！</p>",
				page: 2
			},
			{
				content: "<p>熬過十幾年，對於肢體陰陽漸漸熟知，內在“覺受”逐漸鮮明，更能進一步體驗“多練練”的重要性，多說無用，常常虛心自省，不順遂處先於腰腿求之；腰腿求之不得，再於內氣求之；內氣求之不得，再於“內外合度”上推求，哪裡多了？哪裡少了？是否能行之“中道”？真的再不行，最後只有請出  恩師《錄影帶》，反覆的在自覺不得勁處多看幾遍，或許能看出端倪。經一段時間的“默識揣摩”，自能明白其中道理，也漸漸體悟為什麼在拳路上  恩師是那樣打的，自己過去自以為高明之處，原來是自己未達那種火侯，所以做不到，更別說要領會出其中奧秘。凡此種種只能用一句“如人飲水，冷暖自知”形容。</p><p>“立身中正、呼吸自然、用力勿過”是  先師告誡諸弟子練拳之三大原則，終身奉行，絕無弊病。而事實上我也認為，這也是拳藝的高超境界，因為這些都符合“中道”之原則，也就是正負之間的臨界點。我們在拳藝未精之前，舉手投足之間非正〈過〉及負〈不及〉，所以練拳之時，仍免不了歪斜、凹凸，或是偏重於局部的表現，而忽略了整體的協調；推手時也免不了頂、扁、丟、抗；但我堅信只要恪守恩師的教</p>",
				page: 3
			},
			{
				content: "<p>誨，把握每一天，老實練拳，往正負之間的臨界點邁進，終必有成，若是為求速效而夾雜貪多，背離了正道，反而浪費時間，所謂：「差之毫釐，失之千里」，你我可不慎乎？</p><p>“最後我要套用幾句話與大家共勉，並期指正：<br/>“意”太輕不行、太重不行，總在有意無意、輕重之間。<br/>“氣”太浮不行、太沉不行，總在有氣無氣，浮沉之間。<br/>“形”太剛不行、太柔不行，總在有形無形，輕柔之間。</p>",
				page: 4
			}
		]
	}

	var book2={
		id: 2,
		title: "漫漫太極路",
		article: [
			{
				content: "<p>太極拳高深莫測，不是那麼輕易的就可得其精要，不過如能堅定信念、練法得當、一門深入、長時修練，人人都能開花結果。在此提出一些經驗歷程，期使後進早日脫離苦海、心得其樂。</p><p>我謹遵　先師之理念及教誨，〝練之於自然、得之於自然〞，在不經意之間，自然走過了一些旅程。</p><p>其一，腰動：</p><p>我們從第一天跟在老師身後學習每一個動作開始，到感覺腰會動了，應該不須要太長的時間，這時可稱之為〝初動〞，此時腰動若有若無、時動時不動，尚不穩定，未趨成熟、未臻常態，此處說的腰動，以趨於穩定成熟為準，用功勤練者約需三至五年，不用功者需時更久，自不待言。</p><p>我們剛學完一套拳，仍有諸多不順暢、不協調的地方，必經數年的努力，慢慢進步、稍成氣候，逐具腰會動，且漸具〝主宰〞上身運行的功能，此時我們的肌肉不再那麼緊張、</p>",
				page: 1
			},
			{
				content: "<p>僵硬，操演套路不再那麼用力、笨拙，初步體驗了一點鬆跟柔，我們也開始不再那麼苦悶，開始有點樂趣。</p><p>此刻我們從演練者可看出〝手柔〞及〝腰活〞，乃至人體中心（丹田）雛型的建立，至此我們對太極拳的內涵可謂〝有感〞。</p><p>其二，生根：</p><p>在前段腰動的狀態中，努力個三五年，上身的濁力慢慢減少，心氣逐年下降，有一天我們將感受到，腳底變重變沉了，打起拳來穩重紮實，漸得〝腳踏實地〞的安定及喜悅。這種腳踏實絕非用力，而是鬆沉的厚重，這種喜悅不是外來的，而是由內而起的，此時我們因踏實而得到初步的〝心定〞。</p>",
				page: 2
			},
			{
				content: "<p>達此階段，我們已過了〝鬆腰、落胯〞的關卡，這也代表著我們已作到了〝空胸、鬆腹、氣沉丹田〞此時我們也感受到丹田下方的閘門洞開，分成兩股，從大腿的內側下達足底，一段時日，我們會有腳底發熱的情形，再過一些日子，才又恢復常態，這些現象都是我們練拳累積到相當的功力時，能實際自然產生而感受到的，它與〝以意導氣〞不同，它是在非意識作用下，水到渠成的產物。</p><p>此刻，從練者的肢體表現中，看出其腳掌不會像船一般翻來覆去，膝蓋也不會左右晃動，身軀也不會搖擺不定，整個身型看起來更加穩定，可謂已俱〝動中有定〞的內涵。我們與人搭起手來，下盤更穩、手更輕柔，也較不會〝手動〞，而是腰胯動，且動之有據（根），至此〝沾、黏、連、隨〞才開始起作用，圓圈也才開始成型，〝掤勁〞也變得沒那麼生硬不具彈性。</p>",
				page: 3
			},
			{
				content: "<p>其三，串起：</p><p>經過前述兩個階段，從大自然環境而言，我們已蒙受地心引力的感召，安心的將自身交給大地，從另一層面來講，我們已懂得捨棄自以為用勁的不當用力的那種執著，打開心門，開始接納、承受外來的一切，包括對手施與的外力，以及自身體重的壓力，（此處在前面提及的落胯相當重要，胯會落之後，拳架要不斷的演練使它變成〝活〞胯，而非〝死〞胯，胯活了才會啟動上、下溝通的機制。從上將體重經胯往下傳，從下將反作用力經胯往上傳，這在本段要講的串起，才起〝力學〞上的實質作用）。在此之前我們對此兩種力量都是以抗拒、對立的狀態去處理，雖然心裡面不斷的提醒自己，不要害怕、不可抵抗，但總是在狀況發生的當下忘得一乾二淨。</p>",
				page: 4
			},
			{
				content: "<p>在承受、捨棄一段時日之後，上身的雜質慢慢往下沉積，有朝一日，有個訊息到來，讓我們感受到有某種能量像溫度計的水銀柱在往上頂、向上衝，順著脊骨、背部往上達于頭頂，同時也旁及兩手未梢（手指），就這樣約莫又練過了一萬趟，方至成熟穩固。至此，我們才稱得上完成〝串起〞的階段性任務，此刻我們將真正體會到〝立身中正〞的義趣。</p><p>圓成第三階段，可也練到了所謂〝節節貫串、一氣貫通、上下相隨〞的實質境界，因為你已從上而下，又從下而上的來回走了一圈，內在更為暢通，上下肢體更加協調，從走架過程可以看得出定（生根）中有動（串起）的跡象，而且可從〝直立式抖桿〞中明確測驗出貫串彈抖的成熟度。</p>",
				page: 5
			},
			{
				content: "<p>此時我們已達到了〝懂勁〞的階層，在太極〝圓〞的層面，我們已練就了〝中圈〞的火候，在不知不覺中，我們已會〝發勁〞，而且是一種具有彈性特質的好勁。這是一個重要的里程碑，一個真正的〝武者〞，應立志往此一目標邁進，不可輕言放棄、改變初衷，才不致到老〝空留遺恨〞。</p><p>完成了第三階段，我們於拳架大致上已練過了三萬趟，於太極拳的修業已達六十分，已可領到畢業證書，因為我們已到所謂〝成手（小成）〞，〝懂勁〞的境地。我們懂得自己的缺點，懂得朝什麼方向走，才能不斷的修正自己的拳勢，懂得陰陽、剛柔、虛實、懂得掤履擠按踩挒肘靠懂得什麼是內勁、什麼是外勁，也懂得用勁，懂得纒絲…….，不只是腦懂，而且是身懂，並在實際與人接手時的靈活運用有相當的水平。</p>",
				page: 6
			},
			{
				content: "<p>其四，內斂：</p><p>至此若各種條件許可的話，當再繼續練下去。</p><p>在前段串起的過程中，對於脊背已稍留痕跡，略有印象，當我們拳架持續練下來時，我們身體的另一個縱向的中心，將逐漸成型，這景象有些類似龍捲風有個無形的中心，它是由周邊的氣流、溫差，不斷運作旋轉而成。這正是我們陳氏太極拳的纒絲勁形成的方式。它是不斷的經由肢體鍛鍊、螺旋、纒轉，長期累積的成果。</p><p>此時練拳者，無意間在從事一種精密加工的程序，不斷的精練、不停的壓密（此時我們二套砲捶要多練，因為套路中不斷的翻轉身軀，有助於催化中軸的成型，並強化其質量）。</p>",
				page: 7
			},
			{
				content: "<p>一段時日後，所謂的〝太極圈〞逐潮縮小，慢慢半徑變小，形成所謂的小圈，於此修練者會明顯感覺到週遭外圍，有向內凝聚的現象產生（包括左右兩手的質與能自然的或輕輕的以輕一點點意念，即可歛入脊骨）於此狀態再練一些時日，我們將感受到那條〝中軸〞，日益茁壯，質能不斷的提升，甚而覺得它會發光、發亮，不但覺得它會往外〝透出〞，而且還可以向內〝收攝〞，直到有一天當我們與人搭手時，隱約可以〝吸人〞的情形發生，而且越來越明顯時，就不再懷疑自己的錯覺，而心知肚明那種奇妙能力的存在。</p><p>這時我們又練到了〝內外相合〞的境界，因為我們練出了一個難以形容的〝軸心〞，這個中心具有能力，可進、可出、可吸、可吐，於實際運用之上，對於勁的收放拿揑方能掌控得宜，用勁不再那麼輕率、粗糙，而能精準、細膩，且深沉而厚實。此時練者將〝不動於中、不形於外〞，達到　先師爺所訓勉〝內不動、外不發〞的境界，不但合自己的勁，也能合對方的勁，可主動的〝牽動〞對方，亦可被動的〝捨己從人〞。</p>",
				page: 8
			},
			{
				content: "<p可謂已〝陰陽合德〞，達太極之高級境界。此刻於太極之路已臻〝大成〞之地，已顯〝好手〞身段。已俱〝太極行家〞之氣度，我們的成績已有了八十分。可喜可賀。</p><p>已具〝好手〞身段還要練嗎？當然，練者已左右逢源、樂在其中、欲罷不能。</p><p>其五，昇華：</p><p>此階段在提鍊有形成無形，著重將〝力學〞（物質現象）轉入〝意學〞（精神現象），這開始有點難了，完成此一階段才顯〝妙手〞，但這些不太容易表達，表錯情或會錯意，反而害人，所以，就此擱筆。</p>",
				page: 9
			}
		]
	}
	bookStore.push(book1);
	bookStore.push(book2);

	/*篩選書*/
	var filterBook = bookStore.filter(function(item, index, array){
		return item.id == id;       // 取得相同書本ID
	});

	return filterBook;
}

function renderBook(id, type){
	if(typeof($.UrlParam("id"))!="undefined" && type=="1"){
		id=$.UrlParam("id");
	}
	var book = initBookStore(id);
	var render = "";
	/*先繪製封面*/
	render+="<div data-background-image=\"\" class=\"\">";
	render+="<div class=\"fb5-cont-page-book\">";
	render+="<div class=\"fb5-page-book\">";
	render+="<div id=\"fb5-cover\">";
	render+="<ul>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/1531362397426.jpg\"></a></li>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/masterImg.jpg\"></a></li>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/masterImg2.jpg\"></a></li>";
	render+="</ul>";
	render+="<img data-src=\"images/logo2.png\" id=\"fb5-logo-cover\" src=\"images/logo2.png\">";
	render+="</div>";
	render+="</div>";
	render+="<div class=\"fb5-meta\">";
	render+="<span class=\"fb5-description\"></span>";
	render+="<span class=\"fb5-num\"></span>";
	render+="</div>";
	render+="</div>";
	render+="</div>";
	/*繪製內容*/
	$.each(book, function(index, array){
		$.each(array.article, function(index2, array2){
			if(index2%2==0){
				render+="<div data-background-image=\"\" class=\"fb5-double fb5-first\">";
			}
			else{
				render+="<div data-background-image=\"\" class=\"fb5-double fb5-second\">";
			}
			render+="<div class=\"fb5-cont-page-book\">";
			render+="<div class=\"fb5-page-book\">";
			render+="<h1>"+array.title+"</h1><a class=\"bookmark\" href=\"javascript:void(0)\" style=\"margin-left:45%;\" data-id=\""+array.id+"\">(加入書籤)</a>";
			render+="<p>"+array2.content+"</p>";
			render+="</div>";    
			render+="<div class=\"fb5-meta\">";
			render+="<span class=\"fb5-num\">"+(index2+2)+"</span>";
			render+="<span class=\"fb5-description\"></span>";
			render+="</div>";
			render+="</div>";
			render+="</div>";
		});
	});
	/*繪製最末頁*/
	render+="<div data-background-image=\"\" class=\"\">";               
	render+="<div class=\"fb5-cont-page-book\">"
	render+="<div class=\"fb5-page-book\">";                                                   
	render+="</div>";                                                   
	render+="<div class=\"fb5-meta\">";
	render+="<span class=\"fb5-num\"></span>";
	render+="<span class=\"fb5-description\"></span>";
	render+="</div>";                                           
	render+="</div>";                        
	render+="</div>";
	$("#fb5-book").html(render);
}

function initBookMark(){
	if(localStorage.getItem("bookMark")!=null){
		arrayBookMarkRecord = JSON.parse(localStorage.getItem("bookMark"));
		var objBookMark = JSON.parse(localStorage.getItem("bookMark"));
		var filterBookMark = objBookMark.filter(function(item, index, array){
			return item.id == $.UrlParam("id");       // 取得相同書本ID的書籤
		});
		var table="";
		$.each(filterBookMark, function(index, array){
			table+="<tr>";
			table+="<td>"+array.title+"</td>";
			table+="<td>"+array.page+"</td>";
			table+="<td><a class=\"bookMarkRecord\" href=\"javascript:void(0)\" data-id=\""+array.id+"\" data-page=\""+array.page+"\">前往此頁</a>　｜　<a class=\"delete\" href=\"javascript:void(0)\" data-title=\""+array.title+"\" data-page=\""+array.page+"\">刪除書籤</a></td>";
			table+="</tr>";
		});
		$("#bookMark tr").next().remove();
		$("#bookMark tr").after(table);
	}
}

function toAddBookMarkRecord(id, title, page){
	var objBookMarkRecord={
		id: id,
		title: title,
		page: page
	};
	arrayBookMarkRecord.push(objBookMarkRecord);
	localStorage.setItem("bookMark", JSON.stringify(arrayBookMarkRecord));
}

function toDeleteMarkRecord(title, page){
	arrayBookMarkRecord = JSON.parse(localStorage.getItem("bookMark"));
	$.each(arrayBookMarkRecord, function(index, array){
		if(array.title == title && array.page == page){			
			
			arrayBookMarkRecord.splice(index, 1);
			//alert(JSON.stringify(arrayBookMarkRecord));
			return false;
		}
	});
	localStorage.setItem("bookMark", JSON.stringify(arrayBookMarkRecord));
}