import "../styles/aihud.css";

function AIHud() {
  return (
    <div className="hud">

      {/* Rotating Rings */}
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      {/* Dashed Ring */}
      <div className="dash-ring"></div>

      {/* Scanner */}
      <div className="scanner"></div>

      {/* Orbit Dots */}
      <span className="orbit orbit1"></span>
      <span className="orbit orbit2"></span>
      <span className="orbit orbit3"></span>
      <span className="orbit orbit4"></span>

      {/* Connection Lines */}
      <div className="line l1"></div>
      <div className="line l2"></div>
      <div className="line l3"></div>
      <div className="line l4"></div>

      {/* Mini Nodes */}
      <span className="node n1"></span>
      <span className="node n2"></span>
      <span className="node n3"></span>
      <span className="node n4"></span>

    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>

    </div>
  );
}

export default AIHud;