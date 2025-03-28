import showMenu from "./menu";

const WelcomeString = `
******************************************
++ Welcome to the Task Management System++
******************************************
`;

const goodByeString = `
******************************************
++ Goodbye thanks for using the tool    ++
******************************************
`;

function Welcome(): void {
  console.log(WelcomeString);
}
function Goodbye(): void {
  console.log(goodByeString);
}
Welcome();
showMenu(Goodbye);
