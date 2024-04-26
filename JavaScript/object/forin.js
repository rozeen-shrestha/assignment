const scores = {
    mathScore: 'A',
    scienceScore: 'B',
    physicsScore: 'B'
  }
  
  const gradeMapping = {
    'A':100,
    'B': 80,
    'C': 60
  }
  let sum = 0
  for (let item in scores){
    sum+=gradeMapping[scores[item]]
  }
  console.log(sum)
    
  
  // 260
  
  // let sum = 0
  // for(let item in scores){
  // console.log(scores[item])
  // }