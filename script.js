//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;
  
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
  
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  } else {
    alert('Invalid block ID. Please enter a number between 1 and 9.');
  }
});

document.getElementById('reset_button').addEventListener('click', function() {
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
});
