        
        function citySort() {
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("show");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[0];
                    y = rows[i + 1].getElementsByTagName("TD")[0];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        function populationSort() {
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("show");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[0];
                    y = rows[i + 1].getElementsByTagName("TD")[0];
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }


        document.addEventListener('DOMContentLoaded', function() {
            const table = document.getElementById('show');
            const headers = table.querySelectorAll('th');
            const tableBody = table.querySelector('tbody');
            var rows = tableBody.querySelectorAll('tr');
            const add_btn = document.getElementById('btn');
        
            // Track sort directions
            const directions = Array.from(headers).map(function(header) {
                return '';
            });
        
            // Transform the content of given cell in given column
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
                // Get the current direction
                const direction = directions[index] || 'asc';
        
                // A factor based on the direction
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
        
                // Remove old rows
                [].forEach.call(rows, function(row) {
                    tableBody.removeChild(row);
                });
        
                // Reverse the direction
                directions[index] = direction === 'asc' ? 'desc' : 'asc';
        
                // Append new row
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