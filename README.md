# SERFLIX

Manage control of entertaiment and user with profiles, if you want see your favorite movie or series, this proyect is for you.
This project uses **TMDB**'s api like request movies, series and search, on the other hand, databases is in **Mysql** where store all data about users, profiles and score of entertaiments like movies and series.

### Api request

When you make a request any Api, for example if you request all profiles of one user, you need use
``../api/[topic]/[optional]...``

Where:
- topic: it could be ``search``, ``movie``, ``serie`` and so on.
- optional: in certain cases, there are many actions depend on the 		context, such as if you want all profiles, you must use ``/api/profile/all`` but if you want one profile, only use the same endpoint without all.

### Payload

When you make a **POST** or **PUT** request, some endpoints needs certain values for its payload, for example, for create one user, you have to add some values for payload of ``/api/user/add``, like that : 

```json
{
  "username": "your_username",
  "email": "your_email",
  "password": "your_password"
}
```

Don't worry about securty for your password, it'll be encrypted on the server-side

### Structure 

It has two sides: landing page and home access, moreover, used lazy loading for ngModules, on the other hand, if you add new routing or feacture, you have to keep lazy loading for ngModules

### Aditional information

That project has based the avalon's layout and many components of primeng are on the version 17 with angular 18
