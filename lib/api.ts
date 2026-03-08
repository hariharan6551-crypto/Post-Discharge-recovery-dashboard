export async function getStats(){

  return {
    totalPatients:1245,
    avgRecovery:18,
    supportScore:7.4,
    readmissionRate:"11%",

    daily:[
      {day:"Mon",value:30},
      {day:"Tue",value:50},
      {day:"Wed",value:70}
    ],

    weekly:[
      {week:"W1",value:120},
      {week:"W2",value:180}
    ],

    gender:[
      {name:"Male",value:60},
      {name:"Female",value:40}
    ],

    recovery:[
      {name:"Recovered",value:80},
      {name:"Risk",value:20}
    ],

    monthly:[
      {month:"Jan",value:200},
      {month:"Feb",value:250}
    ]
  }

}