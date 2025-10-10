import psycopg
from PostgressConnect import PSQLConnect, PSQLCursor
from loadDotEnv import initializeENV

state = initializeENV()
conn = PSQLConnect()
cur = PSQLCursor(conn)

cur.execute('''
                -- Создание таблицы participant (Участники)
                CREATE TABLE participant (
                    id SERIAL PRIMARY KEY,
                    fio VARCHAR(255) NOT NULL,
                    role VARCHAR(100) NOT NULL
                );

                -- Создание таблицы steck (Технологический стек)
                CREATE TABLE steck (
                    parid INTEGER NOT NULL,
                    technology VARCHAR(100) NOT NULL,
                    PRIMARY KEY (parid, technology),
                    FOREIGN KEY (parid) REFERENCES participant(id) ON DELETE CASCADE
                );

                -- Создание таблицы project (Проекты)
                CREATE TABLE project (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    description TEXT,
                    web VARCHAR(255)
                );

                -- Создание таблицы project-participant (Связь проектов и участников)
                CREATE TABLE project_participant (
                    parid INTEGER NOT NULL,
                    projid INTEGER NOT NULL,
                    PRIMARY KEY (parid, projid),
                    FOREIGN KEY (parid) REFERENCES participant(id) ON DELETE CASCADE,
                    FOREIGN KEY (projid) REFERENCES project(id) ON DELETE CASCADE
                );

                -- Создание индексов для улучшения производительности
                CREATE INDEX idx_participant_fio ON participant(fio);
                CREATE INDEX idx_participant_role ON participant(role);
                CREATE INDEX idx_steck_technology ON steck(technology);
                CREATE INDEX idx_project_name ON project(name);
                CREATE INDEX idx_project_participant_parid ON project_participant(parid);
                CREATE INDEX idx_project_participant_projid ON project_participant(projid);

                -- Вставка тестовых данных (опционально)
                INSERT INTO participant (fio, role) VALUES 
                    ('Иванов Иван Иванович', 'Разработчик'),
                    ('Петров Петр Петрович', 'Дизайнер'),
                    ('Сидорова Анна Михайловна', 'Менеджер проекта');

                INSERT INTO steck (parid, technology) VALUES 
                    (1, 'Python'),
                    (1, 'PostgreSQL'),
                    (1, 'Django'),
                    (2, 'Figma'),
                    (2, 'Photoshop'),
                    (3, 'Jira');

                INSERT INTO project (name, description, web) VALUES 
                    ('Веб-приложение для учета задач', 'Система управления задачами и проектами', 'https://example.com/taskapp'),
                    ('Мобильное приложение для трекинга привычек', 'Приложение для формирования полезных привычек', 'https://example.com/habits');

                INSERT INTO project_participant (parid, projid) VALUES 
                    (1, 1),
                    (2, 1),
                    (3, 1),
                    (1, 2),
                    (2, 2);
            ''')
conn.commit()

cur.close()
conn.close()

print("DB is Initialized")
