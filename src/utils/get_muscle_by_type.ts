import { LEGS, ARMS, BACKS, CHEST, SHOULDERS } from "../constants/muscle_type";

type MuscleType = LEGS| ARMS| BACKS| CHEST| SHOULDERS

export function GetMuscleByType(muscle: MuscleType) {
  switch (muscle) {
    case LEGS.QUADRICEPS:
      return 'Quadriceps';
    case LEGS.GLUTES:
      return 'Glutes';
    case LEGS.CALVES:
      return 'Calves';
    case LEGS.HAMSTRINGS:
      return 'Harmstrings';
    case ARMS.BICEPS:
      return 'Biceps';
    case ARMS.TRICEPS:
      return 'Triceps';
    case SHOULDERS.ANTERIOR:
      return 'Anterior';
    case SHOULDERS.FRONTAL:
      return 'Frontal';
    case SHOULDERS.LATERAL:
      return 'Lateral';
    case CHEST.LOWER:
      return 'Lower';
    case CHEST.UPPER:
      return 'Upper';
    case BACKS.LATISSIMUS:
      return 'Latissimus';
    case BACKS.RHOMBOIDS:
      return 'Rhomboids';
    case BACKS.TRAPEZIUS:
      return 'Trapezius';
    default:
      return ;
  }
}
