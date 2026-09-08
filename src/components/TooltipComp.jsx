import { IoTriangle } from "react-icons/io5";
import { MdOutlineInbox } from "react-icons/md";

export default function TooltipComp({ tips }) {
  return tips.map((item, index) => {
    const styleBg = {
      background: item.bg,
      borderColor: item.icon,
      boxShadow: `2px 2px 5px ${item.bg}`,
    };
    const styleTip = { color: item.bg };
    const styleTitle = { color: item.title };
    const styleDescr = { color: item.desc };
    const styleInbox = { color: item.icon };
    return (
      <section
        className={`tooltip-item`}
        key={`${item.class}-${index}`}
        style={styleBg}
      >
        <MdOutlineInbox style={styleInbox} className="icon-inbox" />
        <section className="texts">
          <h4 style={styleTitle}>Archive notes</h4>
          <p style={styleDescr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
            tenetur.
          </p>
        </section>
        <button style={styleDescr}>X</button>
        <IoTriangle style={styleTip} className="icon-tip" />
      </section>
    );
  });
}
