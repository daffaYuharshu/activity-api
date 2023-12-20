# activity-api

Ini merupakan sebuah API yang menyediakan fungsi daily routine dalam aplikasi AIANG

## Create Activities
- **Metode** : POST
- **Headers** : Authorization Bearer Token
- **URL** : **/activities/**
- **Request Body** :
```json
{
    "day" : "STRING",
    "workcoll_start" : "TIME",
    "workcoll_end" : "TIME",
    "break_start": "TIME",
    "break_end": "TIME",
    "studyhome_start": "TIME",
    "studyhome_end": "TIME",
    "sleep_start": "TIME",
    "sleep_end": "TIME"
}
```
- Jika activity berhasil ditambahkan, server akan mengembalikan respons :
  - **Status Code** : 201
  - **Response Body** :
    ```json
    {
    "error": false,
    "message": "activities has been created",
    "data": {
        "id": "STRING",
        "user_id": "STRING",
        "day": "TIME"
      }
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
## Get Activities 
- **Metode** : GET
- **Headers** : Authorization Bearer Token
- **URL** : **/activities**
- **Response Body** :
  ```json
  {
    {
        "id": "STRING",
        "day": "STRING",
        "workcoll_start": "TIME",
        "workcoll_end": "TIME",
        "break_start": "TIME",
        "break_end": "TIME",
        "studyhome_start": "TIME",
        "studyhome_end": "TIME",
        "sleep_start": "TIME",
        "sleep_end": "TIME",
        "user_id": "STRING",
        "createdAt": "DATETIME",
        "updatedAt": "DATETIME"
    }
  }
  ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```

- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Update Activities Per ID
- **Metode** : PUT
- **Headers** : Authentication Bearer Token
- **URL** : **/activities/{id}
- **Request Body** :
```json
{
  {
    "day" : "STRING",
    "workcoll_start" : "TIME",
    "workcoll_end" : "TIME",
    "break_start": "TIME",
    "break_end": "TIME",
    "studyhome_start": "TIME",
    "studyhome_end": "TIME",
    "sleep_start": "TIME",
    "sleep_end": "TIME"
  }
}
```
- Jika activity berhasil di update, server akan mengembalikan respons :
  - **Status Code** : 200
  - **Response Body** :
    ```json
    {
      "error": false,
      "message": "success"
    }
    ```
- Jika id dari activity salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Activity not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Get Activities Per ID
- **Metode** : GET
- **Headers** : Authentication Bearer Token
- **URL** : **/activities/{id}**
- **Response Body** :
  ```json
  {
    "id": "STRING",
    "day": "STRING",
    "workcoll_start": "TIME",
    "workcoll_end": "TIME",
    "break_start": "TIME",
    "break_end": "TIME",
    "studyhome_start": "TIME",
    "studyhome_end": "TIME",
    "sleep_start": "TIME",
    "sleep_end": "TIME",
    "user_id": "TIME",
    "createdAt": "TIME",
    "updatedAt": "TIME"
  }
  ```
- Jika id dari activity salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Activity not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Delete Activities Per ID
- **Metode** : DELETE
- **Headers** : Authorization Bearer Token
- **URL** : **/activities/{id}**
- **Response Body** :
  ```json
  {
    "error": false,
    "message": "success"
  }
  ```
- Jika id dari activity salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Activity not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```


## Delete All Activities 
- **Metode** : DELETE
- **Headers** : Authorization Bearer Token
- **URL** : **/activities**
- **Response Body** :
  ```json
  {
    "error": false,
    "message": "success deleted all activities"
  }
  ```

- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```
    
## Recommendation Activities 
- **Metode** : GET
- **Headers** : Authorization Bearer Token
- **URL** : **/prediction/activities/{activityId}**
- **Response Body** :
  ```json
  {
    "Rekomendasi Aktivitas": "Konseling atau Terapi: Pertimbangkan untuk berkonsultasi dengan seorang profesional kesehatan mental.",
    "Stress Level": 4
  }
  ```
- Jika id dari activity salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Activity not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```
