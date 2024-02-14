from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from .muscle_category import MuscleCategory

Base = declarative_base()

class Muscle(Base):
    __tablename__ = 'muscle'

    id = Column(Integer, primary_key=True, index=True)
    muscle_category_id = Column(Integer, ForeignKey(MuscleCategory.id))
    name = Column(String, index=True)

    muscle_category = relationship('muscle_category', back_populates='muscle')
    exercise = relationship('exercise', back_populates='muscle')
