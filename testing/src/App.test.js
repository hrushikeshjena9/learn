// // import { render, screen } from '@testing-library/react'; //import from  testing library 
// // import App from './App'; // we can test multiple component

// // test('renders learn react link', () => {
// //   render(<App />);
// //   // const linkElement = screen.getByText(/learn react/i);
// //   // expect(linkElement).toBeInTheDocument();
// //   const linkElement = screen.getByText(/Hrushikesh/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// // // test, expect comes from jest  
// // // test (description), logic,, then setTimeout  
// // // render use for render Components 
// // // screen show in screen
// // // toBeInTheDocument for output




// // newly re write...
// import { render, screen } from '@testing-library/react'
// import App from './App'
// // test("Test First React App", () => {
// test("123 Test First React App", () => {
//   render(<App />)
//   // const text = screen.getByText("First React test");
//   // expect(text).toBeInTheDocument()
//   const text = screen.getByText(/First React test/i); //remove case sensitive part
//   const text2 = screen.getByText("Hrushikesh");
//   const title = screen.getByTitle("Image");
//   expect(text).toBeInTheDocument()
//   expect(title).toBeInTheDocument()
//   expect(text2).toBeInTheDocument()
// })


// test("Test Input box", () => {
//   render(<App />);
//   const checkInput = screen.getByRole("textbox");
//   const placeholder = screen.getByPlaceholderText("Enter user name")
//   expect(checkInput).toBeInTheDocument()
//   expect(placeholder).toBeInTheDocument()
//   expect(checkInput).toHaveAttribute("name", "username")
//   expect(checkInput).toHaveAttribute("id", "userId")
//   expect(checkInput).toHaveAttribute("type", "text")
//   expect(checkInput).toHaveAttribute("value", "username")
// })
// //group testing
// describe("UI test case group", () => {
//   test("Test case1", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test("Test case2", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test("Test case3", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
// })


// describe.only("UI2 test case group", () => {
//   test("Test case1", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test("Test case2", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test("Test case3", () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
// })

// //    Test OnChange Event with input Box
// import { fireEvent, render, screen } from "@testing-library/react"

// import App from './App'

// test("on change event testing ", () => {
//   render(<App />);
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: 'abc' } });
//   expect(input.value).toBe("abctest");
// })



//Test Click Event with Button
// import { fireEvent, render, screen } from "@testing-library/react"

// import App from './App'

// test("Click Event event testing", () => {
//   render(<App />);
//   let btn = screen.getByRole("button");
//   fireEvent.click(btn);
//  expect(screen.getByText("updated data")).toBeInTheDocument()
// })



// //Before and after hooks 
// import { fireEvent, render, screen } from "@testing-library/react"

// import App from './App'
// import cleandb from "./server"
// // beforeAll(() =>{
// //   console.log("Before all hook")
// // })// one time for all test cases

// beforeEach(() => {
//   console.log("Before Each hook")
//   cleandb()
// })// each time for each test cases

// test("Click Event event testing1", () => {
//   render(<App />);
//   let btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument()
// })

// test("Click Event event testing2", () => {
//   render(<App />);
//   let btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument()
// })

// test("Click Event event testing3", () => {
//   render(<App />);
//   let btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument()
// })

// // afterAll(()=>{
// // console.log("After All Test Cases")
// // }) 

// afterEach(() => {
//   console.log("After Each Test Cases")
// }) 

//Snap shot testing
// import { render } from '@testing-library/react';
// import App from "./App"
// test("snapshot for app file", () => {
//   const container = render(<App />);
//   expect(container).toMatchSnapshot();
// })

//testing class component method
// import renderer from 'react-test-renderer';
// import Users from "./class-component/user";
// test("class component method testing ", () => {
//   const componentData = renderer.create(<Users />).getInstance();
//   let a = "text"
//   let b = 'extratext'
//   expect(componentData.getUserList(a)).toMatch(b)
// })

//test functional component
// import { fireEvent, render, screen } from "@testing-library/react"
// import Func from "./functional-component/func"
// import handleOtherMethod from "./helper";

// test("method testing case1", () => {
//   render(<Func />);
//   const btn = screen.getByTestId("btn1");
//   fireEvent.click(btn);
//   expect(screen.getByText("Hello")).toBeInTheDocument();
// })
// test("method testing case 2", () => {
//   expect(handleOtherMethod()).toMatch("hi")
// }) 



//RTL Query
// GetByRoleQuery

// import { fireEvent, render, screen } from "@testing-library/react"
// import App from "./App";

// test("get by role", () => {
//   render(<App />);
//   const inputField = screen.getByRole("textbox");
//   const btn = screen.getByRole("button");
//   expect(inputField).toBeInTheDocument();
//   expect(inputField).toHaveValue("hii");
//   expect(inputField).toBeDisabled("hii");
//   expect(btn).toBeInTheDocument();

// })


//Multiple elements with Role Custom Role


// import { render, screen } from "@testing-library/react"
// import App from "./App";

// test("get by role", () => {
//   render(<App />);
//   const btn1 = screen.getByRole("button", {name:"click me1"});
//   const btn2 = screen.getByRole("button", {name:"click me2"});
//   const input1 = screen.getByRole("textbox", {name:"User name1"});
//   const input2 = screen.getByRole("textbox", {name:"User name2"});
//   // const dv1 = screen.getByRole("div"); //it give error 
//   const dv1 = screen.getByRole("dummy"); //we need to define role manually //passs

//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
//   expect(input1).toBeInTheDocument();
//   expect(input2).toBeInTheDocument();
//   expect(dv1).toBeInTheDocument();
// })


// Get All By Role


import { render, screen } from "@testing-library/react"
import App from "./App";

test("get all by role", () => {
  render(<App />);
  const btns= screen.getAllByRole("button");
  const options= screen.getAllByRole("option");
  
  // expect(btns[0]).toBeInTheDocument();
for (let i=0; i<btns.length-1; i++){
  expect(btns[i]).toBeInTheDocument();
  
}
for (let i=0; i<options.length-1; i++){
  expect(options[i]).toBeInTheDocument();
  
}
})
