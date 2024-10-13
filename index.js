import server, { redirect } from "@server/next";

import Html from "./Html.jsx";
import Circle from "./Circle.jsx";

const named = [, , , , , , , , , , , , , , , ,];

const Home = () => (
  <Html style="padding: 20px;">
    <h1>Plain Color</h1>
    <p>
      A plain color website. Write the hex code in the url like{" "}
      <a href="https://plain-color.com/teal">
        <code>/teal</code>
      </a>
      {" or "}
      <a href="https://plain-color.com/00ff00">
        <code>/00ff00</code>
      </a>
      . Examples:
    </p>
    <ul>
      <Circle name="black" white />
      <Circle name="silver" />
      <Circle name="gray" />
      <Circle name="white" />
      <Circle name="maroon" white />
      <Circle name="red" />
      <Circle name="purple" white />
      <Circle name="fuchsia" white />
      <Circle name="green" white />
      <Circle name="lime" />
      <Circle name="olive" />
      <Circle name="yellow" />
      <Circle name="navy" white />
      <Circle name="blue" white />
      <Circle name="teal" white />
      <Circle name="aqua" />
      <Circle hex="001f3f" white />
      <Circle hex="0074d9" white />
      <Circle hex="7fdbff" />
      <Circle hex="0074d9" white />
      <Circle hex="b10dc9" white />
      <Circle hex="f012be" white />
      <Circle hex="85144b" white />
      <Circle hex="ff4136" white />
      <Circle hex="ff851b" white />
      <Circle hex="ffdc00" />
      <Circle hex="3d9970" white />
      <Circle hex="2ecc40" />
      <Circle hex="01ff70" />
      <Circle hex="111111" white />
      <Circle hex="aaaaaa" white />
      <Circle hex="dddddd" />
      <Circle hex="ffffff" />
    </ul>
  </Html>
);

const getColor = (color) => {
  if (typeof color !== "string") return null;
  return color.toLowerCase().replace(/\W*/gi, "");
};

export default server({ public: "./public" })
  .get("/", () => <Home />)
  .get("/:color", (ctx) => {
    const color = getColor(ctx.url.params.color);
    if (!color) return redirect("/");
    return (
      <Html color={color}>
        <script src="/fullscreen.js"></script>
      </Html>
    );
  });
