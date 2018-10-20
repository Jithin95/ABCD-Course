###  Use InsertMany() for inserting documents into CampKerala

> query

```
db.CampKerala.insertMany([
    {
        "name_of_district": "Thrissur",
        "camp_name": "UPS Azhikode",
        "village_name": "Azheekode",
        "camp_in_charge": "Kishore",
        "total_inmates": 110.0
    },
    {
        "name_of_district": "Thrissur",
        "camp_name": "Labour School",
        "village_name": "Pullut",
        "camp_in_charge": "Syam",
        "total_inmates": 367.0
    },
    {
        "name_of_district": "Thrissur",
        "camp_name": "Vidhyartha Dayani",
        "village_name": "Methala",
        "camp_in_charge": "John",
        "total_inmates": 1550.0
    },
    {
        "name_of_district": "Thrissur",
        "camp_name": "Ambookkan LPS",
        "village_name": "Poyya",
        "camp_in_charge": "John",
        "total_inmates": 244.0
    },
    {
        "name_of_district": "Kollam",
        "camp_name": "Aryankavu LPS",
        "village_name": "Aryankavu",
        "camp_in_charge": "Manilal",
        "total_inmates": 20.0
    },
    {
        "name_of_district": "Kollam",
        "camp_name": "Nadukunnu LPS",
        "village_name": "Pathanapuram",
        "camp_in_charge": "Sreekuttan",
        "total_inmates": 103.0
    },
    {
        "name_of_district": "Wayanad",
        "camp_name": "GMUPS Anjukunnu",
        "village_name": "Anjukunnu",
        "camp_in_charge": "Babu",
        "total_inmates": 325.0
    },
    {
        "name_of_district": "Wayanad",
        "camp_name": "Koolivayal",
        "village_name": "Cherukattoor",
        "camp_in_charge": "Geetha",
        "total_inmates": 50.0
    },
    {
        "name_of_district": "Wayanad",
        "camp_name": "St.Patricks",
        "village_name": "Edavaka",
        "camp_in_charge": "Akshay",
        "total_inmates": 807.0
    },
    {
        "name_of_district": "Wayanad",
        "camp_name": "Marthoma HS Palery",
        "village_name": "Kanjirangad",
        "camp_in_charge": "Krishna",
        "total_inmates": 338.0
    },
    {
        "name_of_district": "Wayanad",
        "camp_name": "GKM School",
        "village_name": "Mananthavady",
        "camp_in_charge": "Lijin",
        "total_inmates": 330.0
    },
    {
        "name_of_district": "Kozhikode",
        "camp_name": "Chalapuram LPS",
        "village_name": "Velom",
        "camp_in_charge": "Sasidharan",
        "total_inmates": 480.0
    },
    {
        "name_of_district": "Kozhikode",
        "camp_name": "GHS PUTHUPPADY",
        "village_name": "Puthuppady",
        "camp_in_charge": "Salim",
        "total_inmates": 838.0
    },
    {
        "name_of_district": "Kozhikode",
        "camp_name": "GUPS KINALUR",
        "village_name": "Kinalur",
        "camp_in_charge": "Suresh",
        "total_inmates": 253.0
    },
    {
        "name_of_district": "Kozhikode",
        "camp_name": "Poovambai HS",
        "village_name": "Kinalur",
        "camp_in_charge": "Suresh",
        "total_inmates": 118.0
    },
    {
        "name_of_district": "Kozhikode",
        "camp_name": "Mundakkara AUPS",
        "village_name": "Kinalur",
        "camp_in_charge": "Suresh",
        "total_inmates": 97.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "St TP School Erattyar",
        "village_name": "Erattaar",
        "camp_in_charge": "Antony",
        "total_inmates": 330.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "ST Benedicts School",
        "village_name": "Udumbanchola",
        "camp_in_charge": "John Prince",
        "total_inmates": 117.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "Thigalkkadu",
        "village_name": "Udumbanchola",
        "camp_in_charge": "John Prince",
        "total_inmates": 85.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "Community Hall",
        "village_name": "Kalkoonthal",
        "camp_in_charge": "Sini",
        "total_inmates": 177.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "Pottankadu",
        "village_name": "Bison Vally",
        "camp_in_charge": "Jolly",
        "total_inmates": 85.0
    },
    {
        "name_of_district": "Idukki",
        "camp_name": "SNDP Auditorium",
        "village_name": "Parathodu",
        "camp_in_charge": "Ambilymol",
        "total_inmates": 84.0
    }
]);
```
> Output

