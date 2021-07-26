const inception = (i) => {
  console.log(i);
  i += 1;
  if (i < 11298) inception(i);
  else {
    console.log(`back with i = ${i}`);
    return;
  }
};

inception(0);
