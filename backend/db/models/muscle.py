from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Muscle(Base):
    __tablename__ = 'muscle'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)