```
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5bcb7ed7db5924a6db0d67af"),
		ObjectId("5bcb7ed7db5924a6db0d67b0"),
		ObjectId("5bcb7ed7db5924a6db0d67b1"),
		ObjectId("5bcb7ed7db5924a6db0d67b2"),
		ObjectId("5bcb7ed7db5924a6db0d67b3"),
		ObjectId("5bcb7ed7db5924a6db0d67b4"),
		ObjectId("5bcb7ed7db5924a6db0d67b5"),
		ObjectId("5bcb7ed7db5924a6db0d67b6"),
		ObjectId("5bcb7ed7db5924a6db0d67b7"),
		ObjectId("5bcb7ed7db5924a6db0d67b8"),
		ObjectId("5bcb7ed7db5924a6db0d67b9"),
		ObjectId("5bcb7ed7db5924a6db0d67ba"),
		ObjectId("5bcb7ed7db5924a6db0d67bb"),
		ObjectId("5bcb7ed7db5924a6db0d67bc"),
		ObjectId("5bcb7ed7db5924a6db0d67bd"),
		ObjectId("5bcb7ed7db5924a6db0d67be"),
		ObjectId("5bcb7ed7db5924a6db0d67bf"),
		ObjectId("5bcb7ed7db5924a6db0d67c0"),
		ObjectId("5bcb7ed7db5924a6db0d67c1"),
		ObjectId("5bcb7ed7db5924a6db0d67c2"),
		ObjectId("5bcb7ed7db5924a6db0d67c3"),
		ObjectId("5bcb7ed7db5924a6db0d67c4")
	]
}
```


### Query the documents using find(), findOne(), findOne().pretty() and observe the differences.

###### find() - returns all document that satisfies the specified queries

> query

```
db.getCollection('CampKerala').find({name_of_district: "Thrissur"})
```

> Output

```
{ "_id" : ObjectId("5bcb6da7db5924a6db0d6799"), "name_of_district" : "Thrissur", "camp_name" : "UPS Azhikode", "village_name" : "Azheekode", "camp_in_charge" : "Kishore", "total_inmates" : 110 }
{ "_id" : ObjectId("5bcb6da7db5924a6db0d679a"), "name_of_district" : "Thrissur", "camp_name" : "Labour School", "village_name" : "Pullut", "camp_in_charge" : "Syam", "total_inmates" : 367 }
{ "_id" : ObjectId("5bcb6da7db5924a6db0d679b"), "name_of_district" : "Thrissur", "camp_name" : "Vidhyartha Dayani", "village_name" : "Methala", "camp_in_charge" : "John", "total_inmates" : 1550 }
{ "_id" : ObjectId("5bcb6da7db5924a6db0d679c"), "name_of_district" : "Thrissur", "camp_name" : "Ambookkan LPS", "village_name" : "Poyya", "camp_in_charge" : "John", "total_inmates" : 244 }
```

###### findOne() - returns one document that satisfies the specified queries

> query

```
db.getCollection('CampKerala').findOne({name_of_district: "Thrissur"})
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
```

###### find().pretty() - display the result in an Easy to Read Format

> query

```
db.getCollection('CampKerala').find({name_of_district: "Thrissur"}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
```

### Find a document by its id

> query

```
db.getCollection('CampKerala').find(ObjectId( "5bcb6da7db5924a6db0d67ab")).pretty()
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ab"),
	"name_of_district" : "Idukki",
	"camp_name" : "Thigalkkadu",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 85
}
```


### Find a camp using Camp Name

> query

```
db.getCollection('CampKerala').find({camp_name: 'Ambookkan LPS'}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
```


### Find all the camps in Kollam district

> query

```
db.getCollection('CampKerala').find({name_of_district: 'Kollam'}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679d"),
	"name_of_district" : "Kollam",
	"camp_name" : "Aryankavu LPS",
	"village_name" : "Aryankavu",
	"camp_in_charge" : "Manilal",
	"total_inmates" : 20
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
```

### Find all the camps with Total Inmates more than 100

> query

```
db.getCollection('CampKerala').find({total_inmates : {$gt:100}}).pretty();
```

> Output

