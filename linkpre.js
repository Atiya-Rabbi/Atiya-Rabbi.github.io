// <p id="length1">{{ length1 }}</p>
//   {% for url in article1 %}
//   <div class="preview" id="pre1">
//          <a href="{{ url }}" target="_blank"></a>
//          <img id="gif" src="static/loading.gif">
//   </div>

    	      //var divlength1 = document.getElementById("length1").innerHTML
            var divs = document.querySelectorAll('.preview')
           

            divs.forEach(function(div) {

                 url = $(div).find("a").attr("href")
                 div.innerHTML = "<img src='static/loading.gif' style='width:100%;height:100%;'>"

            	var ur="https://infinite-retreat-77775.herokuapp.com/?url=" + url;
            	$.ajax({
            	    url:ur,
            	method:"GET",
                success: function(response){
                div.innerHTML = response;
                    }
            	})

        	});
