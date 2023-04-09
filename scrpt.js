var table = document.getElementById("nilai"), sumHsl = 0;
 for(var t = 1; t < table.rows.length; t++)
 {
  sumHsl = sumHsl + parseInt(table.rows[t].cells[3].innerHTML);
 }
 document.getElementById("hasil").innerHTML = "Sum Value = "+ sumHsl;
