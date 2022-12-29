import ChartBar from './ChartBar';

const Chart = props => {

  return (
    <div className='chart'>
      {props.data.map((data) => (
        <ChartBar 
          key={data.label}
          value={data.value} 
          maxValue={null} 
          label={data.label}
        />
      ))}
    </div>
  );

}

export default Chart;