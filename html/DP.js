document.writeln("<!--");
document.writeln("**********************************************");
document.writeln("                 作者：宏仔");
document.writeln("                 QQ：810331109");
document.writeln("**********************************************");
document.writeln("-->");
document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("  <head>");
document.writeln("    <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/>");
document.writeln("    <meta name=\"referrer\" content=\"<?php echo $metareferer;?>\" />");
document.writeln("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=11\" />");
document.writeln("    <meta content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\" id=\"viewport\" name=\"viewport\">");
document.writeln("    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/DPlayer.min.css\">");
document.writeln("    <?php");
document.writeln("    if (!strpos($type, \'.flv\')){");
document.writeln("    if ($p2p == \"1\") {");
document.writeln("        echo (\'<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/hls.min.js\"></script>\');");
document.writeln("    }else {");
document.writeln("        echo (\'<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/hls.p2p.js\"></script>\');");
document.writeln("    }");
document.writeln("    }else {");
document.writeln("        echo (\'<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/flv.min.js.js\"></script>\');");
document.writeln("    }");
document.writeln("    ?>");
document.writeln("    <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/DPlayer.min.js\"></script>");
document.writeln("    <script src=\"https://cdn.jsdelivr.net/gh/810331109/JsDelivr_CDN@CDNN/static/jquery.min.js\"></script>");
document.writeln("    <style type=\"text/css\">html,body{height:100%;margin:0;padding:0;overflow:hidden;text-align:center;background:#181818} *{margin:0;border:0;padding:0;text-decoration:none} #video{height:100%} .dplayer-logo{max-width:150px;max-height:50px;left:auto;right:5%;top:5%}</style>");
document.writeln("    <script type=\"text/javascript\">$(\"#my-loading\", parent.document).remove();</script>");
document.writeln("  </head>");
document.writeln("<body>");
document.writeln("<div id=\"video\"></div>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("var urls = \"<?php echo $url;?>\";");
document.writeln("var next = \"<?php echo $next;?>\";");
document.writeln("var url = \"<?php echo $type;?>\";");
document.writeln("var dp = new DPlayer({");
document.writeln("    container: document.getElementById(\'video\'),");
document.writeln("    theme: \'#f44336\', ");
document.writeln("    volume: 0.8,");
document.writeln("    <?php");
document.writeln("    echo \'logo:\"\'.$logo.\'\",\';");
document.writeln("	echo \'autoplay: true,\';?>");
document.writeln("    video: {");
document.writeln("	    url: url,<?php echo \'pic: \"\'.$load_pic.\'\",\';?>type: \'auto\',");
document.writeln("		defaultQuality: 0");
document.writeln("	}");
document.writeln("    ,contextmenu: [{<?php echo \'text: \"\'.$right_wenzi.\'\",link: \"\'.$right_link.\'\"\';?>}]});");
document.writeln("dp.on(\"fullscreen\",function() {");
document.writeln("    dp.notice(\"全屏已开启\");");
document.writeln("});");
document.writeln("dp.on(\"fullscreen_cancel\",function() {");
document.writeln("    dp.notice(\"全屏已关闭\");");
document.writeln("});");
document.writeln("</script>");
document.writeln("");
document.writeln("<script type=\"text/javascript\">");
document.writeln("        var cookie = {");
document.writeln("          \'set\': function(name, value, days) {");
document.writeln("            var exp = new Date();");
document.writeln("            exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);");
document.writeln("            var arr = document.cookie.match(new RegExp(\'(^| )\' + name + \'=([^;]*)(;|$)\'));");
document.writeln("            document.cookie = name + \'=\' + escape(value) + \';path=/;expires=\' + exp.toUTCString();");
document.writeln("          },");
document.writeln("          \'get\': function(name) {");
document.writeln("            var arr = document.cookie.match(new RegExp(\'(^| )\' + name + \'=([^;]*)(;|$)\'));");
document.writeln("            if (arr != null) return unescape(arr[2]);");
document.writeln("          },");
document.writeln("          \'put\': function(urls) {");
document.writeln("            var cookie = urls.replace(/[^a-z]+/ig, \'\');");
document.writeln("            var cookie = cookie.substring(cookie.length - 32);");
document.writeln("            return cookie;");
document.writeln("          }");
document.writeln("        }");
document.writeln("        dp.on(\'loadeddata\',function() {");
document.writeln("          cookie.get(urls) ? dp.seek(cookie.get(urls)) : dp.notice(\"视频已就绪\");");
document.writeln("          dp.on(\'timeupdate\',function() {");
document.writeln("            if (cookie) cookie.set(urls, dp.video.currentTime, 30);");
document.writeln("          });");
document.writeln("        });");
document.writeln("        dp.on(\'ended\',function() {");
document.writeln("          dp.notice(\"视频播放已结束\");");
document.writeln("          if (next != \'\') {");
document.writeln("            top.location.href = next;");
document.writeln("          }        });");
document.writeln("</script>");
document.writeln("</body>");
document.writeln("</html>");
document.writeln("");
document.writeln("<script>");
document.writeln("document.write(unescape(\'%3Cscript%20type%3D%22text/javascript%22%3E%0Avar%20ConsoleManager%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20onOpen%3Afunction%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22Console%20is%20opened%22%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20onClose%3Afunction%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22Console%20is%20closed%22%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20init%3Afunction%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20self%20%3D%20this%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20x%20%3D%20document.createElement%28%27div%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20isOpening%20%3D%20false%2CisOpened%3Dfalse%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty%28x%2C%20%27id%27%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20get%3Afunction%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%28%21isOpening%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self.onOpen%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isOpening%3Dtrue%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isOpened%3Dtrue%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setInterval%28function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isOpened%3Dfalse%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.info%28x%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.clear%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%28%21isOpened%20%26%26%20isOpening%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self.onClose%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isOpening%3Dfalse%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20ConsoleManager.onOpen%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20try%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.open%28%27about%3Ablank%27%2Ctarget%3D%27_self%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Dcatch%28err%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20a%20%3D%20document.createElement%28%22button%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.onclick%3Dfunction%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20window.open%28%27about%3Ablank%27%2Ctarget%3D%27_self%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a.click%28%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20ConsoleManager.onClose%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22Console%20is%20closed%21%21%21%21%21%22%29%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20ConsoleManager.init%28%29%3B%0A%3C/script%3E%0A%20%20%20%20%0A%0A%3Cscript%20type%3D%22text/javascript%22%3E%0A%20%20%20%20%20%20%20%20window.onload%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//屏蔽键盘事件%0A%20%20%20%20%20%20%20%20%20%20%20%20document.onkeydown%20%3D%20function%20%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20e%20%3D%20window.event%20%7C%7C%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//F12%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%28e.keyCode%20%3D%3D%20123%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//Ctrl+Shift+I%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Delse%20if%28%28e.ctrlKey%29%20%26%26%20%28e.shiftKey%29%20%26%26%20%28e.keyCode%20%3D%3D%2074%29%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//Ctrl+Shift+I%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Delse%20if%28%28e.ctrlKey%29%20%26%26%20%28e.shiftKey%29%20%26%26%20%28e.keyCode%20%3D%3D%2073%29%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//Shift+F10%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Delse%20if%28%28e.shiftKey%29%20%26%26%20%28e.keyCode%20%3D%3D%20121%29%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//Ctrl+U%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Delse%20if%28%28e.ctrlKey%29%20%26%26%20%28e.keyCode%20%3D%3D%2085%29%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%22你知道得太多啦！%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20//屏蔽鼠标右键%0A%20%20%20%20%20%20%20%20%20%20%20%20document.oncontextmenu%20%3D%20function%20%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%3C/script%3E\'));");
document.writeln("</script>");
document.writeln("<span style=\"display:none\"><script type=\"text/javascript\" src=\"https://js.users.51.la/19412941.js\"></script></span>");