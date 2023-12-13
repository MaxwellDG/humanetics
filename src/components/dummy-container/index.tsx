type Props = {
  nodeColours: string[];
};

export default function DummyContainer({ nodeColours }: Props) {
  return (
    <div className="dummy-con">
      <div className="head">
        <div className="node one" style={{ backgroundColor: nodeColours[0] }} />
        <div className="node two" style={{ backgroundColor: nodeColours[1] }} />
      </div>
      <div className="body">
        <div className="left-forearm" />
        <div className="arm" />
        <div className="torso" />
        <div className="arm" />
        <div className="right-forearm" />
        <div className="node three" style={{ backgroundColor: nodeColours[2] }} />
        <div className="node four" style={{ backgroundColor: nodeColours[3] }} />
        <div className="node five" style={{ backgroundColor: nodeColours[4] }} />
        <div className="node six" style={{ backgroundColor: nodeColours[5] }} />
        <div className="node seven" style={{ backgroundColor: nodeColours[6] }} />
      </div>
      <div className="legs">
        <div className="left-leg"/>
        <div className="right-leg"/>
        <div className="node eight" style={{ backgroundColor: nodeColours[7] }} />
        <div className="node nine" style={{ backgroundColor: nodeColours[8] }} />
      </div>
    </div>
  );
}
