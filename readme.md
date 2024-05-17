# Entity Relationship Diagram

```
Table cars {
  id integer
  name string
  price integer
  size string
  img string
  updated_at timestamp
}
```

# Endpoint

-   [GET] localhost:5000/cars - get all cars page
-   [GET] localhost:5000/cars/:id - edit page
-   [PUT] localhost:5000/cars/:id - update car
-   [DELETE] localhost:5000/cars/:id - delete car
