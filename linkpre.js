var divs = document.querySelectorAll('.preview')


            divs.forEach(function(div) {

                if (div.children.length >0){
                     url = $(div).find("a").attr("href");

                     if(!url){
                        string = div.children[0].innerHTML;
                        url = string.match(/\bhttps?:\/\/\S+/gi);
                                             }
                 }

                 else{

                 string = div.innerHTML
                  url = string.match(/\bhttps?:\/\/\S+/gi);


                 }

                 url = String(url)

                 if (!url.startsWith("http")){
                    url = "http://" + url
                 }

                 let div1 = document.createElement('div');
                 div.style.paddingBottom= "40px";

                 div1.innerHTML = "<img src='https://atiya-rabbi.github.io/loading.gif' style='width:100%;height:100%;'>"
                 div.appendChild(div1);


            	var ur="https://infinite-retreat-77775.herokuapp.com/?url=" + url;

            	$.ajax({
            	    url:ur,
            	method:"GET",
                success: function(response){
                div1.innerHTML = response;
                    }
            	})

        	});