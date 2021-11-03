import { Bar } from 'react-chartjs-2';

export default function Chart({chartLabels,rawi}) {
    const getDiffColors=(len)=>{

        let arr=[];
        for(let i=0;i<len;i++)
        {
          arr.push(`hsl(${Math.floor(Math.random()*255)}, 100%, 50%)`)
        }
        return arr;
      }
    const chartData={
        labels:[...chartLabels],
        datasets:[
        {
           label:'Most Sold',
           data:[...rawi],
           backgroundColor:
           getDiffColors(rawi.length)
        }
    ]
  
    }

    return (
     
        <div className="chart w-3/4 h-10/12">
    <Bar
	data={chartData}
     width={100}   
     height={75}
	options={{
    title:{
        display:true,
        text:'Most Sold Books',
        fontSize:25
    },
    legend:{
        display:true,
        position:'right'
    }
}}

    />
    </div>
    )
}
