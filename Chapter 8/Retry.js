class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  do {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
        // console.log(error);
      if (!(error instanceof MultiplicatorUnitFailure))
        throw error;
    }
  }while(true)
}

// console.log(reliableMultiply(8, 8));
// → 64