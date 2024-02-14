from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# Association table for the many-to-many relationship between exercises and training sessions
exercise_training_association = Table(
    'exercise_training_association',
    Base.metadata,
    Column('exercise_id', Integer, ForeignKey('exercise.id')),
    Column('training_id', Integer, ForeignKey('training_sessions.id'))
)