```

{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a4"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Chalapuram LPS",
	"village_name" : "Velom",
	"camp_in_charge" : "Sasidharan",
	"total_inmates" : 480
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a5"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GHS PUTHUPPADY",
	"village_name" : "Puthuppady",
	"camp_in_charge" : "Salim",
	"total_inmates" : 838
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a6"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GUPS KINALUR",
	"village_name" : "Kinalur",
	"camp_in_charge" : "Suresh",
	"total_inmates" : 253
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a7"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Poovambai HS",
	"village_name" : "Kinalur",
	"camp_in_charge" : "Suresh",
	"total_inmates" : 118
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ac"),
	"name_of_district" : "Idukki",
	"camp_name" : "Community Hall",
	"village_name" : "Kalkoonthal",
	"camp_in_charge" : "Sini",
	"total_inmates" : 177
}
```


### Find all the camps in Idukki with Total Inmates more than 100

> query

```
db.getCollection('CampKerala').find({$and : [{name_of_district: "Idukki"}, {total_inmates: {$gt:100}}]}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ac"),
	"name_of_district" : "Idukki",
	"camp_name" : "Community Hall",
	"village_name" : "Kalkoonthal",
	"camp_in_charge" : "Sini",
	"total_inmates" : 177
}
```


### Find all the camps which is either in Trissur or having more than 100 Total Inmates

> query

```
db.getCollection('CampKerala').find({$or :[{name_of_district: "Thrissur"}, {total_inmates:{$gt:100}}]}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a4"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Chalapuram LPS",
	"village_name" : "Velom",
	"camp_in_charge" : "Sasidharan",
	"total_inmates" : 480
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a5"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GHS PUTHUPPADY",
	"village_name" : "Puthuppady",
	"camp_in_charge" : "Salim",
	"total_inmates" : 838
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a6"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GUPS KINALUR",
	"village_name" : "Kinalur",
	"camp_in_charge" : "Suresh",
	"total_inmates" : 253
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a7"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Poovambai HS",
	"village_name" : "Kinalur",
	"camp_in_charge" : "Suresh",
	"total_inmates" : 118
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ac"),
	"name_of_district" : "Idukki",
	"camp_name" : "Community Hall",
	"village_name" : "Kalkoonthal",
	"camp_in_charge" : "Sini",
	"total_inmates" : 177
}
```

### Update the Total Inmates count of Aryankavu Village to 37

> query

```
db.getCollection('CampKerala').update({village_name:"Aryankavu"}, {$set:{total_inmates: 37}});
```

> Output

```
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })
```


### Delete ALL the document(s) with Camp in Charge name is Suresh

> query

```
db.getCollection('CampKerala').remove({camp_in_charge: "Suresh"});
```

> Output

```
WriteResult({ "nRemoved" : 3 })
```



### Delete ONLY ONE document with Camp in Charge is Manilal

> query

```
db.getCollection('CampKerala').remove({camp_in_charge: "Manilal"}, 1);
```
> Output

```
WriteResult({ "nRemoved" : 1 })
```



### Find and project ONLY the Camp Name of the camps where Sreekuttan is the Camp in Charge

> query

```
db.getCollection('CampKerala').find({camp_in_charge: 'Sreekuttan'}).forEach(function(doc) {print(doc.camp_name)});
```

> Output

```
Nadukunnu LPS
```


### Query ONLY the first 10 documents of CampKerala

> query

```
db.getCollection('CampKerala').find().limit(10).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a0"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Koolivayal",
	"village_name" : "Cherukattoor",
	"camp_in_charge" : "Geetha",
	"total_inmates" : 50
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
```


### Query the documents in CampKerala by sorting the Camp Name in ascending order

> query

```
db.getCollection('CampKerala').find().sort({camp_name: 1}).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a4"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Chalapuram LPS",
	"village_name" : "Velom",
	"camp_in_charge" : "Sasidharan",
	"total_inmates" : 480
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ac"),
	"name_of_district" : "Idukki",
	"camp_name" : "Community Hall",
	"village_name" : "Kalkoonthal",
	"camp_in_charge" : "Sini",
	"total_inmates" : 177
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a5"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GHS PUTHUPPADY",
	"village_name" : "Puthuppady",
	"camp_in_charge" : "Salim",
	"total_inmates" : 838
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a0"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Koolivayal",
	"village_name" : "Cherukattoor",
	"camp_in_charge" : "Geetha",
	"total_inmates" : 50
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ad"),
	"name_of_district" : "Idukki",
	"camp_name" : "Pottankadu",
	"village_name" : "Bison Vally",
	"camp_in_charge" : "Jolly",
	"total_inmates" : 85
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ae"),
	"name_of_district" : "Idukki",
	"camp_name" : "SNDP Auditorium",
	"village_name" : "Parathodu",
	"camp_in_charge" : "Ambilymol",
	"total_inmates" : 84
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ab"),
	"name_of_district" : "Idukki",
	"camp_name" : "Thigalkkadu",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 85
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
```

