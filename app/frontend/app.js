fetch("http://localhost:3000")

.then(r=>r.json())

.then(data=>{

document.getElementById("status").innerHTML=

"<pre>"+JSON.stringify(data,null,2)+"</pre>"

})
