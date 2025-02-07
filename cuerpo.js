import "./cuerpo.css";
export default function Cuerpo({ tasks }) {
  return (
    <div className="cuerpo">
      {tasks.map((section, index) => (
        <div className="section" key={index}>
          <h2>{section.category}</h2>
          {section.tasks.map((task, taskIndex) => (
            <div className="task-box" key={taskIndex}>{task}</div>
          ))}
        </div>
      ))}
      <div className="footer">
        <span>Write a task</span>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
}
