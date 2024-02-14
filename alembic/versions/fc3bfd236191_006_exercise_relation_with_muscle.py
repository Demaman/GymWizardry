"""006_exercise_relation_with_muscle

Revision ID: fc3bfd236191
Revises: 32f7e5e34254
Create Date: 2024-02-14 00:16:46.406454

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fc3bfd236191'
down_revision: Union[str, None] = '32f7e5e34254'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('exercise', sa.Column('muscle_category_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'exercise', 'muscle', ['muscle_category_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'exercise', type_='foreignkey')
    op.drop_column('exercise', 'muscle_category_id')
    # ### end Alembic commands ###
