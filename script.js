        document.addEventListener('DOMContentLoaded', function() {
            const table = document.getElementById('show');
            const headers = table.querySelectorAll('th');
            const tableBody = table.querySelector('tbody');
            var rows = tableBody.querySelectorAll('tr');
            const add_btn = document.getElementById('btn');
        
       
            const directions = Array.from(headers).map(function(header) {
                return '';
            });
        
           
            const transform = function(index, content) {
                // Get the data type of column
                const type = headers[index].getAttribute('data-type');
                switch (type) {
                    case 'number':
                        return parseInt(content);
                    case 'text':
                    default:
                        return content;
                }
            };
        
            const sortColumn = function(index) {
               
                const direction = directions[index] || 'asc';
        
                
                const multiplier = (direction === 'asc') ? 1 : -1;
        
                const newRows = Array.from(rows);
        
                newRows.sort(function(rowA, rowB) {
                    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
                    const cellB = rowB.querySelectorAll('td')[index].innerHTML;
                    
        
                    const a = transform(index, cellA);
                    const b = transform(index, cellB);    
        
                    switch (true) {
                        case a > b: return 1 * multiplier;
                        case a < b: return -1 * multiplier;
                        case a === b: return 0;
                    }
                });
        
              
                [].forEach.call(rows, function(row) {
                    tableBody.removeChild(row);
                });
        
                // Reverse the direction
                directions[index] = direction === 'asc' ? 'desc' : 'asc';
        
               
                newRows.forEach(function(newRow) {
                    tableBody.appendChild(newRow);
                });
            };
        
            [].forEach.call(headers, function(header, index) {
                header.addEventListener('click', function() {
                    sortColumn(index);
                });
            });





            var list1 = [];
            var list2 = [];
            var list3 = [];
    
    
            var n = 0;
            var x = 0;
    
          add_btn.addEventListener('click', function() {
    
                var AddRown = document.getElementById('table-body');
                var NewRow = AddRown.insertRow(n);
    
                list1[x] = document.getElementById("city").value;
                list2[x] = document.getElementById("state").value;
                list3[x] = document.getElementById("population").value;
    
                var cel1 = NewRow.insertCell(0);
                var cel2 = NewRow.insertCell(1);
                var cel3 = NewRow.insertCell(2);
    
    
                cel1.innerHTML = list1[x];
                cel2.innerHTML = list2[x];
                cel3.innerHTML = list3[x];
    
    
                n++;
                x++;

                rows = tableBody.querySelectorAll('tr');
            });


        });
