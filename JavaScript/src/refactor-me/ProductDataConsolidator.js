function ProductDataConsolidator() { }

ProductDataConsolidator.get = function (a) {
	var l = new LawnmowerRepository().getAll();
	var p = new PhoneCaseRepository().getAll();
	var t = new TShirtRepository().getAll();
	var products = [];
	var data = [l,p,t]
	{data.map((x,index) => { x.map(val => products.push({id:val.id,name:val.name,price:(val.price * a).toFixed(2),type: index===0?"Lawnmower":index ===1 ?"Phone Case":"T-Shirt" }))})}
	return products;
}
