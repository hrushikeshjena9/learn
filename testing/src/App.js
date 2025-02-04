// import React from 'react'

// function App() {
//   return (
//     <div>


//       <p>
//         First React test
//       </p>
//       <p>Hrushikesh</p>

//       <input type='text' readOnly placeholder='Enter user name' name='username' id='userId' value='username'/>
//       <img title="Image" src="https://images.unsplash.com/photo-1603210119593-824639a84eb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
//   const[data, setData] = useState("")
//   return (
//     <div>
//       <h1>
//         Test OnChange Event with input Box
//       </h1>
//       <input type='text' value={data} onChange={(e) => setData(e.target.value+ "test")} />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Users from "./class-component/user";

// function App() {
//   const [data, setData] = useState("")
//   return (
//     <div>
//       Test Click Event with Button
//       <button onClick={() => setData("updated data")}>Update Data here</button>
//       <h3>{data}</h3>
//       <Users />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Func from './functional-component/func'
// const App = () => {
//   return (
//     <div>
// <Func/>

//     </div>
//   )
// }

// export default App


//RTL Query
// GetByRoleQuery

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Get By Role Query</h1>
//       <div>Test</div>

//       <input type="text" defaultValue="hii" disabled/>
//       <button>Click</button>

//     </div>
//   )
// }

// export default App


//Multiple elements with Role Custom Role

// import React from 'react'

// function App() {
//   return (
//     <div>

//       {/* sementic elements */}
//       <h1>Multiple elements with Role Custom Role</h1>
//     <button>click me1</button>
//     <button>click me2</button>
//     <label htmlFor='input1'>User name1</label>
//     <input type='text' id='input1'/>
//     <label htmlFor='input2'>User name2</label>

//     <input type='text' id='input2'/>
//     <div role='dummy'> 
//       {/* non sementic elements */}
//       dummy text
//     </div>
//     </div>
//   )
// }

// export default App

// Get All By Role
import React from 'react'

function App() {
  return (
    <div>

      {/* sementic elements */}
      <h1>Multiple elements with Role Custom Role</h1>
    <button>click me1</button>
    <button>click me2</button>
    <label htmlFor='input1'>User name1</label>
    <input type='text' id='input1'/>
    <label htmlFor='input2'>User name2</label>

    <input type='text' id='input2'/>
    <div role='dummy'> 
      {/* non sementic elements */}
      dummy text
    </div>

    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    </div>
  )
}

export default App