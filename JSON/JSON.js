console.clear();
var data = `
{
  "items": [
    {
      "reasons": [
        {
          "id": "4791",
          "date": "2016-03-16",
          "reason": {
            "id": "017",
            "title": "Подрядчик не уложился в срок",
            "description": "[Описание инциндента]"
          }
        },
        {
          "id": "4696",
          "date": "2016-01-18",
          "reason": {
            "id": "008",
            "title": "Заказчик не оплатил очередной этап работ",
            "description": "[Описание инциндента]"
          }
        }
      ],
      "person": {
        "id": "192",
        "name": "Иванов Иван Иванович",
        "link": "/persons/192/",
        "photo": "/persons/192/photo.jpg"
      }
    },
    {
      "reasons": [
        {
          "id": "4785",
          "date": "2016-03-24",
          "reason": {
            "id": "005",
            "title": "Задержка сроков поставки",
            "description": "[Описание инциндента]"
          }
        }
      ],
      "person": {
        "id": "168",
        "name": "Петров Виктор Алексеевич",
        "link": "/persons/168/",
        "photo": "/persons/168/photo.jpg"
      }
    }
  ]
}`;
data = JSON.parse(data);
for( i in data.items ) {
	console.log(data.items[i].person);
	for( j in data.items[i].reasons ) {
		console.log(data.items[i].reasons[j]);
	}
	console.log('======================================');
}
