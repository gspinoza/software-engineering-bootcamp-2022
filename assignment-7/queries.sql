-- PART A

-- Part 1
select count(*) from actors
union all
select count(*) from directors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors


-- PART B

-- Part 1
SELECT movie_name, release_date FROM movies;

-- Part 2
SELECT first_name, last_name FROM directors
WHERE nationality = 'American';

-- Part 3
SELECT first_name, last_name FROM actors
WHERE gender = 'M' AND date_of_birth BETWEEN '1940-02-01' AND '1969-12-31';

-- Part 4
SELECT movie_name FROM movies
WHERE movie_length > 90 AND movie_lang = 'English';

-- PART C

-- Part 1
SELECT movie_name, movie_lang FROM movies
WHERE movie_lang = 'English' OR movie_lang = 'Spanish' OR movie_lang = 'Korean';

-- Part 2
SELECT first_name, last_name FROM actors
WHERE last_name LIKE 'M%' AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31';

-- Part 3
SELECT first_name, last_name FROM directors
WHERE nationality = 'British' OR nationality = 'French' OR nationality = 'German' AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31';



-- PART D

-- Part 1
SELECT * FROM directors
Order by date_of_birth desc;
-- Part 2
Select Distinct(nationality) From directors;
-- Part 3
SELECT first_name, last_name, date_of_birth FROM actors
WHERE gender = 'F'
Order by date_of_birth desc LIMIT 10;