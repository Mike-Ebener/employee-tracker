
INSERT INTO departments (id, d_name)
VALUES
    (1, Business),
    (2, Design),
    (3, Product),
    (4, Engineering),
    (5, Analytics),
    (6, Marketing),
    (7, Legal),
    (8, Finance),
    (9, People),
    (10, Operations);

INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, 'Business Manager', 80000, 1),
    (2, 'Product Manager', 90000, 3),
    (3, 'Software Engineer', 950000, 4),
    (4, 'UX Designer', 85000, 2);


INSERT INTO employees (id, first_name, last_name, role_id, manaager_id)
VALUES
    (1, 'Mike', 'Ebener', 2, 2),
    (2, 'Blaize', 'Johnston',2, 2),
    (3, 'Raj', 'Patel',1, 3),
    (4, 'Wendy', 'Narahali',1 ,4),
    (5, 'Blake', 'Worker', 3, 2),
    (6, 'Adam', 'Demamp', 4, 4),
    (7, 'Carl', 'Sketch', 3, 3),
    (8, 'Dominic', 'Neighbor' 1, 2);

    