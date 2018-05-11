createRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const createdRandomNumber = Math.round(Math.random() * 10);

    setTimeout(() => {
      resolve(createdRandomNumber);
    }, 1000);
  })
}

addNumber = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    const result = arg1 + arg2;

    setTimeout(() => {
      resolve(result);
    }, 1000);
  })
}

doIt = async () => {
  try {
    let num1 = await createRandomNumber();
    let num2 = await createRandomNumber();
    let sum = await (addNumber(num1, num2));
    
    console.log("Created Numbers : " , num1, num2);
    console.log("Sum = ", sum);

  } catch (e) {
    console.log(e);
  }
}

doIt();