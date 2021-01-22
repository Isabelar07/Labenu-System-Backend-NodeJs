# LabenuSystem:

### Integrantes
* Isabela Rocha Silveira
* Lilian Nicolau
* Vinicius Silveira Moraes

### Querys de criação de tabelas

#### Mission

```sql
CREATE TABLE Mission (
	id INT PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    module INT NOT NULL
);
```
#### Teacher

```sql
CREATE TABLE Teacher (
	id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    mission_id INT,
    FOREIGN KEY (mission_id) REFERENCES Mission(id)
);
```
#### Student

```sql
CREATE TABLE Student(
	id INT PRIMARY KEY NOT NULL,
	name VARCHAR (50) NOT NULL,
	email VARCHAR (50) NOT NULL UNIQUE,
	birthdate DATE NOT NULL,
    mission_id INT,
	FOREIGN KEY (mission_id) REFERENCES Mission(id)
);
```
#### Specialty

```sql
CREATE TABLE Specialty (
	id INT PRIMARY KEY NOT NULL,
    name ENUM("React","Redux","CSS","Testes","Typescript","Programação Orientada a Objetos","Backend")    
);
```
#### Teacher_Specialty

```sql
CREATE TABLE Teacher_Specialty(
	teacher_id INT NOT NULL,
    specialty_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
    FOREIGN KEY (specialty_id) REFERENCES Specialty(id)
);
```
#### Hobby

```sql
CREATE TABLE Hobby (
	id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL
);
```
#### Student_Hobby

```sql
CREATE TABLE Student_Hobby(
	student_id INT NOT NULL,
    hobby_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Student(id),
    FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);
```
