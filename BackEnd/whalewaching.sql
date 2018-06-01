DROP DATABASE IF EXISTS WhaleWaching;
CREATE DATABASE WhaleWaching;
USE WhaleWaching;

CREATE TABLE Property_Owner(
	property_owner_id INT AUTO_INCREMENT,
	property_owner_name VARCHAR (255),
	address_postal_code VARCHAR (255),
	address_street_and_num VARCHAR (255),
	address_city VARCHAR (255),
	address_country VARCHAR (255),
	email VARCHAR (255),
	registerd_date DATETIME,
	profile_picture VARCHAR(300), -- link
	username VARCHAR(50),
	password VARCHAR(50),
	CONSTRAINT PRIMARY KEY(property_owner_id)
);

-- insert into Property_Owner values (0, 'property_owner_name1', 'address_postal_code1', 'address_street_and_num1', 'address_city1', 'address_country1', 'email1', '2017.1.1', 'profile_picture1', 'username1', 'password1');
-- insert into Property_Owner values (0, 'property_owner_name2', 'address_postal_code2', 'address_street_and_num2', 'address_city2', 'address_country2', 'email2', '2017.1.2', 'profile_picture2', 'username2', 'password2');
-- insert into Property_Owner values (0, 'property_owner_name3', 'address_postal_code3', 'address_street_and_num3', 'address_city3', 'address_country3', 'email3', '2017.1.3', 'profile_picture3', 'username3', 'password3');

CREATE TABLE Contac_Person_For_Payment_Details(
	contac_person_for_payment_detail_id int PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR (255),
	contact_person_for_payment_tel VARCHAR (100),
	contact_person_for_payment_email VARCHAR (255),
	property_owner_id INT,
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Removed_Owner(
	property_owner_id INT PRIMARY KEY,
	remove_date DATETIME,
	reason VARCHAR(300),
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Property_Owner_Contact_Number(
	property_owner_contac_id int PRIMARY KEY AUTO_INCREMENT,
	property_owner_id INT,
	contact VARCHAR (50),
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)  
);

CREATE TABLE Payment(
	payment_id int PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR (255),
	amount Double(20,2),
	paied_date DATETIME,
	description VARCHAR(255),
	conformed boolean,
	property_owner_id INT,
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Paypal(
	paypal_id int PRIMARY KEY AUTO_INCREMENT,
	property_owner_id INT,
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Bank_Detail(
	bank_detail_id int PRIMARY KEY AUTO_INCREMENT,
	property_owner_id INT,
	bank_name VARCHAR(100),
	bank_address VARCHAR(255),
	acc_no VARCHAR(255),
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Property(
	property_id int PRIMARY KEY AUTO_INCREMENT,
	property_name VARCHAR(255),
	seat_count int,
	description VARCHAR(255),
	property_owner_id INT,
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Property_Registration_Payment(
	property_registration_payment_id int PRIMARY KEY AUTO_INCREMENT,
	payment_type VARCHAR (255),
	amount Double(20,2),
	paied_date DATETIME,
	description VARCHAR(255),
	conformed boolean,
	property_owner_id INT,
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id)
);

CREATE TABLE Removed_Property(
	property_id int PRIMARY KEY,
	remove_date DATETIME,
	reason VARCHAR(300),
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id)
);

CREATE TABLE Closed_Date (
	close_date_id int PRIMARY KEY AUTO_INCREMENT,
	close_date DATETIME,
	property_id int,
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id)
);

CREATE TABLE Package_Images(
	image_id int PRIMARY KEY AUTO_INCREMENT,
	image_link VARCHAR(300),
	property_id int,
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id)
);

CREATE TABLE Video(
	video_id int PRIMARY KEY AUTO_INCREMENT,
	video_link VARCHAR(300),
	property_id int,
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id)
);

CREATE TABLE Packages(
	package_id int PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(1000),
	meal VARCHAR(500),
	tour_time VARCHAR(50),
	percentage Double(10,2),
	type boolean, -- 1 children 0 other
	property_id int,
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id)
);

CREATE TABLE Removed_Package(
	package_id int PRIMARY KEY,
	remove_date DATETIME,
	reason VARCHAR(300),
	CONSTRAINT FOREIGN KEY (package_id) REFERENCES Packages (package_id)
);

CREATE TABLE Customer (
	customer_id INT PRIMARY KEY AUTO_INCREMENT,
	customer_name VARCHAR(255),
	nationality VARCHAR(255),
	password VARCHAR (255),
	email VARCHAR (255)
);

CREATE TABLE Customer_Contact_Number(
	customer_contac_id int PRIMARY KEY AUTO_INCREMENT,
	customer_contact VARCHAR (50),
	customer_id INT,
	CONSTRAINT FOREIGN KEY (customer_id) REFERENCES Customer (customer_id)  
);

CREATE TABLE Reserve (
	reserve_id int PRIMARY KEY,
	reserve_date DATETIME,
	customer_id INT,
	CONSTRAINT FOREIGN KEY (customer_id) REFERENCES Customer (customer_id)  
);

CREATE TABLE Reservation_Detail(
	reserversion_detail_id int PRIMARY KEY AUTO_INCREMENT,
	reserve_id int,
	package_id int,
	count int,
	CONSTRAINT FOREIGN KEY (reserve_id) REFERENCES Reserve (reserve_id),
	CONSTRAINT FOREIGN KEY (package_id) REFERENCES Packages (package_id)
);

CREATE TABLE Meal(
	meal_id int PRIMARY KEY,
	description VARCHAR (255)
);

CREATE TABLE Meal_Description (
	meal_description_id int PRIMARY KEY AUTO_INCREMENT,
	meal_count int,
	reserve_id int,
	meal_id int,
	CONSTRAINT FOREIGN KEY (reserve_id) REFERENCES Reserve (reserve_id),
	CONSTRAINT FOREIGN KEY (meal_id) REFERENCES Meal (meal_id)
);

CREATE TABLE Commition (
	commision_id int PRIMARY KEY,
	percentage Double(10,2),
	commition Double(20,2),
	reserve_id int,
	CONSTRAINT FOREIGN KEY (reserve_id) REFERENCES Reserve (reserve_id)
);

CREATE TABLE Review(
	review_id int PRIMARY KEY AUTO_INCREMENT,
	property_id int,
	customer_id INT,
	CONSTRAINT FOREIGN KEY (property_id) REFERENCES Property (property_id),
	CONSTRAINT FOREIGN KEY (customer_id) REFERENCES Customer (customer_id)
);

CREATE TABLE Message(
	message_id int PRIMARY KEY AUTO_INCREMENT,
	property_owner_id INT,
	customer_id INT,
	message_to int,
	message_from int,
	message_date DATETIME,
	message VARCHAR (1000),
	CONSTRAINT FOREIGN KEY (property_owner_id) REFERENCES Property_Owner (property_owner_id),
	CONSTRAINT FOREIGN KEY (customer_id) REFERENCES Customer (customer_id)
);

CREATE TABLE Owner_Terms_Policies(
	owner_terms_policies_id int PRIMARY KEY,
	description VARCHAR (1000) 
);

CREATE TABLE Customer_Terms_Policies(
	customer_terms_policies_id int PRIMARY KEY,
	description VARCHAR (1000) 
);

CREATE TABLE Payment_Detail(
	payment_detail_id int PRIMARY KEY AUTO_INCREMENT,
	pay_type VARCHAR (255),
	account_number VARCHAR (255),
	description VARCHAR (500)
);


