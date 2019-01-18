

            var divs = document.querySelectorAll('.preview')


            divs.forEach(function(div) {

                if ($(div).has("a")){
                     url = $(div).find("a").attr("href");
                    //  console.log(url)
                 }

                 else{
                 string = div.innerHTML
                  url = string.match(/\bhttps?:\/\/\S+/gi);
                //   console.log(url)

                 }
                 div.innerHTML = "<img src='https://atiya-rabbi.github.io/loading.gif' style='width:100%;height:100%;'>"

            	var ur="https://infinite-retreat-77775.herokuapp.com/?url=" + url;
            	$.ajax({
            	    url:ur,
            	method:"GET",
                success: function(response){
                div.innerHTML = response;
                    }
            	})

        	});
