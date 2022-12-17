# Internsathi assignment for Nodejs internship
### Deployed at: https://internsathi-node-book-directory.onrender.com/api/book
## End-point: Register new book
### Method: POST
>```
>/api/book
>```
### Body (**raw**)

```json
{
 "title":"Palpasa Café",
 "description":"Palpasa Cafe is a novel by Nepali author Narayan Wagle. It tells the story of an artist, Drishya, during the height of the Nepalese Civil War. The novel is partly a love story of Drishya and the first generation American Nepali, Palpasa, who has returned to the land of her parents after 9/11",
 "authors":["Narayan Wagle"],
 "publishYear": 2005
}
```

### Response: 200
```json
{
    "success": true,
    "data": [
        {
            "_id": "639de816c98ea8d97e4e9e15",
            "title": "Title of the book",
            "authors": [
                "Bishal N",
                "Nikesh K"
            ],
            "description": "This is the fucking description",
            "publishYear": 2020,
            "__v": 0
        },
        {
            "_id": "639de836c98ea8d97e4e9e17",
            "title": "Title of the book",
            "authors": [
                "Bishal N",
                "Nikesh K"
            ],
            "description": "This is the fucking description",
            "publishYear": 2020,
            "__v": 0
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## End-point: Get all books
### Method: GET
>```
>/api/book
>```

### Response: 200
```json
{
"success": true,
"data": [
{
"_id": "639df558b3fcf5d0d3f8da7a",
"title": "Shirishko Phool",
"authors": [
"Parijat"
],
"description": "Shirishko Phool, published in 1964, is a Nepali language novel by Parijat. It was the author's first and most successful novel. It was awarded the Madan Puraskar in 1965.",
"publishYear": 1964,
"__v": 0
},
{
"_id": "639df58db3fcf5d0d3f8da7c",
"title": "Karnali Blues",
"authors": [
"Buddhisagar"
],
"description": "Karnali Blues is book written by Buddhi Sagar and published by FinePrint publication, Nepal in 2010. Karnali Blues is a story about a young boy who travels through different phases of his life with his parents. The story's main focus is on the protagonist's father. The book is one of the best selling Nepalese novel.",
"publishYear": 2010,
"__v": 0
},
{
"_id": "639df5cdb3fcf5d0d3f8da7e",
"title": "Muna Madan",
"authors": [
"Laxmi Prasad Devkota"
],
"description": "Muna Madan is a 1936 Nepali-language episodic love poem written by Laxmi Prasad Devkota. It is about Madan, newly married to Muna, who leaves for Lhasa in Tibet to make his fortune, despite protests from his wife",
"publishYear": 1936,
"__v": 0
}
]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
