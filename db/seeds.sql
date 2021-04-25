INSERT INTO department
  (name)
  VALUES
  ('Garden'),
  ('Electronics'),
  ('Kitchen'),
  ('Outdoor'),
  ('Clothing'),
  ('Furniture'),
  ('Bath'),
  ('Baby');

  INSERT INTO roles
  (title,salary,departments_id)
  VALUES
  ('cashier', 27.50, 1),
  ('stocker', 30.50, 2),
  ('florist', 22.50, 3),
  ('interior designer', 1250.25, 4),
  ('nurse', 950.86, 5),
  ('personal trainer', 850.76, 6),
  ('plumber', 890.66, 7),
  ('salesman', 100.56, 8),
  ('electrician', 600.99, 2),
  ('landscaper', 945.26, 3);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser',10 , NULL ),
  ('Jack', 'London', 1, 2  ),
  ('Robert', 'Bruce', 2, NULL  ),
  ('Peter', 'Greenaway',3, 4  ),
  ('Derek', 'Jarman', 4, NULL  ),
  ('Paolo', 'Pasolini', 5, 6  ),
  ('Heathcote', 'Williams', 6, NULL  ),
  ('Sandy', 'Powell', 7, 8  ),
  ('Emil', 'Zola', 8, NULL  ),
  ('Sissy', 'Coalpits', 9, 10 ),
  ('Antoinette', 'Capet', 10, NULL ),
  ('Samuel', 'Delany', 1, 12  ),
  ('Tony', 'Duvert', 2, NULL  ),
  ('Dennis', 'Cooper', 3, 14  ),
  ('Monica', 'Bellucci',4 , NULL  ),
  ('Samuel', 'Johnson', 5, 16  ),
  ('John', 'Dryden', 6, NULL  ),
  ('Alexander', 'Pope', 7, 18  ),
  ('Lionel', 'Johnson', 8, NULL  ),
  ('Aubrey', 'Beardsley', 9, 20  ),
  ('Tulse', 'Luper', 10, NULL  ),
  ('William', 'Morris', 1, 22 ),
  ('George', 'Shaw', 9, NULL  ),
  ('Arnold', 'Bennett', 3 , 24  ),
  ('Algernon', 'Blackwood', 4, NULL  ),
  ('Rhoda', 'Broughton', 5, 26  ),
  ('Hart', 'Crane', 6, NULL  ),
  ('Vitorio', 'DeSica', 7, 28  ),
  ('Wilkie', 'Collins', 8, NULL  );
