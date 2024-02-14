from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

from .muscle import Muscle

Base = declarative_base()

class Exercise(Base):
    __tablename__ = 'exercise'
    
    id = Column(Integer, primary_key=True, index=True)
    muscle_category_id = Column(Integer, ForeignKey(Muscle.id))
    description = Column(String, index=True)
    name = Column(String, index=True)
    url = Column(String)

    training_sessions = relationship('TrainingSession', back_populates='exercises')
    muscle = relationship('Muscle', back_populates='exercises')
