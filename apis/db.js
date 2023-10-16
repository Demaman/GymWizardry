const faker = require('faker');

const TOTAL_PAGES = 5;

const baseExercises = [
  { name: 'Squat', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif', category: 'legs', muscle_type:['Glutes', 'Quadriceps'] },
  { name: 'Leg Extension', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif', category: 'legs', muscle_type:['Quadriceps']},
  { name: 'Leg Press', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif', category: 'legs', muscle_type: ['Quadriceps']},
  { name: 'Dumbell Fly', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif', category: 'chest', muscle_type:['Upper']},
  { name: 'Chest Press Machine', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif', category: 'chest', muscle_type: ['Upper', 'Lower']},
  { name: 'Barbell biceps curl', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif', category: 'arms', muscle_type:['Biceps'] },
  { name: 'Overhead Triceps Extension', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Rope-Overhead-Triceps-Extension.gif', category: 'arms', muscle_type: ['Triceps']},
  { name: 'Lateral Raise', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif', category: 'shoulders', muscle_type: ['Lateral']},
  { name: 'Arnold Press', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2022/12/Single-Arm-Arnold-Press.gif', category: 'shoulders', muscle_type: ['Frontal', 'Lateral']},
  { name: 'Deadlift', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif', category: 'backs', muscle_type: ['Quadriceps', 'Trapezius', 'Latissimus']},
  { name: 'Bent Over Row', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif', category: 'backs', muscle_type: ['Latissimus', 'Trapezius', 'Rhomboids']},
  { name: 'Pull Up', description: faker.lorem.paragraph(), image_url: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif', category: 'backs', muscle_type: ['Latissimus']},
]


const allExercises = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const exercises = baseExercises.map(exercises => ({
    ...exercises, 
    id: faker.datatype.uuid(),
    created_at: faker.date.past()
  })).sort(() => .5 - Math.random());

  return [...acc, ...exercises]
}, [])

module.exports = {
  exercises: allExercises
}