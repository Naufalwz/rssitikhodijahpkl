var json = {
    "Rawat Jalan": ["Poliklinik Spesialis Mata", "Poliklinik Spesialis Gigi & Mulut", "Poliklinik Spesialis Jantung"],
    "Rawat Inap": ["Marwah", "Mina", "Arifah"],
    "Kelas" : ["Kelas VIP", "Kelas I", "Kelas II"]
    };
    
    var table = $('<container/>'),
    table_head = $('<thead/>'),
    head_row = $('<tr/>'),
    table_body = $('<tbody/>'),
    body_row = [];
    
    $.each(json, function(th, items) {
    head_row.append('<th>' + th + '</th>');
    $.each(items, function(index, item) {
    
    if (body_row[index] === undefined) {
    body_row[index] = $('<tr/>');
    body_row[index].append('<td>' + item + '</td>');
    } 
    else
    body_row[index].append('<td>' + item + '</td>');
    });
    
    //console.log(items);
    });
    
    table_head.append(head_row);
    table_body.append(body_row)
    table.append(table_head);
    table.append(table_body);
    $('body').html(table)
    