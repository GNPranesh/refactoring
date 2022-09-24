function ProductDataRenderer() { }

ProductDataRenderer.prototype.render = function () {
	var data = [{id:"nzdProducts",code:"(NZD)",price:1},{id:"usdProducts",code:"(USD)",price:0.76},	{id:"euProducts",code:"(euro)",price:0.67}]
	data.map((val=>{
		var a = loaddata(val.price,val.code) 
		document.getElementById(val.id).innerHTML = a
	}))
 }
function loaddata(price,code) {
	var data = '<table class="table table-striped">'
	+'	<thead>'
	+'		<tr><td colspan="3">Products'
	+'  ' + code
	+'</td></tr>'
	+'		<tr>'
	+'			<td>Name</td>'
	+'			<td>Price</td>'
	+'			<td>Type</td>'
	+'		</tr>'
	+'	</thead>'
	+ '	<tbody>';
	
var n = ProductDataConsolidator.get(price);
for (var i = 0; i < n.length; i++) {
	data +='<tr>'
	+		'<td>' + n[i].name +'</td>'
	+		'<td>' + n[i].price + '</td>'
	+		'<td>' + n[i].type + '</td>'
	+	'</tr>';
}
data += '</tbody></table>';
return data;
}