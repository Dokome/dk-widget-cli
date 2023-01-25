const { widget } = jsDesign;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function Widget() {
  return (
    <AutoLayout
      direction="horizontal"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      height="hug-contents"
      padding={8}
      fill="#FFFFFF"
      cornerRadius={8}
      spacing={12}
      onClick={async () => {
        await new Promise((resolve) => {
          jsDesign.showUI(__html__);
          jsDesign.ui.on("message", (msg) => {
            if (msg === "hello") {
              jsDesign.notify("Hello Widgets");
            }
            if (msg === "close") {
              jsDesign.closePlugin();
            }
          });
        });
      }}
    >
      <Text fontSize={32} horizontalAlignText="center">
        Click Me
      </Text>
    </AutoLayout>
  );
}
widget.register(Widget);
