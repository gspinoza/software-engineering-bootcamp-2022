-- PRACTICE
--1
SELECT first_name, last_name, movie_name, release_date -- qualify
FROM directors, movies
WHERE directors.director_id = movies.director_id -- remember to qualify same columns
AND movie_lang = 'Chinese' OR movie_lang = 'Korean' OR movie_lang = 'Japanese';

--2
SELECT movie_name, release_date, international_takings
FROM movies, movie_revenues
WHERE movies.movie_id = movie_revenues.movie_id
AND movie_lang = 'English';

--3
SELECT movie_name, domestic_takings, international_takings
FROM movies, movie_revenues
WHERE movies.movie_id = movie_revenues.movie_id
AND domestic_takings is NULL OR international_takings is NULL
ORDER BY movie_name;


-- PART A
-- 1
SELECT Count(actors) FROM actors
WHERE date_of_birth > '1970-01-01';
-- 2

SELECT max(domestic_takings) as "Highest Domestic Takings", min(domestic_takings) from movie_revenues;

-- 3
SELECT sum(movie_length) as "Total Movie Length"
FROM movies
WHERE age_certificate = '15';

-- 4
SELECT count(*) as "Total Japanese Directors"
FROM directors
WHERE nationality = 'Japanese';

-- 5
SELECT avg(movie_length) as "Average Movie Length of Chinese Movies"
FROM movies
WHERE movie_lang = 'Chinese';


-- PART B
-- 1
SELECT nationality, COUNT(nationality) as Directors
FROM directors
GROUP BY nationality
ORDER BY Directors DESC;


-- 2
SELECT movie_lang, age_certificate, sum(movie_length)
FROM movies
GROUP BY movie_lang, age_certificate;

-- 3
SELECT movie_lang, sum(movie_length) as "Total Movies Length"
FROM movies
GROUP BY movie_lang
HAVING sum(movie_length) > 500;

-- PART C

-- 1
SELECT first_name, last_name
FROM actors
WHERE actor_id in (
    SELECT actor_id
    FROM movies_actors
    WHERE movie_id In (
        SELECT movie_id
        FROM movies
        WHERE director_id in (
            SELECT director_id
            FROM directors
            WHERE first_name = 'Wes' AND last_name = 'Anderson')));


-- 2
SELECT first_name, last_name, date_of_birth
FROM actors
WHERE date_of_birth = (
    SELECT min(date_of_birth) 
    FROM actors WHERE gender = 'M')
    OR
    date_of_birth = (
    SELECT min(date_of_birth) 
    FROM actors WHERE gender = 'F');
    
-- 3 
SELECT movie_name, movie_length, age_certificate
FROM movies
GROUP BY age_certificate,movie_name,movie_length
HAVING movie_length > (
     SELECT avg(movie_length)
     FROM movies);