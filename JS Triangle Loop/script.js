
function drawTriangle(size) {
   for (let r = 0;r < size; r++) {
      let line = "";
      for (let c = 0; c <= r; c++) {
         line += "*";
      }
      console.log(line);
      }
      }
drawTriangle(4)