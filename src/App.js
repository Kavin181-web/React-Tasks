import React from "react";
import { students } from "./data";

function App() {

  // Q2 - Update Ravi
  const updateRavi = students.map(s =>
    s.name === "Ravi" ? { ...s, status: "Completed" } : s
  );

  // Q3 - Insert Deepak
  const addDeepak = [
    ...students,
    { id: 5, name: "Deepak", age: 24, course: "Python", status: "Pending" }
  ];

  // Q4 - Delete Meena
  const deleteMeena = students.filter(s => s.name !== "Meena");

  // Q5 - Age > 21
  const ageGreater = students.filter(s => s.age > 21);

  // Q6 - Age < 22
  const ageLess = students.filter(s => s.age < 22);

  // Q7 - MERN or Python
  const courseIn = students.filter(s =>
    ["MERN Stack", "Python"].includes(s.course)
  );

  // Q8 - Age > 20 AND MERN
  const andCondition = students.filter(
    s => s.age > 20 && s.course === "MERN Stack"
  );

  // Q9 - Java OR Python
  const orCondition = students.filter(
    s => s.course === "Java" || s.course === "Python"
  );

  // Q10 - Status exists
  const statusExists = students.filter(s => s.status !== undefined);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Tasks:</h1>

      {/* Q1 */}
      <h2>Q1: Display All Students</h2>
      {students.map(s => (
        <p key={s.id}>{s.name} - {s.age} - {s.course} - {s.status || "completed"}</p>
      ))}
      <hr />

      {/* Q2 */}
      <h2>Q2: Update Ravi Status</h2>
      {updateRavi.map(s => (
        <p key={s.id}>{s.name} - {s.status || "completed"}</p>
      ))}
      <hr />

      {/* Q3 */}
      <h2>Q3: Insert Deepak</h2>
      {addDeepak.map(s => (
        <p key={s.id}>{s.name}</p>
      ))}
      <hr />

      {/* Q4 */}
      <h2>Q4: Delete Meena</h2>
      {deleteMeena.map(s => (
        <p key={s.id}>{s.name}</p>
      ))}
      <hr />

      {/* Q5 */}
      <h2>Q5: Age greater than 21</h2>
      {ageGreater.map(s => (
        <p key={s.id}>{s.name} - {s.age}</p>
      ))}
      <hr />

      {/* Q6 */}
      <h2>Q6: Age less than 22</h2>
      {ageLess.map(s => (
        <p key={s.id}>{s.name} - {s.age}</p>
      ))}
      <hr />

      {/* Q7 */}
      <h2>Q7: MERN Stack or Python</h2>
      {courseIn.map(s => (
        <p key={s.id}>{s.name} - {s.course}</p>
      ))}
      <hr />

      {/* Q8 */}
      <h2>Q8: Age > 20 and MERN Stack</h2>
      {andCondition.map(s => (
        <p key={s.id}>{s.name}</p>
      ))}
      <hr />

      {/* Q9 */}
      <h2>Q9: Java or Python</h2>
      {orCondition.map(s => (
        <p key={s.id}>{s.name} - {s.course}</p>
      ))}
      <hr />

      {/* Q10 */}
      <h2>Q10: Status exists</h2>
      {statusExists.map(s => (
        <p key={s.id}>{s.name} - {s.status}</p>
      ))}

    </div>
  );
}

export default App;