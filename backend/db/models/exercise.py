from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Exercise(Base):
    __tablename__ = 'exercise'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    url = Column(String)

    training_sessions = relationship('TrainingSession', back_populates='exercises')
