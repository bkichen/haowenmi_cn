$(function(){
	$(".nav>ul>li").bind({
		"mouseover" : function(){
			$(this).addClass("over");
			$(this).find("div").show();
		},
		"mouseout" : function(){
			$(this).removeClass("over");
			$(this).find("div").hide();
		}
	});
	$(".inxlbox>.bar>ul>li>a").mouseover(function(){
		var index = $(this).parent().index();
		$(this).parent().parent().find("a").removeClass("over").eq(index).addClass("over");
		$(this).parent().parent().parent().parent().find(".con").removeClass("over").eq(index).addClass("over");
	});
	$(".marque>.bar>ul>li>a").mouseover(function(){
		var index = $(this).parent().index();
		$(this).parent().parent().find("a").removeClass("over").eq(index).addClass("over");
		$(this).parent().parent().parent().parent().find(".con").removeClass("over").eq(index).addClass("over");
	});
	$(".conlist .but>a").click(function(){
		if( $(this).attr("status")!="0" ){
			$(this).addClass("close").attr("status",0).parent().parent().parent().find(".open").css("height","auto");
		}
		else{
			$(this).removeClass("close").attr("status",1).parent().parent().parent().find(".open").css("height","70px");
		}
	}); $('div.position').after('<div class=\"h10nb\"><\/div><div class="pub"><a onclick="openChat();return false;" href="javascript:void(0);"><img width="1000" height="90" src="https://www.baywatch.cn/images/baywatch100090.gif" border="0"></a></div>');

});


//设为首页
function SetHomePage(){
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage('http://www.baywatch.cn/');
    }
    else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', 'http://www.baywatch.cn/');
    }
}


//加入收藏夹
function AddFavorite() {
    var title = document.title;
    var url = location.href;
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else {
        return true;
    }
}


function openChat(){
	doyoo.util.openChat('g=10078088');
	return false;
}