//Ejercicio 2

//{
//	"id": "0001",
//	"type": "donut",
//	"name": "Cake",
//	"ppu": 0.55,
//	"batters":
//		{
//			"batter":
//				[
//					{ "id": "1001", "type": "Regular" },
//					{ "id": "1002", "type": "Chocolate" },
//					{ "id": "1003", "type": "Blueberry" },
//					{ "id": "1004", "type": "Devil's Food" }
//				]
//		},
//	"topping":
//		[
//			{ "id": "5001", "type": "None" },
//			{ "id": "5002", "type": "Glazed" },
//			{ "id": "5005", "type": "Sugar" },
//			{ "id": "5007", "type": "Powdered Sugar" },
//			{ "id": "5006", "type": "Chocolate with Sprinkles" },
//			{ "id": "5003", "type": "Chocolate" },
//			{ "id": "5004", "type": "Maple" }
//		]
//}
//Campos de la clase
let objeto = Object()

objeto.id="0001"
objeto.type="donut"
objeto.name="Cake"
objeto.ppu= 0.55
objeto.batterns={
    "batter":[]
}
{
objeto.batterns.batter[0]={"id": "1001", "type": "Regular"}
objeto.batterns.batter[1]={"id": "5002", "type": "Glazed"}
objeto.batterns.batter[2]={"id": "1003", "type": "Blueberry"}
objeto.batterns.batter[3]={"id": "1004", "type": "Devil's Food"}
}
{
objeto.topping =[]
objeto.topping[0]={"id": "5001", "type": "None"}
objeto.topping[1]={"id": "5002", "type": "Glazed" }
objeto.topping[2]={"id": "5005", "type": "Sugar" }
objeto.topping[3]={"id": "5007", "type": "Powdered Sugar"}   
objeto.topping[4]={"id": "5006", "type": "Chocolate with Sprinkles" } 
objeto.topping[5]={"id": "5003", "type": "Chocolate" }
objeto.topping[6]={"id": "5004", "type": "Maple" }
}
console.log(JSON.stringify(objeto))