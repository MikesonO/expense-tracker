import ChartBar from './ChartBar';
import './Chart.scss';

const Chart = (data) => {
  const dataPointValues = data.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {data.dataPoints.map((data) => (
        <ChartBar 
          key={data.label}
          value={data.value} 
          maxValue={totalMaximum} 
          label={data.label}
        />
      ))}
    </div>
  );

}

export default Chart;