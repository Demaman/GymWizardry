from sqlalchemy import Column, Integer, String, Table, ForeignKey  # Import the necessary modules
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class MuscleCategory(Base):
    __tablename__ = 'muscle_category'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    muscle = relationship('muscle', back_populates='muscle_category')