### Query the first 10 documents of CampKerala [Hint: Use limit()..]

> query

```
db.getCollection('CampKerala').find().limit(10).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d6799"),
	"name_of_district" : "Thrissur",
	"camp_name" : "UPS Azhikode",
	"village_name" : "Azheekode",
	"camp_in_charge" : "Kishore",
	"total_inmates" : 110
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679b"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Vidhyartha Dayani",
	"village_name" : "Methala",
	"camp_in_charge" : "John",
	"total_inmates" : 1550
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679c"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Ambookkan LPS",
	"village_name" : "Poyya",
	"camp_in_charge" : "John",
	"total_inmates" : 244
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a0"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Koolivayal",
	"village_name" : "Cherukattoor",
	"camp_in_charge" : "Geetha",
	"total_inmates" : 50
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
```

### Query 10 documents of CampKerala from 6 to 15 [Hint: Use limit() and skip()..]

> query

```
db.getCollection('CampKerala').find({}).limit(10).skip(5).pretty();
```

> Output

```
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a0"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Koolivayal",
	"village_name" : "Cherukattoor",
	"camp_in_charge" : "Geetha",
	"total_inmates" : 50
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a3"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GKM School",
	"village_name" : "Mananthavady",
	"camp_in_charge" : "Lijin",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a4"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "Chalapuram LPS",
	"village_name" : "Velom",
	"camp_in_charge" : "Sasidharan",
	"total_inmates" : 480
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a5"),
	"name_of_district" : "Kozhikode",
	"camp_name" : "GHS PUTHUPPADY",
	"village_name" : "Puthuppady",
	"camp_in_charge" : "Salim",
	"total_inmates" : 838
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ab"),
	"name_of_district" : "Idukki",
	"camp_name" : "Thigalkkadu",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 85
}
```

### Sort the above 10 documents (6 to 15) in ascending order of Camp Name

> query

```
db.getCollection('CampKerala').find({}).limit(10).skip(5).sort({camp_name: 1}).pretty();
```

> Output

```

{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679f"),
	"name_of_district" : "Wayanad",
	"camp_name" : "GMUPS Anjukunnu",
	"village_name" : "Anjukunnu",
	"camp_in_charge" : "Babu",
	"total_inmates" : 325
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a0"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Koolivayal",
	"village_name" : "Cherukattoor",
	"camp_in_charge" : "Geetha",
	"total_inmates" : 50
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679a"),
	"name_of_district" : "Thrissur",
	"camp_name" : "Labour School",
	"village_name" : "Pullut",
	"camp_in_charge" : "Syam",
	"total_inmates" : 367
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a2"),
	"name_of_district" : "Wayanad",
	"camp_name" : "Marthoma HS Palery",
	"village_name" : "Kanjirangad",
	"camp_in_charge" : "Krishna",
	"total_inmates" : 338
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d679e"),
	"name_of_district" : "Kollam",
	"camp_name" : "Nadukunnu LPS",
	"village_name" : "Pathanapuram",
	"camp_in_charge" : "Sreekuttan",
	"total_inmates" : 103
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ad"),
	"name_of_district" : "Idukki",
	"camp_name" : "Pottankadu",
	"village_name" : "Bison Vally",
	"camp_in_charge" : "Jolly",
	"total_inmates" : 85
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67ae"),
	"name_of_district" : "Idukki",
	"camp_name" : "SNDP Auditorium",
	"village_name" : "Parathodu",
	"camp_in_charge" : "Ambilymol",
	"total_inmates" : 84
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67aa"),
	"name_of_district" : "Idukki",
	"camp_name" : "ST Benedicts School",
	"village_name" : "Udumbanchola",
	"camp_in_charge" : "John Prince",
	"total_inmates" : 117
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a9"),
	"name_of_district" : "Idukki",
	"camp_name" : "St TP School Erattyar",
	"village_name" : "Erattaar",
	"camp_in_charge" : "Antony",
	"total_inmates" : 330
}
{
	"_id" : ObjectId("5bcb6da7db5924a6db0d67a1"),
	"name_of_district" : "Wayanad",
	"camp_name" : "St.Patricks",
	"village_name" : "Edavaka",
	"camp_in_charge" : "Akshay",
	"total_inmates" : 807
}
```
