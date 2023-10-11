
import { useMemo } from "react";
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent({value}) {

  const memoResult = useMemo(()=>{
    return factorial(value);
  },[value])
  return <div className='result'>The factorial of {value} is {memoResult}</div>;
}

