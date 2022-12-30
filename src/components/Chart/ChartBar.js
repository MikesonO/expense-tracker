import './ChartBar.scss';

const ChartBar = data => {
  let barFill = '0%';

  if (data.max > 0) {
    barFill = Math.round((data.value / data.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFill}}></div>
      </div>
        <div className='chart-bar__label'>{data.label} </div>
    </div>
  )
}

export default ChartBar;