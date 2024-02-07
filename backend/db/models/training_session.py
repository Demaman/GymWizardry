from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime, timedelta
from .account import Account
from .exercise import Exercise
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class TrainingSession(Base):
    __tablename__ = 'training_sessions'
    id = Column(Integer, primary_key=True, index=True)
    account_id = Column(Integer, ForeignKey(Account.id))
    exercise_id = Column(Integer, ForeignKey(Exercise.id))
    name = Column(String, index=True)
    created_date = Column(DateTime, default=datetime.utcnow)
    expire_date = Column(DateTime, default=datetime.utcnow() + timedelta(days=90))

    exercises = relationship('Exercise', back_populates='training_sessions')
    account = relationship('Account', back_populates='training_sessions')
