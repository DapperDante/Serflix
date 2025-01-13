# SERFLIX

Manage control of entertaiment and user with profiles, if you want see your 
favorite movie or series, so this proyect is for you.
This project uses Api of **TMDB** like request movies, series and search, in other hand to databases is in **Mysql** where store all data about users, profiles and score of entertaiments like movies and series.

## Api request

when you request any Api, for example you request all profiles of one use, so you need use
``../api/[topic]/[action]/...[optional]``

where:
- topic: it could be ``search``, ``movie``, ``serie`` and so one.
- action: when you decided one of them, you put like ``get``, ``add`` or ``delete``
- optional: the optional depend on action, for example when you use ``/api/movie/get``
you must add option to filter data, in that case you could add id of profile, so you should get all movies of that profile, but if you want get only one movie of that profile for example check that movie is favorite of that profile.

#### Body params

When you request any api of type post or put, some apis you need add
ciertain values to functionaly, for example you create one user, you need add to body of ``/api/user/add`` : 

```json
{
  "username": "your_username",
  "email": "your_email",
  "password": "your_password"
}
```

Don't care to your password, in the server-side encryption that information.

> in later version, there will manage other information about the user, profile or manage control of goals by account

## Structure 

Its structure is on two sides, when you access and manage your information and the other side is landing (where anyone access to first time), the landing page is on home folder and other side is on layout that has layout avalon by primeng.

## Aditional information
That project has based the avalon's layout and many components of primeng are on the version 17 with angular 18
