$(function(){
    const labels = [
        '2020',
        '2019',
        '2018'
      ];
      let asset = {
          label: 'asset',
          backgroundColor: 'rgba(73, 70, 70,0.5)',
          borderColor: 'rgb(73, 70, 70)',
          data: [50273,	45380,	46167],
          borderWidth:2
      };
    
      let liability = {
          label: 'liability',
          backgroundColor: 'rgba(26, 159, 149,0.5)',
          borderColor: 'rgb(26, 159, 149)',
          data: [18780	,19085,	22686],
          borderWidth:2
        };
    
      let capital = {
          label: 'capital',
          backgroundColor: 'rgba(142, 142, 142, 0.5)',
          borderColor: 'rgb(142, 142, 142)',
          data: [31493,	26295,	23481],
          borderWidth:2
        };   
    
      const data = {
        labels: labels,
        datasets: [asset,liability,capital]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: {
          maintainAspectRatio :false,
          plugins:{
            legend:{
              display:false
            }        
          }
        }
      };
    
    const myChart = new Chart(
        document.getElementById('line-chart'),
        config
    );

    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      navigation:true,
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'footer'],
      navigationTooltips:['1','2','3','4','5']  
  });

  
});
