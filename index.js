d3.select('h1').style('color', 'red')
  .attr('class', 'heading')
  .text('Updated h1 tag');

d3.select('body')
.append('p')
.text('First paragraph added')
.attr('id', 'p1');
