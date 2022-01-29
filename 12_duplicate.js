
    let d = new Set();
    let array = [
        {id: 1, name: 'Stephen covey'},
        {id: 2, name: 'Robin Sharma' }, 
        {id: 3, name: 'Tolstoy'}, 
        {id: 3, name: 'Tolstoy'}, 
        {id: 5, name: 'James clear'}
    ];
    var filtered = array.filter(value => {
      let a = d.has(value.id);
      d.add(value.id);
      let b = d.has(value.name);
      d.add(value.name);
      return !a && !b;
    });
    console.log(filtered);