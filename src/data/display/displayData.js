export const displayData = [
  {
    data: "display: block;",
    property: "block",
    containerProperty: "",
    boxProperty: "block",
    insight:
      'Displays an element as a block element. Starting from a new line, the element takes up the whole width of parent component. Here "Box" is displayed as block, taking whole width of parent container. However setting height and width doesnot affect the width utilized by "Box" element as shown.',
    whenNotApplied: [
      "parent div has display property : flex, inline-flex, none, grid, inline-grid.",
    ],
  },
  {
    data: "display: inline;",
    property: "inline",
    containerProperty: "",
    boxProperty: "inline",
    insight:
      "Displays element as inline element, i.e setting height and width becomes ineffective. However you can still set background color.",
    whenNotApplied: [
      "parent div has display property : flex, inline-flex, none, grid, inline-grid.",
    ],
  },
  {
    data: "display: inline-block;",
    property: "inline-block",
    containerProperty: "",
    boxProperty: "inline-block",
    insight:
      "Displays element as inline-block element, i.e A block to which you can set height & width being in-line.",
    whenNotApplied: [
      "parent div has display property : flex, inline-flex, none, grid, inline-grid.",
    ],
  },
  {
    data: "display: flex;",
    property: "flex",
    containerProperty: "flex",
    boxProperty: "",
    insight:
      "Displays element as flex box, and contents inside it will act as flex item. Here, the parent block is set 'flex' which contains elements 'Box'. The child elements (here 'Box') are automatically set to flex-item, overriding their present display properties (here 'box' were set to block) ",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
  {
    data: "display: inline-flex;",
    property: "inline-flex",
    containerProperty: "block",
    boxProperty: "inline-flex",
    insight: "",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
  {
    data: "display: none;",
    property: "none",
    containerProperty: "",
    boxProperty: "none",
    insight: "",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
  {
    data: "display: grid;",
    property: "grid",
    containerProperty: "grid",
    boxProperty: "",
    insight: "",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
  {
    data: "display: inline-grid;",
    property: "inline-grid",
    containerProperty: "",
    boxProperty: "inline-grid",
    insight: "",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
  {
    data: "display: contents",
    property: "contents",
    containerProperty: "",
    boxProperty: "contents",
    insight: "",
    whenNotApplied: [
      "parent div has display property : none, grid, inline-grid.",
    ],
  },
];
