from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from faker import Faker
from backend.db.models.muscle import Muscle
from backend.db.models.muscle_category import MuscleCategory
from backend.db.models.exercise import Exercise

# Replace 'postgresql://username:password@localhost/dbname' with your actual database connection URL
DATABASE_URL = "postgresql://pollux:pollux123@localhost/wizardry_gym_dev"
engine = create_engine(DATABASE_URL)

# Create tables if not exist
with engine.connect() as connection:
    connection.execute("CREATE TABLE IF NOT EXISTS muscle (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL);")
    connection.execute("CREATE TABLE IF NOT EXISTS muscle_category (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL);")
    connection.execute("""
        CREATE TABLE IF NOT EXISTS exercise (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            image_url VARCHAR(255),
            category VARCHAR(100) NOT NULL,
            FOREIGN KEY (category) REFERENCES muscle_category(name)
        );
    """)

# Create a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db = SessionLocal()

# Create a Faker instance for generating fake data
faker = Faker()

# Fixture data
baseExercises = [
  { 'name': 'Squat', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif', 'category': 'legs', 'muscle_type':['Glutes', 'Quadriceps'] },
  { 'name': 'Leg Extension', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif', 'category': 'legs', 'muscle_type':['Quadriceps']},
  { 'name': 'Leg Press', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif', 'category': 'legs', 'muscle_type': ['Quadriceps']},
  { 'name': 'Dumbell Fly', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif', 'category': 'chest', 'muscle_type':['Upper']},
  { 'name': 'Chest Press Machine', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif', 'category': 'chest', 'muscle_type': ['Upper', 'Lower']},
  { 'name': 'Barbell biceps curl', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif', 'category': 'arms', 'muscle_type':['Biceps'] },
  { 'name': 'Overhead Triceps Extension', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Rope-Overhead-Triceps-Extension.gif', 'category': 'arms', 'muscle_type': ['Triceps']},
  { 'name': 'Lateral Raise', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif', 'category': 'shoulders', 'muscle_type': ['Lateral']},
  { 'name': 'Arnold Press', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2022/12/Single-Arm-Arnold-Press.gif', 'category': 'shoulders', 'muscle_type': ['Frontal', 'Lateral']},
  { 'name': 'Deadlift', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif', 'category': 'backs', 'muscle_type': ['Quadriceps', 'Trapezius', 'Latissimus']},
  { 'name': 'Bent Over Row', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif', 'category': 'backs', 'muscle_type': ['Latissimus', 'Trapezius', 'Rhomboids']},
  { 'name': 'Pull Up', 'description': faker.paragraph(), 'image_url': 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif', 'category': 'backs', 'muscle_type': ['Latissimus']},
]

# Populate the 'muscle_category' table
categories = set(exercise['category'] for exercise in baseExercises)
for category in categories:
    db.execute(MuscleCategory.__table__.insert().values(name=category))

# Populate the 'muscle' table
muscle_types = set(muscle_type for exercise in baseExercises for muscle_type in exercise['muscle_type'])
for muscle_type in muscle_types:
    db.execute(Muscle.__table__.insert().values(name=muscle_type))

# Populate the 'exercise' table
for exercise_data in baseExercises:
    muscle_category_id = db.execute(select([MuscleCategory.id]).where(MuscleCategory.name == exercise_data['category'])).scalar()
    exercise = Exercise(
        name=exercise_data['name'],
        description=exercise_data['description'],
        image_url=exercise_data['image_url'],
        category=muscle_category_id,
    )
    db.add(exercise)

# Commit the changes
db.commit()

# Close the session
db.close()
