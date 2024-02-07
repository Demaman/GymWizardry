from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

class DatabaseManager:
    def __init__(self, database_url, model_class=None):
        self.engine = create_engine(database_url)
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
        self.Base = declarative_base()

        if model_class:
            self.create_table(model_class)

    def create_table(self, model_class):
        """Create a table for the provided model class."""
        self.Base.metadata.create_all(bind=self.engine, tables=[model_class.__table__])

    def drop_table(self, model_class):
        """Drop a table for the provided model class."""
        self.Base.metadata.drop_all(bind=self.engine, tables=[model_class.__table__])

    def get_session(self):
        return self.SessionLocal()
