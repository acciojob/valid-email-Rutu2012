function validEmail(str:string):boolean {
  if(!str || str.trim()===""){
	  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,}$/;
	  return emaillRegex.test(str);
  }
}
validEmail('abc@example.com');
// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
