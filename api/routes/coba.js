fs.readFile('data.txt', function(err, data) {
  if (err) throw err;

  data.split('\n');

  for (var i = 0; i < data.length, i += 1) {
    var row = data[i].split(',');

    var obj = { /* The object to save */ }

    var entry = new Entry(obj);
    entry.save(function(err) {
      if (err) throw err;
    }
  } 
}