d3.select('h1').style('color', 'red')
  .attr('class', 'heading')
  .text('Updated h1 tag');

d3.select('body')
.append('p')
.text('First paragraph added')
.attr('id', 'p1');

d3.select('body')
  .append('p')
  .text('Second paragraph added');

d3.select('body')
  .append('p')
  .text('Third paragraph added');

d3.selectAll('p').style('color', 'blue')
