# Notes App

## **Feature**

1. Web Server dapat menyimpan catatan

- [POST] : /notes
- Format

```javascript
{
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},
```

```json
{
 id: "notes-V1StGXR8_Z5jdHi6B-myT",
 title: "Sejarah JavaScript",
 createdAt: "2020-12-23T23:00:09.686Z",
 updatedAt: "2020-12-23T23:00:09.686Z",
 tags: ["NodeJS", "JavaScript"],
 body: "JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.",
},
```

- Request Body

```json
{
  "title": "Judul Catatan",
  "tags": ["Tag 1", "Tag 2"],
  "body": "Konten catatan"
}
```

- Response
  - Success (201) -> created
  ```json
  {
    "status": "success",
    "message": "Catatan berhasil ditambahkan",
    "data": {
      "noteId": "V09YExygSUYogwWJ"
    }
  }
  ```
  - Error (500)
  ```json
  {
    "status": "error",
    "message": "Catatan gagal untuk ditambahkan"
  }
  ```

2. Web Server dapat menampilkan catatan

- [GET] : /notes
- Response

  - Success (200) -> ok

  ```json
  {
    "status": "success",
    "data": {
      "notes": []
    }
  }
  ```

  ```json
  {
    "status": "success",
    "data": {
      "notes": [
        {
          "id": "notes-V1StGXR8_Z5jdHi6B-myT",
          "title": "Catatan 1",
          "createdAt": "2020-12-23T23:00:09.686Z",
          "updatedAt": "2020-12-23T23:00:09.686Z",
          "tags": ["Tag 1", "Tag 2"],
          "body": "Isi dari catatan 1"
        },
        {
          "id": "notes-V1StGXR8_98apmLk3mm1",
          "title": "Catatan 2",
          "createdAt": "2020-12-23T23:00:09.686Z",
          "updatedAt": "2020-12-23T23:00:09.686Z",
          "tags": ["Tag 1", "Tag 2"],
          "body": "Isi dari catatan 2"
        }
      ]
    }
  }
  ```

  -
