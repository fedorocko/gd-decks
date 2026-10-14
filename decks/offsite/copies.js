/**
 * How the copies of Claude's dashboards stand on slides 11–13
 * (components/Copies.jsx). A slide names one of these arrangements, and the
 * copies move from the last slide's into it.
 *
 *   columns, rows — the grid the copies stand in
 *   groups        — that many grids side by side, a wider gutter between
 *
 * Copies are sized to fit the stage within slide 8's margins, clear of the
 * arrow buttons. A single copy is as large as those allow, like slide 8's
 * screenshot: it is the arrangement after it seen up close, zoomed in on the
 * copy in its middle. Each copy is 16 : 9, the stage's own shape, so a grid
 * fills the stage best when it has about as many columns as rows.
 */
const copies = {
  // Slide 11. The picture on its own: slide 12's grid up close, so that
  // moving on, the view pulls back to the whole grid.
  one: { columns: 1, rows: 1 },
  // Slide 12. Twenty-five: five by five is 16 : 9 itself, and its rows are
  // twice the height of slide 13's.
  grid: { columns: 5, rows: 5 },
  // Slide 13. Ninety, in three columns of three by ten: nine across and ten
  // down come close to 16 : 9 once the gutters are in.
  columns: { columns: 3, rows: 10, groups: 3 },
}

export default copies
