export function fibonacci(index: number): number {
  let startedFibo: number[] = [0, 1];
  for (let i: number = 0; i < (index - 2); i++){
    startedFibo.push(startedFibo[i] + startedFibo [i + 1]);
  } 
  return startedFibo[index-1]; //index-1 because the user doesn't know that the first element in the array is 0. When the user asks for 6.th element, he will say 6 so we need the index-1st element
} 
//console.log(fibonacci(43));