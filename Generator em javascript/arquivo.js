function* contador() {
    let i = 0;
    while (true) {
      yield i;
      i++;
    }
  }
  
  const meuGenerator = contador();
  
  console.log(meuGenerator.next().value); // 0
  console.log(meuGenerator.next().value); // 1
  console.log(meuGenerator.next().value); // 2
  