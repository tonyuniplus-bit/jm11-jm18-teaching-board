/* Teaching board pages. Question wording follows the lecture notes.
   Graphs are the original notes figures. A click only reveals the next line. */
const PAGES = [

{ book: "JM11 Errors", part: "Rounding", mode: "teach", title: "Round up and round down",
  top: `<p class="h">Rounding</p>
<div class="pair focus">
<div class="panel">
<p class="sub">Round up</p>
<p>An over-estimate of the actual number.</p>
</div>
<div class="panel">
<p class="sub">Round down</p>
<p>An under-estimate of the actual number.</p>
</div>
</div>
<p class="sub">How to name the digits</p>
<div class="digits">
<div><b>1</b>thousand</div>
<div><b>2</b>hundred</div>
<div><b>3</b>ten</div>
<div><b>4</b>unit</div>
<div><b>·</b></div>
<div><b>5</b>tenth</div>
<div><b>6</b>hundredth</div>
</div>`,
  steps: []},

{ book: "JM11 Errors", part: "Rounding", mode: "teach", title: "Rounding examples",
  top: `<p class="h">Round up, round down, round off（四捨五入）</p>
<div class="grid g2">
<div class="th">Examples</div><div class="th">Original</div><div class="th">Estimate</div>
<div><span class="hot" data-step="1">Round up</span> to the <span class="hot" data-step="1">nearest ten</span></div><div>3<span class="hot" data-step="1">0</span>5.84</div><div class="slot"><span class="fill" data-step="1">310</span></div>
<div><span class="hot" data-step="2">Round down</span> to the <span class="hot" data-step="2">nearest ten</span></div><div>3<span class="hot" data-step="2">0</span>5.84</div><div class="slot"><span class="fill" data-step="2">300</span></div>
<div><span class="hot" data-step="3">Round off</span> to the <span class="hot" data-step="3">nearest integer</span></div><div>28<span class="hot" data-step="3">7</span>.52</div><div class="slot"><span class="fill" data-step="3">288</span></div>
<div><span class="hot" data-step="4">Round up</span> to <span class="hot" data-step="4">2 decimal places</span></div><div>7.2<span class="hot" data-step="4">0</span>63</div><div class="slot"><span class="fill" data-step="4">7.21</span></div>
<div><span class="hot" data-step="5">Round down</span> to <span class="hot" data-step="5">2 decimal places</span></div><div>7.2<span class="hot" data-step="5">0</span>63</div><div class="slot"><span class="fill" data-step="5">7.20</span></div>
<div>Round up / down / off to <span class="hot" data-step="6">4 decimal places</span></div><div>7.206<span class="hot" data-step="6">3</span></div><div class="slot"><span class="fill" data-step="6">7.2063</span></div>
<div><span class="hot" data-step="7">Round off</span> to the <span class="hot" data-step="7">nearest kg</span></div><div><span class="hot" data-step="7">2</span>047.3 g</div><div class="slot"><span class="fill" data-step="7">2 kg</span></div>
</div>`,
  steps: [{}, {}, {}, {}, {}, {}, {}]},

{ book: "JM11 Errors", part: "Rounding", mode: "teach", title: "Significant figures",
  top: `<p class="h">Significant figures</p><p class="sub">Rule</p>
<ul>
<li>All non-zero digits are significant, e.g. 238.7</li>
<li>Zeros between non-zero digits are significant, e.g. 307</li>
<li>Leading zeros are not significant, e.g. 0.0031</li>
<li>Trailing zeros may be significant, e.g. 1030000 (correct to the nearest thousand)</li>
</ul>
<div class="grid g2"><div class="th">Examples</div><div class="th">Original</div><div class="th">Estimate</div>
<div>Correct to <span class="hot" data-step="1">4 significant figures</span></div><div>307.<span class="hot" data-step="1">2</span>019</div><div class="slot"><span class="fill" data-step="1">307.2</span></div>
<div>Correct to <span class="hot" data-step="2">3 significant figures</span></div><div>0.0042<span class="hot" data-step="2">5</span>73</div><div class="slot"><span class="fill" data-step="2">0.00426</span></div>
<div><span class="hot" data-step="3">Round down</span> to <span class="hot" data-step="3">2 significant figures</span></div><div>0.004<span class="hot" data-step="3">2</span>573</div><div class="slot"><span class="fill" data-step="3">0.0042</span></div>
<div><span class="hot" data-step="4">Round up</span> to <span class="hot" data-step="4">2 significant figures</span></div><div>0.3<span class="hot" data-step="4">9</span>852</div><div class="slot"><span class="fill" data-step="4">0.40</span></div>
<div><span class="hot" data-step="5">Round down</span> to <span class="hot" data-step="5">2 significant figures</span></div><div>0.3<span class="hot" data-step="5">9</span>852</div><div class="slot"><span class="fill" data-step="5">0.39</span></div>
</div>`,
  steps: [
    {}, {}, {}, {}, {},
    { tex: "\\sqrt{2019} = 44.93 \\quad \\text{(correct to 4 significant figures)}" }
  ]},

{ book: "JM11 Errors", part: "Rounding", mode: "teach", title: "MC 1    1 / π⁴",
  top: `<p class="h">Multiple choice · Rounding</p>
<p>1. &nbsp; <span class="math" data-tex="\\dfrac{1}{\\pi^{4}} ="></span></p>
<div class="opts">
<div class="pick" data-step="2" data-off="3">A. 0.0102 (correct to 3 significant figures).</div>
<div class="pick" data-step="3" data-off="4">B. 0.01025 (correct to 4 significant figures).</div>
<div class="pick" data-step="4" data-off="5">C. 0.01026 (correct to 5 decimal places).</div>
<div class="pick yes" data-step="5">D. 0.010266 (correct to 6 decimal places).</div>
</div>`,
  steps: [
    { tex: "\\dfrac{1}{\\pi^{4}} = 0.010265982\\ldots" },
    { html: `<p>0.010<span class="hot">2</span>65982… the 3rd s.f. Next digit is 6, so 3 s.f. gives 0.0103.</p>` },
    { html: `<p>0.0102<span class="hot">6</span>5982… the 4th s.f. Next digit is 5, so 4 s.f. gives 0.01027.</p>` },
    { html: `<p>0.0102<span class="hot">6</span>5982… the 5th decimal. Next digit is 5, so 5 d.p. gives 0.01027.</p>` },
    { html: `<p>0.01026<span class="hot">5</span>982… the 6th decimal. Next digit is 9, so 6 d.p. gives 0.010266.</p>` },
    { ans: true, html: `<p>Only D matches. Answer D</p>` }
  ]},

{ book: "JM11 Errors", part: "Rounding", mode: "try", title: "MC 2    0.0765403",
  top: `<p>2. &nbsp; 0.0765403 =</p>
<div class="opts">
<div class="pick" data-step="1" data-off="2">A. 0.076 (round up to 2 significant figures).</div>
<div class="pick" data-step="2" data-off="3">B. 0.0765 (round down to 3 decimal places).</div>
<div class="pick yes" data-step="3">C. 0.07654 (correct to 4 significant figures).</div>
<div class="pick" data-step="4" data-off="5">D. 0.076540 (correct to 5 decimal places).</div>
</div>`,
  steps: [
    { html: `<p>0.07<span class="hot">6</span>5403… the 2nd s.f. Next digit is 5, so round up to 2 s.f. gives 0.077.</p>` },
    { html: `<p>0.07<span class="hot">6</span>5403… the 3rd decimal. Next digit is 5, so round down to 3 d.p. gives 0.076.</p>` },
    { html: `<p>0.0765<span class="hot">4</span>03… the 4th s.f. Next digit is 0, so 4 s.f. gives 0.07654.</p>` },
    { html: `<p>0.0765<span class="hot">4</span>03… the 5th decimal. Next digit is 0, so 5 d.p. gives 0.07654.</p>` },
    { ans: true, html: `<p>Only C matches. Answer C</p>` }
  ]},

{ book: "JM11 Errors", part: "Rounding", mode: "try", title: "MC 3    0.0023456789",
  top: `<p>3. &nbsp; 0.0023456789 =</p>
<div class="opts">
<div class="pick" data-step="1" data-off="2">A. 0.00235 (correct to 3 decimal places).</div>
<div class="pick" data-step="2" data-off="3">B. 0.002345 (round down to 6 significant figures).</div>
<div class="pick yes" data-step="3">C. 0.002346 (round down to 6 decimal places).</div>
<div class="pick" data-step="4" data-off="5">D. 0.01 (round off to 2 decimal places).</div>
</div>`,
  steps: [
    { html: `<p>0.00<span class="hot">2</span>3456789… the 3rd decimal. Next digit is 3, so 3 d.p. gives 0.002.</p>` },
    { html: `<p>0.0023456<span class="hot">7</span>89… the 6th s.f. Next digit is 8, so round down to 6 s.f. gives 0.00234567.</p>` },
    { html: `<p>0.00234<span class="hot">5</span>6789… the 6th decimal. Next digit is 6, so 6 d.p. gives 0.002346.</p>` },
    { html: `<p>0.0<span class="hot">0</span>23456789… the 2nd decimal. Next digit is 2, so round off to 2 d.p. gives 0.00.</p>` },
    { ans: true, html: `<p>Only C matches. Answer C</p>` }
  ]},

{ book: "JM11 Errors", part: "Rounding", mode: "try", title: "MC 4    0.0504545",
  top: `<p>4. &nbsp; 0.0504545 =</p>
<div class="opts">
<div class="pick" data-step="1" data-off="2">A. 0.051 (correct to 2 significant figures).</div>
<div class="pick" data-step="2" data-off="3">B. 0.0505 (correct to 3 decimal places).</div>
<div class="pick yes" data-step="3">C. 0.05045 (correct to 4 significant figures).</div>
<div class="pick" data-step="4" data-off="5">D. 0.05046 (correct to 5 decimal places).</div>
</div>`,
  steps: [
    { html: `<p>0.05<span class="hot">0</span>4545… the 2nd s.f. Next digit is 4, so 2 s.f. gives 0.050.</p>` },
    { html: `<p>0.05<span class="hot">0</span>4545… the 3rd decimal. Next digit is 4, so 3 d.p. gives 0.050.</p>` },
    { html: `<p>0.0504<span class="hot">5</span>45… the 4th s.f. Next digit is 4, so 4 s.f. gives 0.05045.</p>` },
    { html: `<p>0.0504<span class="hot">5</span>45… the 5th decimal. Next digit is 4, so 5 d.p. gives 0.05045.</p>` },
    { ans: true, html: `<p>Only C matches. Answer C</p>` }
  ]},

{ book: "JM11 Errors", part: "Rounding", mode: "teach", title: "Long question 4    Peter, John and Henry",
  top: `<p>4. Three students, Peter, John and Henry have $16.8, $24.3 and $32.5 respectively.</p>
<p>(a) By rounding down the amount owned by each student to the nearest dollar, estimate the total amount they have.</p>
<p>(b) If the three students want to buy a football of price $70, will they have enough money? Use the result of (a) to explain your answer.</p>`,
  steps: [
    { part: "(a)", tex: "16.8 \\to 16,\\quad 24.3 \\to 24,\\quad 32.5 \\to 32" },
    { part: "(a)", ans: true, tex: "\\text{Estimate} = 16 + 24 + 32 = 72" },
    { part: "(b)", gap: true, html: `<p>Rounding down gives an under-estimate, so the actual total is at least $72.</p>` },
    { part: "(b)", tex: "\\text{Check: } 72 \\ge 70" },
    { part: "(b)", ans: true, html: `<p>They have enough money.</p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "Key formulas",
  top: `<p class="h">Errors</p>
<div class="pair">
<div class="panel">
<p class="sub">Actual value is given</p>
<div class="math" data-tex="\\text{Absolute error} = |\\text{actual} - \\text{measured}|"></div>
<div class="math" data-tex="\\text{Relative error} = \\frac{\\text{absolute error}}{\\text{actual value}}"></div>
<div class="math" data-tex="\\text{Percentage error} = \\frac{\\text{absolute error}}{\\text{actual value}} \\times 100\\%"></div>
</div>
<div class="panel">
<p class="sub">Actual value is not given</p>
<div class="math" data-tex="\\text{Maximum absolute error} = \\frac{1}{2}\\text{(smallest scale)}"></div>
<div class="math" data-tex="\\text{Upper limit} = \\text{measured} + \\text{MAE}"></div>
<div class="math" data-tex="\\text{Lower limit} = \\text{measured} - \\text{MAE}"></div>
<div class="math" data-tex="\\text{lower limit} \\le \\text{actual} < \\text{upper limit}"></div>
</div>
</div>`,
  steps: [
    { tex: ["13.68 \\text{ correct to 2 decimal places}",
            "\\text{MAE} = \\dfrac{1}{2}\\times 0.01 = 0.005",
            "\\text{Lower limit of the number} = 13.68 - 0.005 = 13.675",
            "\\text{Upper limit of the number} = 13.68 + 0.005 = 13.685",
            "\\text{Range: } 13.675 \\le \\text{actual} < 13.685"] },
    { tex: ["3481200 \\text{ correct to 5 significant figures}",
            "\\text{MAE} = \\dfrac{1}{2}\\times 100 = 50",
            "\\text{Lower limit of the number} = 3481200 - 50 = 3481150",
            "\\text{Upper limit of the number} = 3481200 + 50 = 3481250",
            "\\text{Range: } 3481150 \\le \\text{actual} < 3481250"] }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "Example    a 500 mL bottle",
  aspect: "9 / 2.6",
  side: "small",
  base: [
    { t: "line", x1: 6, y1: 55, x2: 94, y2: 55, c: "#1565c0" }
  ],
  top: `<p>A bottle of water is standard if its volume is measured as 500 mL correct to the nearest 10 mL.</p>
<p>(a) Find the least possible volume of a standard bottle.</p>
<p>(b) Is it possible that the total volume of 24 standard bottles is measured as 11.8 L correct to the nearest 0.1 L?</p>`,
  steps: [
    { part: "(a)", tex: "\\text{MAE} = \\dfrac{1}{2}\\times 10 = 5\\text{ mL}" },
    { part: "(a)", ans: true, tex: "\\text{Lower limit of one bottle} = 500 - 5 = 495\\text{ mL}" },
    { part: "(b)", gap: true, tex: "\\text{Total volume} = 24 \\times 495 = 11880\\text{ mL} = 11.88\\text{ L}" },
    { part: "(b)", tex: "\\text{11.8 L, nearest 0.1 L: MAE} = \\dfrac{1}{2}\\times 0.1 = 0.05\\text{ L}" },
    { part: "(b)", tex: ["\\text{Lower limit of 11.8 L} = 11.8 - 0.05 = 11.75\\text{ L}",
                        "\\text{Upper limit of 11.8 L} = 11.8 + 0.05 = 11.85\\text{ L}"] },
    { part: "(b)", color: "#0b7a32", tex: "\\text{Range: } 11.75\\text{ L} \\le V < 11.85\\text{ L}",
      marks: [
        { t: "rect", x: 22, y: 42, w: 28, h: 26, c: "#0b7a32", fill: "#0b7a32" },
        { t: "lab", x: 22, y: 55, tx: "11.75 L", c: "#0b7a32", place: "below" },
        { t: "lab", x: 50, y: 55, tx: "11.85 L", c: "#0b7a32", place: "below" }
      ] },
    { part: "(b)", ans: true, html: `<p><span class="math" data-tex="11.88\\text{ L} > 11.85\\text{ L}"></span>. The claim is disagreed.</p>`,
      marks: [
        { t: "line", x1: 58.4, y1: 36, x2: 58.4, y2: 68, c: "#d00000", sw: 4 },
        { t: "lab", x: 58.4, y: 55, tx: "11.88 L", c: "#d00000", place: "above" }
      ] }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "MC 3    Sarah, percentage error",
  top: `<p>3. A bottle has an actual capacity of 1000 mL. Sarah measures it as 1015 mL. What is the percentage error of her measurement?</p>
<div class="opts"><div>A. 1.0%</div><div>B. 1.5%</div><div>C. 2.0%</div><div>D. 2.5%</div></div>
<p>The actual value is given, so use the actual value.</p>`,
  steps: [
    { tex: "\\text{Absolute error} = |1015 - 1000| = 15\\text{ mL}" },
    { tex: "\\text{Percentage error} = \\dfrac{15}{1000}\\times 100\\% = 1.5\\%" },
    { ans: true, html: `<p>Answer B</p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "try", title: "MC 4    James, relative error",
  top: `<p>4. The actual time for an experiment is 30 seconds. James measures it as 28.5 seconds. What is the relative error of his measurement?</p>
<div class="opts"><div>A. 0.04</div><div>B. 0.05</div><div>C. 0.06</div><div>D. 0.07</div></div>`,
  steps: [
    { tex: "\\text{Absolute error} = |30 - 28.5| = 1.5\\text{ s}" },
    { tex: "\\text{Relative error} = \\dfrac{1.5}{30} = 0.05" },
    { ans: true, html: `<p>Answer B</p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "try", title: "MC 7    the octagon",
  fig: "figures/octagon.png?v=4",
  side: "read",
  top: `<p>7. ABCDEFGH is an octagon. All measurements are correct to the nearest cm. Let <span class="math" data-tex="x\\text{ cm}^{2}"></span> be the actual area. Find the range of <span class="math" data-tex="x"></span>.</p>
<div class="opts">
<div>A. <span class="math" data-tex="13\\text{ cm}^{2} < x < 23\\text{ cm}^{2}"></span></div>
<div>B. <span class="math" data-tex="13\\text{ cm}^{2} < x < 27\\text{ cm}^{2}"></span></div>
<div>C. <span class="math" data-tex="17\\text{ cm}^{2} < x < 23\\text{ cm}^{2}"></span></div>
<div>D. <span class="math" data-tex="17\\text{ cm}^{2} < x < 27\\text{ cm}^{2}"></span></div>
</div>
<p>Area = the 6 cm by 4 cm rectangle, minus the notch.</p>`,
  steps: [
    { color: "#d00000", html: `<p>Shade the notch. That piece is removed.</p>`,
      marks: [
        { t: "rect", x: 39.0, y: 13.6, w: 24.0, h: 35.2, c: "#d00000" },
        { t: "lab", x: 51, y: 28, tx: "notch", c: "#d00000" }
      ] },
    { tex: "\\text{MAE} = \\dfrac{1}{2}\\times 1 = 0.5\\text{ cm}" },
    { color: "#c47d00", tex: [
            "\\text{Upper limit of } BC = 6 + 0.5 = 6.5\\text{ cm}",
            "\\text{Upper limit of } AB = 4 + 0.5 = 4.5\\text{ cm}",
            "\\text{Lower limit of } HG = 2 - 0.5 = 1.5\\text{ cm}",
            "\\text{Lower limit of } GF = 2 - 0.5 = 1.5\\text{ cm}",
            "\\text{Greatest area} = 6.5 \\times 4.5 - 1.5 \\times 1.5 = 27\\text{ cm}^{2}"],
      marks: [
        { t: "lab", x: 50, y: 80, tx: "BC 6.5", c: "#c47d00", off: 4 },
        { t: "lab", x: 22, y: 68, tx: "AB 4.5", c: "#c47d00", off: 4 },
        { t: "lab", x: 34, y: 22, tx: "HG 1.5", c: "#c47d00", off: 4 },
        { t: "lab", x: 51, y: 56, tx: "GF 1.5", c: "#c47d00", off: 4 }
      ] },
    { color: "#0b7a32", tex: [
            "\\text{Lower limit of } BC = 6 - 0.5 = 5.5\\text{ cm}",
            "\\text{Lower limit of } AB = 4 - 0.5 = 3.5\\text{ cm}",
            "\\text{Upper limit of } HG = 2 + 0.5 = 2.5\\text{ cm}",
            "\\text{Upper limit of } GF = 2 + 0.5 = 2.5\\text{ cm}",
            "\\text{Least area} = 5.5 \\times 3.5 - 2.5 \\times 2.5 = 13\\text{ cm}^{2}"],
      marks: [
        { t: "lab", x: 50, y: 80, tx: "BC 5.5", c: "#0b7a32" },
        { t: "lab", x: 22, y: 68, tx: "AB 3.5", c: "#0b7a32" },
        { t: "lab", x: 34, y: 22, tx: "HG 2.5", c: "#0b7a32" },
        { t: "lab", x: 51, y: 56, tx: "GF 2.5", c: "#0b7a32" }
      ] },
    { ans: true, color: "#1c1917", html: `<p><span class="math" style="color:#0b7a32" data-tex="13\\text{ cm}^{2}"></span> &lt; <span class="math" data-tex="x"></span> &lt; <span class="math" style="color:#c47d00" data-tex="27\\text{ cm}^{2}"></span>. <span style="color:#065f46">Answer B</span></p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "MC 10    the string",
  aspect: "8 / 5",
  base: [
    { t: "line", x1: 8, y1: 98, x2: 92, y2: 98, c: "#f6f1e8" }
  ],
  top: `<p>10. A string measures 25 m, correct to the nearest metre.</p>
<p>It is cut into <span class="math" data-tex="n"></span> pieces. Each piece measures 5 cm, correct to the nearest cm.</p>
<p>Find the greatest possible <span class="math" data-tex="n"></span>.</p>
<div class="opts"><div>A. 445</div><div>B. 566</div><div>C. 567</div><div>D. 650</div></div>`,
  steps: [
    { tex: [
        { s: "\\text{Lower limit of the string} = 25 - 0.5 = 24.5\\text{ m}", c: "#0b7a32" },
        { s: "\\text{Upper limit of the string} = 25 + 0.5 = 25.5\\text{ m}", c: "#d00000" }
      ] },
    { tex: "\\text{Largest string} = \\textcolor{#d00000}{25.5\\text{ m}} = \\textcolor{#d00000}{2550\\text{ cm}}",
      marks: [
        { t: "rect", x: 8, y: 16, w: 84, h: 20, c: "#d00000", fill: "#d00000" },
        { t: "lab", x: 50, y: 26, tx: "largest string 2550 cm", c: "#d00000" }
      ] },
    { color: "#0b7a32", tex: "\\text{Smallest piece} = 5 - 0.5 = 4.5\\text{ cm}",
      html: `<p>Greatest number of pieces = largest string ÷ smallest piece.</p>`,
      marks: [
        { t: "rect", x: 8, y: 58, w: 16, h: 16, c: "#0b7a32", fill: "#0b7a32" },
        { t: "rect", x: 26, y: 58, w: 16, h: 16, c: "#0b7a32", fill: "#0b7a32" },
        { t: "rect", x: 44, y: 58, w: 16, h: 16, c: "#0b7a32", fill: "#0b7a32" },
        { t: "rect", x: 62, y: 58, w: 16, h: 16, c: "#0b7a32", fill: "#0b7a32" },
        { t: "lab", x: 40, y: 82, tx: "smallest piece 4.5 cm", c: "#0b7a32" }
      ] },
    { tex: "n = \\dfrac{\\textcolor{#d00000}{2550}}{\\textcolor{#0b7a32}{4.5}} = 566.6\\ldots" },
    { color: "#0b7a32", tex: "566 \\times 4.5 = 2547 < 2550" },
    { color: "#d00000", tex: "567 \\times 4.5 = 2551.5 > 2550" },
    { ans: true, html: `<p>Greatest n = 566. Answer B</p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "Long question 1    the metal sheet",
  fig: "figures/sheet_d.png?v=2",
  side: "read",
  top: `<p>1. ABCDEF is a thin metal sheet. All measurements are correct to the nearest cm.</p>
<p>(a) Write down the maximum absolute error.</p>
<p>(b) Find the least possible area.</p>
<p>(c) The actual area is <span class="math" data-tex="x\\text{ cm}^{2}"></span>. Find the range of <span class="math" data-tex="x"></span>.</p>
<p>Cut the sheet into an 18 cm by 12 cm rectangle and a 15 cm by 2 cm rectangle.</p>`,
  steps: [
    { part: "(a)", ans: true, tex: "\\text{MAE} = \\dfrac{1}{2}\\times 1 = 0.5\\text{ cm}",
      marks: [{ t: "line", x1: 5.4, y1: 64.6, x2: 53, y2: 64.6, c: "#d00000" },
              { t: "lab", x: 36, y: 40, tx: "18 × 12", c: "#1565c0" },
              { t: "lab", x: 22, y: 76, tx: "15 × 2", c: "#0b7a32" }] },
    { part: "(b)", gap: true, color: "#0b7a32", tex: [
            "\\text{Lower limit of } AB = 18 - 0.5 = 17.5\\text{ cm}",
            "\\text{Lower limit of } BC = 12 - 0.5 = 11.5\\text{ cm}",
            "\\text{Lower limit of } FE = 15 - 0.5 = 14.5\\text{ cm}",
            "\\text{Lower limit of } DE = 2 - 0.5 = 1.5\\text{ cm}"],
      marks: [
        { t: "lab", x: 24, y: 12, tx: "AB 17.5", c: "#0b7a32", off: 4 },
        { t: "lab", x: 71, y: 52, tx: "BC 11.5", c: "#0b7a32", off: 4 },
        { t: "lab", x: 16, y: 93, tx: "FE 14.5", c: "#0b7a32", off: 4 },
        { t: "lab", x: 34, y: 74, tx: "DE 1.5", c: "#0b7a32", off: 4 }
      ] },
    { part: "(b)", ans: true, color: "#0b7a32", tex: ["\\text{Least possible area} = 17.5 \\times 11.5 + 14.5 \\times 1.5",
                                   "= 201.25 + 21.75 = 223\\text{ cm}^{2}"] },
    { part: "(c)", gap: true, color: "#c47d00", tex: [
            "\\text{Upper limit of } AB = 18 + 0.5 = 18.5\\text{ cm}",
            "\\text{Upper limit of } BC = 12 + 0.5 = 12.5\\text{ cm}",
            "\\text{Upper limit of } FE = 15 + 0.5 = 15.5\\text{ cm}",
            "\\text{Upper limit of } DE = 2 + 0.5 = 2.5\\text{ cm}"],
      marks: [
        { t: "lab", x: 52, y: 12, tx: "AB 18.5", c: "#c47d00" },
        { t: "lab", x: 71, y: 26, tx: "BC 12.5", c: "#c47d00" },
        { t: "lab", x: 42, y: 93, tx: "FE 15.5", c: "#c47d00" },
        { t: "lab", x: 60, y: 78, tx: "DE 2.5", c: "#c47d00" }
      ] },
    { part: "(c)", color: "#c47d00", tex: ["\\text{Upper boundary} = 18.5 \\times 12.5 + 15.5 \\times 2.5",
                                    "= 231.25 + 38.75 = 270\\text{ cm}^{2}"] },
    { part: "(c)", ans: true, color: "#1c1917", html: `<p>Range: <span class="math" style="color:#0b7a32" data-tex="223\\text{ cm}^{2}"></span> ≤ <span class="math" data-tex="x"></span> &lt; <span class="math" style="color:#c47d00" data-tex="270\\text{ cm}^{2}"></span></p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "Long question 4    200 mL bottles",
  aspect: "9 / 2.6",
  side: "small",
  base: [
    { t: "line", x1: 6, y1: 55, x2: 94, y2: 55, c: "#1565c0" }
  ],
  top: `<p>4. A bottle is standard if its capacity is measured as 200 mL correct to the nearest 10 mL.</p>
<p>(a) Find the least possible capacity of a standard bottle.</p>
<p>(b) Someone claims that the total capacity of 120 standard bottles can be measured as 23.3 L correct to the nearest 0.1 L. Do you agree?</p>`,
  steps: [
    { part: "(a)", tex: "\\text{MAE} = \\dfrac{1}{2}\\times 10 = 5\\text{ mL}" },
    { part: "(a)", tex: ["\\text{Lower limit of one bottle} = 200 - 5 = 195\\text{ mL}",
                        "\\text{Upper limit of one bottle} = 200 + 5 = 205\\text{ mL}"] },
    { part: "(a)", ans: true, tex: "\\text{Range: } 195\\text{ mL} \\le c < 205\\text{ mL}" },
    { part: "(b)", gap: true, color: "#9f1239", tex: ["\\text{Least total} = 120 \\times 195 = 23400\\text{ mL} = 23.4\\text{ L}",
                                   "\\text{Upper total} = 120 \\times 205 = 24600\\text{ mL} = 24.6\\text{ L}"] },
    { part: "(b)", color: "#9f1239", tex: "\\text{Range: } 23.4\\text{ L} \\le T < 24.6\\text{ L}",
      marks: [{ t: "lab", x: 48, y: 55, tx: "23.4 L", c: "#9f1239", place: "below" },
              { t: "lab", x: 82, y: 55, tx: "24.6 L", c: "#9f1239", place: "below" },
              { t: "rect", x: 48, y: 42, w: 34, h: 26, c: "#9f1239", fill: "#9f1239" }] },
    { part: "(b)", tex: "\\text{23.3 L, nearest 0.1 L: MAE} = \\dfrac{1}{2}\\times 0.1 = 0.05\\text{ L}" },
    { part: "(b)", color: "#0b7a32", tex: ["\\text{Lower limit of 23.3 L} = 23.3 - 0.05 = 23.25\\text{ L}",
                        "\\text{Upper limit of 23.3 L} = 23.3 + 0.05 = 23.35\\text{ L}"],
      marks: [{ t: "lab", x: 12, y: 55, tx: "23.25 L", c: "#0b7a32", place: "below" },
              { t: "lab", x: 30, y: 55, tx: "23.35 L", c: "#0b7a32", place: "below" }] },
    { part: "(b)", color: "#0b7a32", tex: "\\text{Range: } 23.25\\text{ L} \\le V < 23.35\\text{ L}",
      marks: [{ t: "rect", x: 12, y: 42, w: 18, h: 26, c: "#0b7a32", fill: "#0b7a32" }] },
    { part: "(b)", color: "#1c1917", html: `<p><span class="math" style="color:#9f1239" data-tex="23.4\\text{ L}"></span> is outside the <span style="color:#0b7a32">green interval</span>.</p>` },
    { part: "(b)", ans: true, html: `<p>The claim is disagreed.</p>` }
  ]},

{ book: "JM11 Errors", part: "Errors", mode: "teach", title: "Long question 5    water tanks",
  aspect: "9 / 2.6",
  side: "small",
  base: [
    { t: "line", x1: 6, y1: 55, x2: 94, y2: 55, c: "#1565c0" }
  ],
  top: `<p>5. A water tank is standard if its capacity is measured as 500 L correct to the nearest 5 L.</p>
<p>(a) Find the least possible capacity of a standard tank.</p>
<p>(b) A swimming pool needs 8500 L. Someone claims that 18 standard tanks can be measured as 8500 L correct to the nearest 50 L. Do you agree?</p>`,
  steps: [
    { part: "(a)", tex: "\\text{MAE} = \\dfrac{1}{2}\\times 5 = 2.5\\text{ L}" },
    { part: "(a)", tex: ["\\text{Lower limit of one tank} = 500 - 2.5 = 497.5\\text{ L}",
                        "\\text{Upper limit of one tank} = 500 + 2.5 = 502.5\\text{ L}"] },
    { part: "(a)", ans: true, tex: "\\text{Range: } 497.5\\text{ L} \\le c < 502.5\\text{ L}" },
    { part: "(b)", gap: true, color: "#9f1239", tex: ["\\text{Least total} = 18 \\times 497.5 = 8955\\text{ L}",
                                   "\\text{Upper total} = 18 \\times 502.5 = 9045\\text{ L}"] },
    { part: "(b)", color: "#9f1239", tex: "\\text{Range: } 8955\\text{ L} \\le T < 9045\\text{ L}",
      marks: [{ t: "lab", x: 58, y: 55, tx: "8955 L", c: "#9f1239", place: "below" },
              { t: "lab", x: 84, y: 55, tx: "9045 L", c: "#9f1239", place: "below" },
              { t: "rect", x: 58, y: 42, w: 26, h: 26, c: "#9f1239", fill: "#9f1239" }] },
    { part: "(b)", tex: "\\text{8500 L, nearest 50 L: MAE} = \\dfrac{1}{2}\\times 50 = 25\\text{ L}" },
    { part: "(b)", color: "#0b7a32", tex: ["\\text{Lower limit of 8500 L} = 8500 - 25 = 8475\\text{ L}",
                        "\\text{Upper limit of 8500 L} = 8500 + 25 = 8525\\text{ L}"],
      marks: [{ t: "lab", x: 12, y: 55, tx: "8475 L", c: "#0b7a32", place: "below" },
              { t: "lab", x: 32, y: 55, tx: "8525 L", c: "#0b7a32", place: "below" }] },
    { part: "(b)", color: "#0b7a32", tex: "\\text{Range: } 8475\\text{ L} \\le V < 8525\\text{ L}",
      marks: [{ t: "rect", x: 12, y: 42, w: 20, h: 26, c: "#0b7a32", fill: "#0b7a32" }] },
    { part: "(b)", color: "#1c1917", html: `<p><span class="math" style="color:#9f1239" data-tex="8955\\text{ L}"></span> is far above the <span style="color:#0b7a32">green interval</span>.</p>` },
    { part: "(b)", ans: true, html: `<p>The claim is disagreed.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Class intervals", mode: "teach", title: "Class interval, mark, boundaries, width",
  aspect: "9 / 4.4",
  base: [
    { t: "line", x1: 8, y1: 52, x2: 92, y2: 52, c: "#1565c0" }
  ],
  top: `<p class="h">Class interval</p><p>Use the class <span class="u">10 m</span> – <span class="u">14 m</span>.</p>`,
  steps: [
    { color: "#1565c0", html: `<p>Class interval: <span class="u">10 m</span> – <span class="u">14 m</span></p>`,
      marks: [{ t: "lab", x: 26, y: 52, tx: "10 m", c: "#1565c0", place: "below" },
              { t: "lab", x: 74, y: 52, tx: "14 m", c: "#1565c0", place: "below" },
              { t: "line", x1: 26, y1: 40, x2: 26, y2: 64, c: "#1565c0" },
              { t: "line", x1: 74, y1: 40, x2: 74, y2: 64, c: "#1565c0" }] },
    { color: "#c47d00", tex: ["\\text{Class mark} = (10\\text{ m} + 14\\text{ m}) \\div 2",
                              "= 12\\text{ m}"],
      marks: [{ t: "lab", x: 50, y: 52, tx: "12 m", c: "#c47d00", place: "above" },
              { t: "line", x1: 50, y1: 40, x2: 50, y2: 64, c: "#c47d00" }] },
    { color: "#d00000", html: `<p>Class boundaries<br><span class="u">9.5 m and 14.5 m</span></p>`,
      marks: [{ t: "lab", x: 16, y: 52, tx: "9.5 m", c: "#d00000", place: "below" },
              { t: "lab", x: 84, y: 52, tx: "14.5 m", c: "#d00000", place: "below" },
              { t: "line", x1: 16, y1: 40, x2: 16, y2: 76, c: "#d00000" },
              { t: "line", x1: 84, y1: 40, x2: 84, y2: 76, c: "#d00000" }] },
    { color: "#0b7a32", tex: ["\\text{Class width} = 14.5\\text{ m} - 9.5\\text{ m}",
                              "= 5\\text{ m}"],
      marks: [{ t: "line", x1: 16, y1: 18, x2: 84, y2: 18, c: "#0b7a32" },
              { t: "lab", x: 50, y: 18, tx: "5 m", c: "#0b7a32", place: "above" }] }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "Histogram",
  fig: "figures/wages.png?v=1",
  side: "read",
  top: `<p class="h" style="color:#c00000;text-decoration:none;background:#f8e0e0;display:inline-block;padding:2px 8px">Histogram</p>
<p>Example. Hourly wages paid by 55 restaurants.</p>
<div class="grid" style="grid-template-columns:1.15fr 1.45fr .85fr .9fr">
<div class="th">Hourly wage ($)</div><div class="th">Class boundaries ($)</div><div class="th">Class mark ($)</div><div class="th">Frequency</div>
<div>25 – 29</div><div>24.5 – 29.5</div><div>27</div><div>15</div>
<div>30 – 34</div><div>29.5 – 34.5</div><div>32</div><div>22</div>
<div>35 – 39</div><div>34.5 – 39.5</div><div>37</div><div>11</div>
<div>40 – 44</div><div>39.5 – 44.5</div><div>42</div><div>4</div>
<div>45 – 49</div><div>44.5 – 49.5</div><div>47</div><div>3</div>
</div>`,
  steps: [
    { html: `<p>Each bar runs from the lower class boundary to the upper class boundary. The label under the bar is the class mark, and the height is the frequency.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "Frequency polygon",
  fig: "figures/poly_eg.png?v=4",
  side: "read",
  top: `<p class="h" style="color:#c00000;text-decoration:none;background:#f8e0e0;display:inline-block;padding:2px 8px">Frequency polygon</p>
<p>Example. Time spent by 60 customers in a supermarket.</p>
<div class="grid" style="grid-template-columns:repeat(3,1fr)">
<div class="th">Time (min)</div><div class="th">Class mark</div><div class="th">Customers</div>
<div>11 – 20</div><div>15.5</div><div>9</div>
<div>21 – 30</div><div>25.5</div><div>21</div>
<div>31 – 40</div><div>35.5</div><div>16</div>
<div>41 – 50</div><div>45.5</div><div>8</div>
<div>51 – 60</div><div>55.5</div><div>4</div>
<div>61 – 70</div><div>65.5</div><div>2</div>
</div>`,
  steps: [
    { html: `<p>Plot each frequency at the class mark, then join the points. The ends meet the axis one class width outside.</p>` },
    { html: `<p>A frequency curve is a frequency polygon smoothed into a curve. Read it as a frequency polygon: the horizontal axis uses class marks.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "MC 1    heights of teenagers",
  fig: "figures/teens.png?v=3",
  side: "read",
  top: `<p>1. The histogram shows the heights of a group of teenagers.</p>
<p>Which of the following must be correct?</p>
<div class="roman">
<div>I. <span style="color:#d00000">6 teenagers in the group are 163 cm tall.</span></div>
<div>II. <span style="color:#1565c0">The class width of each class interval is 5 cm.</span></div>
<div>III. <span style="color:#0b7a32">The 3 tallest teenagers are at least 170.5 cm tall.</span></div>
</div>
<div class="opts"><div>A. I and II only</div><div>B. I and III only</div><div>C. II and III only</div><div>D. I, II and III</div></div>`,
  steps: [
    { color: "#d00000", html: `<p>The red class has class mark 163. Its frequency is 6, so those 6 teenagers are not all exactly 163 cm. I is false.</p>`,
      marks: [{ t: "rect", x: 47.0, y: 18.7, w: 11.3, h: 57.2, c: "#d00000" },
              { t: "line", x1: 12.6, y1: 58.8, x2: 58.3, y2: 58.8, c: "#d00000" },
              { t: "line", x1: 52.6, y1: 58.8, x2: 52.6, y2: 75.9, c: "#d00000" },
              { t: "lab", x: 12.6, y: 58.8, tx: "6", c: "#d00000", place: "left" }] },
    { color: "#1565c0", tex: "\\text{Class width} = 165.5 - 160.5 = 5\\text{ cm}",
      html: `<p>II is true.</p>`,
      marks: [{ t: "line", x1: 47.0, y1: 18.7, x2: 47.0, y2: 75.9, c: "#1565c0" },
              { t: "line", x1: 58.3, y1: 18.7, x2: 58.3, y2: 75.9, c: "#1565c0" },
              { t: "lab", x: 47, y: 75.9, tx: "160.5", c: "#1565c0", place: "below" },
              { t: "lab", x: 58.3, y: 75.9, tx: "165.5", c: "#1565c0", place: "below" }] },
    { color: "#0b7a32", html: `<p>The two green classes start at 170.5 cm. Their frequencies are 3 and 1, so 4 teenagers are at least 170.5 cm. The 3 tallest are among them. III is true.</p>`,
      marks: [{ t: "rect", x: 69.7, y: 18.7, w: 22.6, h: 57.2, c: "#0b7a32", fill: "#0b7a32" },
              { t: "line", x1: 12.6, y1: 67.2, x2: 80.9, y2: 67.2, c: "#0b7a32" },
              { t: "line", x1: 75.3, y1: 67.2, x2: 75.3, y2: 75.9, c: "#0b7a32" },
              { t: "line", x1: 12.6, y1: 73.2, x2: 92.2, y2: 73.2, c: "#0b7a32" },
              { t: "line", x1: 86.5, y1: 73.2, x2: 86.5, y2: 75.9, c: "#0b7a32" },
              { t: "line", x1: 69.7, y1: 18.7, x2: 69.7, y2: 75.9, c: "#0b7a32" },
              { t: "lab", x: 12.6, y: 67.2, tx: "3", c: "#0b7a32", place: "left" },
              { t: "lab", x: 12.6, y: 73.2, tx: "1", c: "#0b7a32", place: "left" },
              { t: "lab", x: 69.7, y: 75.9, tx: "170.5", c: "#0b7a32", place: "below" }] },
    { ans: true, html: `<p>Answer C</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "MC 6    two universities",
  fig: "figures/salary.png",
  side: "read",
  top: `<p>6. The frequency curves show the monthly salaries of graduates from two universities.</p>
<div class="roman">
<div>I. University A has more graduates.</div>
<div>II. Graduates from A have higher monthly salaries on the whole.</div>
<div>III. Graduates from B have higher monthly salaries on the whole.</div>
</div>
<div class="opts"><div>A. II only</div><div>B. III only</div><div>C. I and II only</div><div>D. I and III only</div></div>`,
  steps: [
    { html: `<p>Read the horizontal axis, not the height of the peak. B’s curve sits to the right of A’s curve, so B’s graduates have higher salaries on the whole. III is true and II is false.</p>` },
    { html: `<p>The higher peak of A does not tell us that A has more graduates. Compare the areas under the curves. I is not must-be-true.</p>` },
    { ans: true, html: `<p>Answer B</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "Long question 1    oil paintings",
  fig: "figures/paint.png",
  side: "read",
  top: `<p>1. Sammi organises the marked prices of oil paintings in two ways.</p>
<p>(a) Complete the frequency tables for histogram A and histogram B.</p>
<p>(b) Find the class width of each histogram.</p>
<p>(c) The paintings are sold at 20% off. Benny has $240000. Does he have enough money to buy the 5 most expensive paintings?</p>
<p class="cap">Histogram A</p>
<div class="grid" style="grid-template-columns:minmax(6.6em,.9fr) repeat(4,1fr)">
<div class="th">A ($1000)</div><div>38.5–45.5</div><div>45.5–52.5</div><div>52.5–59.5</div><div>59.5–66.5</div>
<div class="th">Frequency</div><div class="slot"><span class="fill" data-step="1">3</span></div><div class="slot"><span class="fill" data-step="1">13</span></div><div class="slot"><span class="fill" data-step="1">29</span></div><div class="slot"><span class="fill" data-step="1">5</span></div>
</div>
<p class="cap">Histogram B</p>
<div class="grid" style="grid-template-columns:minmax(6.6em,.9fr) repeat(5,1fr)">
<div class="th">B ($1000)</div><div>42.5–47.5</div><div>47.5–52.5</div><div>52.5–57.5</div><div>57.5–62.5</div><div>62.5–67.5</div>
<div class="th">Frequency</div><div class="slot"><span class="fill" data-step="2">6</span></div><div class="slot"><span class="fill" data-step="2">10</span></div><div class="slot"><span class="fill" data-step="2">24</span></div><div class="slot"><span class="fill" data-step="2">8</span></div><div class="slot"><span class="fill" data-step="2">2</span></div>
</div>`,
  steps: [
    { part: "(a)", html: `<p>Count the blocks in histogram A.</p>` },
    { part: "(a)", html: `<p>Count the blocks in histogram B.</p>` },
    { part: "(b)", gap: true, ans: true, tex: "\\text{Width of A} = 7000, \\qquad \\text{width of B} = 5000" },
    { part: "(c)", gap: true, html: `<p>From A, all 5 dearest paintings are at least $59500. From B, 2 of them are at least $62500.</p>` },
    { part: "(c)", tex: "\\text{Least marked price} = 2 \\times 62500 + 3 \\times 59500 = 303500" },
    { part: "(c)", tex: ["\\text{Selling price} = 303500 \\times (100\\% - 20\\%)",
                         "= 303500 \\times 80\\% = 242800 > 240000"] },
    { part: "(c)", ans: true, html: `<p>Benny does not have enough money.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "try", title: "MC 4    waterfalls",
  fig: "figures/falls.png?v=3",
  side: "read",
  top: `<p>4. The histogram shows the heights of waterfalls. What percentage have height less than <span style="color:#d00000">38.5 m</span>?</p>
<div class="opts"><div>A. 11.25%</div><div>B. 23.75%</div><div>C. 35%</div><div>D. 62.5%</div></div>`,
  steps: [
    { color: "#1c1917", html: `<p><span style="color:#d00000">38.5 m</span> is the class boundary after the second bar. Count the blocks in the <span style="color:#0b7a32">green region</span>, then count the whole histogram.</p>`,
      marks: [{ t: "rect", x: 28.0, y: 7.8, w: 21.3, h: 74.4, c: "#0b7a32", fill: "#0b7a32" },
              { t: "line", x1: 49.3, y1: 7.8, x2: 49.3, y2: 82.2, c: "#d00000" },
              { t: "line", x1: 16.8, y1: 57.8, x2: 38.4, y2: 57.8, c: "#0b7a32" },
              { t: "line", x1: 33.1, y1: 57.8, x2: 33.1, y2: 82.2, c: "#0b7a32" },
              { t: "line", x1: 16.8, y1: 30.8, x2: 49.1, y2: 30.8, c: "#0b7a32" },
              { t: "line", x1: 43.9, y1: 30.8, x2: 43.9, y2: 82.2, c: "#0b7a32" },
              { t: "lab", x: 16.8, y: 57.8, tx: "18", c: "#0b7a32", place: "left" },
              { t: "lab", x: 16.8, y: 30.8, tx: "38", c: "#0b7a32", place: "left" },
              { t: "lab", x: 49.3, y: 82.2, tx: "38.5", c: "#d00000", place: "below" }] },
    { color: "#0b7a32", tex: "\\text{Below 38.5 m} = 18 + 38 = 56,\\quad \\text{total} = 160" },
    { tex: "\\text{Percentage} = \\dfrac{56}{160}\\times 100\\% = 35\\%" },
    { ans: true, html: `<p>Answer C</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "try", title: "MC 5    body temperature",
  fig: "figures/temp.png?v=4",
  side: "read",
  top: `<p>5. The frequency polygon shows the body temperatures of some patients.</p>
<div class="roman">
<div>I. There are 14 patients with body temperature <span style="color:#d00000">36.5°C or above</span>.</div>
<div>II. The body temperatures of all patients are <span style="color:#1565c0">less than 38.5°C</span>.</div>
</div>
<div class="opts"><div>A. I only</div><div>B. II only</div><div>C. I and II</div><div>D. None of the above</div></div>`,
  steps: [
    { html: `<p>Read the crosses: frequency 0, 4, 14, 6, 0 at class marks 35, 36, 37, 38, 39.</p>`,
      marks: [
        { t: "line", x1: 17.6, y1: 60.29, x2: 44.43, y2: 60.29, c: "#c47d00" },
        { t: "line", x1: 44.43, y1: 60.29, x2: 44.43, y2: 70.7, c: "#c47d00" },
        { t: "line", x1: 17.6, y1: 33.68, x2: 57.95, y2: 33.68, c: "#c47d00" },
        { t: "line", x1: 57.95, y1: 33.68, x2: 57.95, y2: 70.7, c: "#c47d00" },
        { t: "line", x1: 17.6, y1: 54.26, x2: 71.14, y2: 54.26, c: "#c47d00" },
        { t: "line", x1: 71.14, y1: 54.26, x2: 71.14, y2: 70.7, c: "#c47d00" },
        { t: "lab", x: 17.6, y: 60.29, tx: "4", c: "#c47d00", place: "left" },
        { t: "lab", x: 17.6, y: 33.68, tx: "14", c: "#c47d00", place: "left" },
        { t: "lab", x: 17.6, y: 54.26, tx: "6", c: "#c47d00", place: "left" }
      ] },
    { color: "#d00000", tex: "\\text{36.5°C or above uses the classes of marks 37 and 38: } 14 + 6 = 20 \\neq 14",
      marks: [{ t: "line", x1: 51.3, y1: 16, x2: 51.3, y2: 70.7, c: "#d00000" },
              { t: "lab", x: 51.3, y: 70.7, tx: "36.5", c: "#d00000", place: "below" }] },
    { html: `<p>I is false.</p>` },
    { color: "#1565c0", html: `<p>The last class with patients has class mark 38, so its upper boundary is 38.5°C. II is true.</p>`,
      marks: [{ t: "line", x1: 77.8, y1: 16, x2: 77.8, y2: 70.7, c: "#1565c0" },
              { t: "lab", x: 77.8, y: 70.7, tx: "38.5", c: "#1565c0", place: "below" }] },
    { ans: true, html: `<p>Answer B</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "try", title: "Long question 3    IQ scores",
  top: `<p>3. IQ scores of 20 students.</p>
<table class="stem"><tr><td class="s"><b>Stem (tens)</b></td><td><b>Leaf (units)</b></td></tr>
<tr><td class="s">9</td><td>1 &nbsp; 2 &nbsp; 3</td></tr>
<tr><td class="s">10</td><td>2 &nbsp; 3 &nbsp; 5 &nbsp; 6 &nbsp; 6</td></tr>
<tr><td class="s">11</td><td>4 &nbsp; 5 &nbsp; 6 &nbsp; 7 &nbsp; 8 &nbsp; 9</td></tr>
<tr><td class="s">12</td><td>0 &nbsp; 2 &nbsp; 3 &nbsp; 9</td></tr>
<tr><td class="s">13</td><td>0 &nbsp; 0</td></tr></table>
<p>(a) Andrew uses classes 90–104, 105–119, 120–134.</p>
<p>(b) Belinda uses classes of width 10, from 90–99 to 130–139.</p>
<p>(c) Whose histogram presents the scores better?</p>
<p class="cap">Andrew</p>
<div class="grid" style="grid-template-columns:1.15fr .85fr 1.35fr">
<div class="th">IQ score</div><div class="th">Class mark</div><div class="th">Number of students</div>
<div>90 – 104</div><div>97</div><div class="slot"><span class="fill" data-step="1">5</span></div>
<div>105 – 119</div><div class="slot"><span class="fill" data-step="1">112</span></div><div class="slot"><span class="fill" data-step="1">9</span></div>
<div>120 – 134</div><div class="slot"><span class="fill" data-step="1">127</span></div><div class="slot"><span class="fill" data-step="1">6</span></div>
</div>
<p class="cap">Belinda</p>
<div class="grid" style="grid-template-columns:1.15fr .85fr 1.35fr">
<div class="th">IQ score</div><div class="th">Class mark</div><div class="th">Number of students</div>
<div>90 – 99</div><div>94.5</div><div class="slot"><span class="fill" data-step="2">3</span></div>
<div>100 – 109</div><div class="slot"><span class="fill" data-step="2">104.5</span></div><div class="slot"><span class="fill" data-step="2">5</span></div>
<div>110 – 119</div><div class="slot"><span class="fill" data-step="2">114.5</span></div><div class="slot"><span class="fill" data-step="2">6</span></div>
<div>120 – 129</div><div class="slot"><span class="fill" data-step="2">124.5</span></div><div class="slot"><span class="fill" data-step="2">4</span></div>
<div>130 – 139</div><div class="slot"><span class="fill" data-step="2">134.5</span></div><div class="slot"><span class="fill" data-step="2">2</span></div>
</div>`,
  steps: [
    { part: "(a)", tex: [
      "\\text{Class width} = 15",
      "\\text{Class mark} = \\dfrac{90 + 104}{2} = 97",
      "\\text{Class mark} = \\dfrac{105 + 119}{2} = 112",
      "\\text{Class mark} = \\dfrac{120 + 134}{2} = 127",
      "\\text{Number of students} = 5,\\; 9,\\; 6"
    ]},
    { part: "(b)", gap: true, tex: [
      "\\text{Class width} = 10",
      "\\text{Class mark} = \\dfrac{90 + 99}{2} = 94.5",
      "\\text{Class mark} = \\dfrac{100 + 109}{2} = 104.5",
      "\\text{Class mark} = \\dfrac{110 + 119}{2} = 114.5",
      "\\text{Class mark} = \\dfrac{120 + 129}{2} = 124.5",
      "\\text{Class mark} = \\dfrac{130 + 139}{2} = 134.5",
      "\\text{Number of students} = 3,\\; 5,\\; 6,\\; 4,\\; 2"
    ]},
    { part: "(c)", gap: true, ans: true, html: `<p>Belinda’s classes are equal and narrower, so her histogram keeps more of the shape. Draw both histograms on the grid in the notes.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "Long question 6    apples",
  fig: "figures/apples.png?v=4",
  side: "read",
  top: `<p>6. The polygon shows the weights of the apples.</p>
<p>(a) Complete the table.</p>
<div class="grid" style="grid-template-columns:1.3fr .7fr">
<div class="th">Weight (g)</div><div class="th">Frequency</div>
<div>91 – 100</div><div class="slot"><span class="fill" data-step="1">5</span></div>
<div>101 – 110</div><div class="slot"><span class="fill" data-step="1">15</span></div>
<div>111 – 120</div><div class="slot"><span class="fill" data-step="1">23</span></div>
<div>121 – 130</div><div class="slot"><span class="fill" data-step="1">32</span></div>
<div>131 – 140</div><div class="slot"><span class="fill" data-step="1">27</span></div>
<div>141 – 150</div><div class="slot"><span class="fill" data-step="1">8</span></div>
</div>
<p>(b) He buys every apple for $1, then sells by size.</p>
<div class="grid" style="grid-template-columns:.62fr 1.7fr .55fr">
<div class="th">Size</div><div class="th">Weight</div><div class="th">Price</div>
<div>Small</div><div style="color:#d00000">Below 120.5 g</div><div>$2</div>
<div>Medium</div><div><span style="color:#d00000">120.5 g</span> to below <span style="color:#1565c0">140.5 g</span></div><div>$2.5</div>
<div>Large</div><div style="color:#1565c0">140.5 g or above</div><div>$3</div>
</div>
<p>(i) How many small, medium and large apples are there?</p>
<p>(ii) He sells 30 small, 50 medium and 5 large. The rest are thrown away. Can he make a profit?</p>`,
  steps: [
    { part: "(a)", ans: true, html: `<p>Read each class mark up to the polygon, then across to the frequency.</p>`,
      marks: [
        { t: "line", x1: 17.0, y1: 71.15, x2: 35.38, y2: 71.15, c: "#c47d00" },
        { t: "line", x1: 35.38, y1: 71.15, x2: 35.38, y2: 82.6, c: "#c47d00" },
        { t: "line", x1: 17.0, y1: 53.29, x2: 43.79, y2: 53.29, c: "#c47d00" },
        { t: "line", x1: 43.79, y1: 53.29, x2: 43.79, y2: 82.6, c: "#c47d00" },
        { t: "line", x1: 17.0, y1: 38.71, x2: 52.20, y2: 38.71, c: "#c47d00" },
        { t: "line", x1: 52.20, y1: 38.71, x2: 52.20, y2: 82.6, c: "#c47d00" },
        { t: "line", x1: 17.0, y1: 22.90, x2: 60.61, y2: 22.90, c: "#c47d00" },
        { t: "line", x1: 60.61, y1: 22.90, x2: 60.61, y2: 82.6, c: "#c47d00" },
        { t: "line", x1: 17.0, y1: 31.83, x2: 69.02, y2: 31.83, c: "#c47d00" },
        { t: "line", x1: 69.02, y1: 31.83, x2: 69.02, y2: 82.6, c: "#c47d00" },
        { t: "line", x1: 17.0, y1: 67.97, x2: 78.01, y2: 67.97, c: "#c47d00" },
        { t: "line", x1: 78.01, y1: 67.97, x2: 78.01, y2: 82.6, c: "#c47d00" },
        { t: "lab", x: 17.0, y: 38.71, tx: "23", c: "#c47d00", place: "left" },
        { t: "lab", x: 17.0, y: 22.90, tx: "32", c: "#c47d00", place: "left" },
        { t: "lab", x: 17.0, y: 31.83, tx: "27", c: "#c47d00", place: "left" },
        { t: "lab", x: 17.0, y: 67.97, tx: "8", c: "#c47d00", place: "left" }
      ] },
    { part: "(b)(i)", gap: true, color: "#d00000", tex: "\\text{Small} = 5 + 15 + 23 = 43",
      marks: [{ t: "line", x1: 56.41, y1: 18, x2: 56.41, y2: 82.6, c: "#d00000" },
              { t: "lab", x: 56.41, y: 82.6, tx: "120.5", c: "#d00000", place: "above" }] },
    { part: "(b)(i)", ans: true, color: "#1c1917", html: `<p><span class="math" data-tex="\\text{Medium} = 32 + 27 = 59"></span>, <span class="math" style="color:#1565c0" data-tex="\\text{Large} = 8"></span></p>`,
      marks: [{ t: "line", x1: 73.52, y1: 18, x2: 73.52, y2: 82.6, c: "#1565c0" },
              { t: "lab", x: 73.52, y: 82.6, tx: "140.5", c: "#1565c0", place: "above" }] },
    { part: "(b)(ii)", gap: true, tex: "\\text{Cost} = 110 \\times 1 = 110" },
    { part: "(b)(ii)", tex: "\\text{Revenue} = 30\\times 2 + 50\\times 2.5 + 5\\times 3 = 200" },
    { part: "(b)(ii)", ans: true, tex: "\\text{Profit} = 200 - 110 = 90 > 0" },
  ]},

{ book: "JM18 Statistics", part: "Histogram and frequency polygon", mode: "teach", title: "Long question 7    runners",
  fig: "figures/runners.png",
  side: "read",
  top: `<p>7. The polygons show the distances run before and after training. The first class mark is 7.95 km and its boundaries are 7.45–8.45 km. A student claims that at least 16 runners have improved. Do you agree?</p>`,
  steps: [
    { html: `<p class="cap">Read from the graph</p>
<div class="grid" style="grid-template-columns:minmax(5.2em,.8fr) repeat(6,1fr)">
<div class="th">Mark (km)</div><div>7.95</div><div>8.95</div><div>9.95</div><div>10.95</div><div>11.95</div><div>12.95</div>
<div class="th">Before</div><div class="got">7</div><div class="got">10</div><div class="got">14</div><div class="got">6</div><div class="got">3</div><div class="got">0</div>
<div class="th">After</div><div class="got">0</div><div class="got">9</div><div class="got">6</div><div class="got">11</div><div class="got">9</div><div class="got">5</div>
</div>` },
    { color: "#d00000", html: `<p>At least 10.45 km means the classes with lower boundary 10.45 km or above: marks 10.95, 11.95 and 12.95.</p>`,
      marks: [{ t: "line", x1: 57.62, y1: 8, x2: 57.62, y2: 76.8, c: "#d00000" },
              { t: "lab", x: 57.62, y: 76.8, tx: "10.45", c: "#d00000", place: "above" },
              { t: "line", x1: 11.2, y1: 49.32, x2: 62.52, y2: 49.32, c: "#0b7a32" },
              { t: "line", x1: 11.2, y1: 62.57, x2: 72.33, y2: 62.57, c: "#0b7a32" },
              { t: "line", x1: 11.2, y1: 27.68, x2: 62.52, y2: 27.68, c: "#1565c0" },
              { t: "line", x1: 11.2, y1: 36.06, x2: 72.33, y2: 36.06, c: "#1565c0" },
              { t: "line", x1: 11.2, y1: 52.63, x2: 82.14, y2: 52.63, c: "#1565c0" },
              { t: "lab", x: 11.2, y: 49.32, tx: "6", c: "#0b7a32", place: "left" },
              { t: "lab", x: 11.2, y: 62.57, tx: "3", c: "#0b7a32", place: "left" },
              { t: "lab", x: 11.2, y: 27.68, tx: "11", c: "#1565c0", place: "left" },
              { t: "lab", x: 11.2, y: 36.06, tx: "9", c: "#1565c0", place: "left" }] },
    { color: "#0b7a32", tex: "\\text{Before: } 6 + 3 + 0 = 9" },
    { color: "#1565c0", tex: "\\text{After: } 11 + 9 + 5 = 25" },
    { color: "#d00000", tex: "\\text{Difference} = 25 - 9 = 16" },
    { ans: true, html: `<p>At least 16 runners improved. The claim is agreed.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Cumulative frequency", mode: "teach", title: "Cumulative frequency polygon",
  fig: "figures/cum_eg.png?v=3",
  side: "read",
  top: `<p class="h" style="color:#c00000;text-decoration:none;background:#f8e0e0;display:inline-block;padding:2px 8px">Cumulative frequency polygon</p>
<p>Example. Ages of 50 teachers.</p>
<div class="grid" style="grid-template-columns:1fr 1fr">
<div class="th">Age</div><div class="th">Frequency</div>
<div>20 – 24</div><div>2</div>
<div>25 – 29</div><div>9</div>
<div>30 – 34</div><div>18</div>
<div>35 – 39</div><div>11</div>
<div>40 – 44</div><div>6</div>
<div>45 – 49</div><div>4</div>
</div>
<div class="grid" style="grid-template-columns:1.15fr .85fr">
<div class="th">Age less than</div><div class="th">Cumulative frequency</div>
<div>19.5</div><div>0</div>
<div>24.5</div><div>2</div>
<div>29.5</div><div>11</div>
<div>34.5</div><div>29</div>
<div>39.5</div><div>40</div>
<div>44.5</div><div>46</div>
<div>49.5</div><div>50</div>
</div>`,
  steps: [
    { html: `<p>Plot cumulative frequency against the upper class boundary. The last point is (49.5, 50).</p>`,
      marks: [
        { t: "line", x1: 11.4, y1: 15.97, x2: 81.71, y2: 15.97, c: "#c47d00" },
        { t: "line", x1: 81.71, y1: 15.97, x2: 81.71, y2: 84.6, c: "#c47d00" }
      ] }
  ]},

{ book: "JM18 Statistics", part: "Cumulative frequency", mode: "teach", title: "MC 1    ages of staff",
  top: `<p>1. Ages of the staff.</p>
<div class="grid" style="grid-template-columns:repeat(6,1fr)">
<div class="th">Age</div><div>16 – 20</div><div>21 – 25</div><div>26 – 30</div><div>31 – 35</div><div>36 – 40</div>
<div class="th">Frequency</div><div>1</div><div>10</div><div>12</div><div>5</div><div>2</div>
</div>
<div class="grid" style="grid-template-columns:repeat(7,1fr)">
<div class="th">Age less than</div><div>15.5</div><div>20.5</div><div>25.5</div><div>30.5</div><div>35.5</div><div>40.5</div>
<div class="th">Cumulative frequency</div><div>0</div><div>1</div><div>11</div><div class="slot"><span class="ph">x</span><span class="fill" data-step="1">23</span></div><div>28</div><div class="slot"><span class="ph">y</span><span class="fill" data-step="2">30</span></div>
</div>`,
  steps: [
    { tex: "x = 11 + 12 = 23" },
    { tex: "y = 28 + 2 = 30" },
    { ans: true, html: `<p>Answer C</p>` }
  ]},

{ book: "JM18 Statistics", part: "Cumulative frequency", mode: "teach", title: "MC 2    chess club",
  top: `<p>2. Ages of the members of a chess club.</p>
<div class="grid" style="grid-template-columns:repeat(6,1fr)">
<div class="th">Age</div><div>21 – 30</div><div>31 – 40</div><div>41 – 50</div><div>51 – 60</div><div>61 – 70</div>
<div class="th">Frequency</div><div>16</div><div class="slot"><span class="ph">x</span><span class="fill" data-step="1">12</span></div><div>12</div><div>7</div><div>3</div>
</div>
<div class="grid" style="grid-template-columns:repeat(7,1fr)">
<div class="th">Age less than</div><div>20.5</div><div>30.5</div><div>40.5</div><div>50.5</div><div>60.5</div><div>70.5</div>
<div class="th">Cumulative frequency</div><div>0</div><div>16</div><div>28</div><div class="slot"><span class="ph">y</span><span class="fill" data-step="2">40</span></div><div>47</div><div>50</div>
</div>`,
  steps: [
    { tex: "x = 28 - 16 = 12" },
    { tex: "y = 28 + 12 = 40" },
    { ans: true, html: `<p>Answer D</p>` }
  ]},

{ book: "JM18 Statistics", part: "Cumulative frequency", mode: "teach", title: "MC 4    which cumulative polygon?",
  fig: "figures/cumpick.png?v=4",
  side: "read",
  top: `<p>4. The frequency polygon shows the heights of a group of students. Which diagram is the matching cumulative frequency polygon?</p>`,
  steps: [
    { html: `<p>The polygon is flat at frequency 5 for the class marks 140, 150 and 160. Each of those classes has frequency 5. The total is 15.</p>` },
    { tex: "\\text{Class boundaries: } 135,\\ 145,\\ 155,\\ 165" },
    { tex: "\\text{Cumulative points: } (135,\\,0),\\ (145,\\,5),\\ (155,\\,10),\\ (165,\\,15)" },
    { color: "#0b7a32", html: `<p>Equal frequencies make a straight line. It starts at 135, not 130, and it ends at 15, not 10.</p>`,
      marks: [{ t: "rect", x: 62, y: 58.5, w: 32.5, h: 34.5, c: "#0b7a32" },
              { t: "line", x1: 65.6, y1: 67.4, x2: 90.4, y2: 67.4, c: "#0b7a32" },
              { t: "line", x1: 90.4, y1: 67.4, x2: 90.4, y2: 90.9, c: "#0b7a32" }] },
    { ans: true, html: `<p>Answer D</p>` }
  ]},

{ book: "JM18 Statistics", part: "Cumulative frequency", mode: "teach", title: "Long question 2    two income groups",
  fig: "figures/income.png",
  side: "read",
  base: [
    { t: "line", x1: 14, y1: 21.0, x2: 87, y2: 21.0, c: "#c47d00" },
    { t: "line", x1: 14, y1: 33.6, x2: 87, y2: 33.6, c: "#c47d00" },
    { t: "line", x1: 87, y1: 21.0, x2: 87, y2: 84.1, c: "#c47d00" }
  ],
  top: `<p>2. The polygons show the monthly incomes of adults in two groups. An adult with monthly income $k or above has a high income. 60% of the adults who have a high income earn <span style="color:#d00000">$60000 or above</span>.</p>
<p>(a) Find the number of adults who have a high income.</p>
<p>(b) Find the number who earn at least <span style="color:#1565c0">$50000</span> a month.</p>
<p>(c) Keith earns $49500. Does he have a high income?</p>`,
  steps: [
    { part: "(a)", color: "#d00000", html: `<p>Read the red line, $60000.</p>`,
      marks: [{ t: "line", x1: 76.7, y1: 8.3, x2: 76.7, y2: 84, c: "#d00000" },
              { t: "line", x1: 14, y1: 28.5, x2: 76.7, y2: 28.5, c: "#d00000" },
              { t: "line", x1: 14, y1: 48.7, x2: 76.7, y2: 48.7, c: "#d00000" },
              { t: "lab", x: 14, y: 28.5, tx: "22", c: "#d00000", place: "left" },
              { t: "lab", x: 14, y: 48.7, tx: "14", c: "#d00000", place: "left" }] },
    { part: "(a)", color: "#d00000", tex: "\\text{A: } 25 - 22 = 3, \\qquad \\text{B: } 20 - 14 = 6, \\qquad 3 + 6 = 9" },
    { part: "(a)", color: "#d00000", tex: "n \\times 60\\% = 9" },
    { part: "(a)", ans: true, color: "#d00000", tex: "\\text{Number of adults } n = 9 \\div 60\\% = 15" },
    { part: "(b)", gap: true, color: "#1565c0", html: `<p>Read the blue line, $50000.</p>`,
      marks: [{ t: "line", x1: 66.2, y1: 8.3, x2: 66.2, y2: 84, c: "#1565c0" },
              { t: "line", x1: 14, y1: 41.1, x2: 66.2, y2: 41.1, c: "#1565c0" },
              { t: "line", x1: 14, y1: 53.7, x2: 66.2, y2: 53.7, c: "#1565c0" },
              { t: "lab", x: 14, y: 41.1, tx: "17", c: "#1565c0", place: "left" },
              { t: "lab", x: 14, y: 53.7, tx: "12", c: "#1565c0", place: "left" }] },
    { part: "(b)", ans: true, color: "#1565c0", tex: "\\text{A: } 25 - 17 = 8, \\qquad \\text{B: } 20 - 12 = 8, \\qquad 8 + 8 = 16" },
    { part: "(c)", gap: true, ans: true, html: `<p>$49500 is below $50000, so Keith is not one of those 16 adults. He does not have a high income.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Quartiles", mode: "teach", title: "Position, then read the graph",
  top: `<p class="h" style="color:#c00000;text-decoration:none;background:#f8e0e0;display:inline-block;padding:2px 8px">Quartile, median and percentile</p>
<p>Find the position first. Then read the value from the graph. Do not interpolate.</p>
<div class="grid" style="grid-template-columns:1fr 1fr">
<div class="th">Lower quartile</div><div><span class="math" data-tex="N/4"></span></div>
<div class="th">Median</div><div><span class="math" data-tex="N/2"></span></div>
<div class="th">Upper quartile</div><div><span class="math" data-tex="3N/4"></span></div>
<div class="th">kth percentile</div><div><span class="math" data-tex="k\\% \\text{ of } N"></span></div>
</div>
<p>On the graph: draw across, then read down.</p>
<img src="figures/quart_eg.png?v=3" alt="How to read a cumulative graph" style="max-width:100%;max-height:48vh">`,
  steps: [] },

{ book: "JM18 Statistics", part: "Quartiles", mode: "teach", title: "MC 1    400 m race",
  fig: "figures/race400.png?v=3",
  side: "read",
  base: [
    { t: "line", x1: 22.4, y1: 27.5, x2: 83.3, y2: 27.5, c: "#c47d00" },
    { t: "line", x1: 83.3, y1: 27.5, x2: 83.3, y2: 79.3, c: "#c47d00" }
  ],
  top: `<p>1. The polygon shows the time taken by 40 boys to complete a 400 m race. Find the median.</p>
<div class="opts"><div>A. 60 s</div><div>B. 64 s</div><div>C. 68 s</div><div>D. 72 s</div></div>`,
  steps: [
    { color: "#d00000", tex: "\\text{Median position} = \\dfrac{40}{2} = 20",
      marks: [{ t: "line", x1: 22.4, y1: 53.4, x2: 63.1, y2: 53.4, c: "#d00000" }] },
    { color: "#d00000", html: `<p>Draw across at cumulative frequency 20, then down. The polygon meets 20 at 64 s.</p>`,
      marks: [{ t: "line", x1: 63.1, y1: 53.4, x2: 63.1, y2: 79.3, c: "#d00000" }] },
    { ans: true, color: "#d00000", html: `<p>Median = 64 s. Answer B</p>` }
  ]},

{ book: "JM18 Statistics", part: "Quartiles", mode: "teach", title: "MC 2    travelling to school",
  fig: "figures/schooltrip.png?v=3",
  side: "read",
  base: [
    { t: "line", x1: 19.6, y1: 30.4, x2: 72.5, y2: 30.4, c: "#c47d00" },
    { t: "line", x1: 72.5, y1: 30.4, x2: 72.5, y2: 76, c: "#c47d00" }
  ],
  top: `<p>2. The curve shows the time taken by 80 students to travel to school. Find the lower quartile and the upper quartile.</p>
<div class="opts">
<div>A. 21.5 min and 39.5 min</div>
<div>B. 22.5 min and 38.5 min</div>
<div>C. 30.5 min and 38.5 min</div>
<div>D. 40 min and 60 min</div>
</div>`,
  steps: [
    { color: "#d00000", tex: "\\text{Lower quartile position} = \\dfrac{80}{4} = 20",
      marks: [{ t: "line", x1: 19.6, y1: 64.4, x2: 42.9, y2: 64.4, c: "#d00000" },
              { t: "line", x1: 42.9, y1: 64.4, x2: 42.9, y2: 76, c: "#d00000" },
              { t: "lab", x: 42.9, y: 76, tx: "22.5", c: "#d00000", place: "below" }] },
    { color: "#1565c0", tex: "\\text{Upper quartile position} = \\dfrac{3\\times 80}{4} = 60",
      marks: [{ t: "line", x1: 19.6, y1: 41.6, x2: 60, y2: 41.6, c: "#1565c0" },
              { t: "line", x1: 60, y1: 41.6, x2: 60, y2: 76, c: "#1565c0" },
              { t: "lab", x: 60, y: 76, tx: "38.5", c: "#1565c0", place: "below" }] },
    { html: `<p>Draw across at 20 and at 60, then read down. Do not interpolate.</p>` },
    { ans: true, color: "#1c1917", html: `<p><span class="math" style="color:#d00000" data-tex="22.5\\text{ min}"></span> and <span class="math" style="color:#1565c0" data-tex="38.5\\text{ min}"></span>. <span style="color:#065f46">Answer B</span></p>` }
  ]},

{ book: "JM18 Statistics", part: "Quartiles", mode: "teach", title: "Long question 1    tunnels",
  top: `<p>1. Lengths of 250 tunnels.</p>
<div class="grid cols">
<div class="th">Length (km)</div><div class="th">Frequency</div>
<div>0 – 0.9</div><div>14</div>
<div>1.0 – 1.9</div><div>27</div>
<div>2.0 – 2.9</div><div class="slot"><span class="ph">a</span><span class="fill" data-step="2">23</span></div>
<div>3.0 – 3.9</div><div class="slot"><span class="ph">b</span><span class="fill" data-step="2">61</span></div>
<div>4.0 – 4.9</div><div>50</div>
<div>5.0 – 5.9</div><div>75</div>
</div>
<div class="grid cols">
<div class="th">Length less than (km)</div><div class="th">Cumulative frequency</div>
<div>0.95</div><div>14</div>
<div>1.95</div><div class="slot"><span class="ph">h</span><span class="fill" data-step="1">41</span></div>
<div>2.95</div><div>64</div>
<div>3.95</div><div>125</div>
<div>4.95</div><div class="slot"><span class="ph">k</span><span class="fill" data-step="2">175</span></div>
<div>5.95</div><div>250</div>
</div>
<p>(a) Find the values of h and k.</p>
<p>(b) Find the median length of the tunnels.</p>
<p>(c) Find the 70th percentile of the lengths.</p>`,
  steps: [
    { part: "(a)", tex: "h = 14 + 27 = 41" },
    { part: "(a)", ans: true, tex: ["a = 64 - 41 = 23", "b = 125 - 64 = 61", "k = 250 - 75 = 175"] },
    { part: "(b)", gap: true, tex: "\\text{Median position} = \\dfrac{250}{2} = 125" },
    { part: "(b)", ans: true, html: `<p>125 is the cumulative frequency at 3.95 km, so the median is 3.95 km.</p>` },
    { part: "(c)", gap: true, tex: ["\\text{70th percentile position}",
                                    "= 250 \\times 70\\% = 175"] },
    { part: "(c)", ans: true, html: `<p>175 is the cumulative frequency at 4.95 km, so the 70th percentile is 4.95 km.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Quartiles", mode: "try", title: "Long question 2    javelin",
  top: `<p>2. Javelin results of 60 students.</p>
<div class="grid cols">
<div class="th">Result (m)</div><div class="th">Frequency</div>
<div>10 – 14</div><div>7</div>
<div>15 – 19</div><div>12</div>
<div>20 – 24</div><div class="slot"><span class="ph">a</span><span class="fill" data-step="1">11</span></div>
<div>25 – 29</div><div>16</div>
<div>30 – 34</div><div class="slot"><span class="ph">b</span><span class="fill" data-step="2">14</span></div>
</div>
<div class="grid cols">
<div class="th">Less than (m)</div><div class="th">Cumulative frequency</div>
<div>14.5</div><div>7</div>
<div>19.5</div><div class="slot"><span class="ph">c</span><span class="fill" data-step="2">19</span></div>
<div>24.5</div><div>30</div>
<div>29.5</div><div class="slot"><span class="ph">d</span><span class="fill" data-step="2">46</span></div>
<div>34.5</div><div class="slot"><span class="ph">e</span><span class="fill" data-step="2">60</span></div>
</div>
<p>(a) Find the values of a and b.</p>
<p>(b) Find the median of the results.</p>
<p>(c) Wendy claims that the lower quartile is 19.5 m. Do you agree?</p>`,
  steps: [
    { part: "(a)", tex: "7 + 12 + a = 30 \\quad \\Rightarrow \\quad a = 11" },
    { part: "(a)", ans: true, tex: ["30 + 16 + b = 60 \\quad \\Rightarrow \\quad b = 14", "c = 7 + 12 = 19", "d = 30 + 16 = 46", "e = 46 + 14 = 60"] },
    { part: "(b)", gap: true, tex: "\\text{Median position} = \\dfrac{60}{2} = 30" },
    { part: "(b)", ans: true, html: `<p>30 is the cumulative frequency at 24.5 m, so the median is 24.5 m.</p>` },
    { part: "(c)", gap: true, tex: "\\text{Cumulative frequency at 19.5 m} = 7 + 12 = 19" },
    { part: "(c)", tex: "\\text{Lower quartile position} = \\dfrac{60}{4} = 15" },
    { part: "(c)", ans: true, html: `<p>15 is before 19, so the lower quartile is less than 19.5 m. Wendy is disagreed.</p>` }
  ]},

{ book: "JM18 Statistics", part: "Misleading diagrams", mode: "teach", title: "Read the scale",
  top: `<p class="h" style="color:#c00000;text-decoration:none;background:#f8e0e0;display:inline-block;padding:2px 8px">Misleading diagrams</p>
<p>A diagram can make a small change look large. Read the scale, not the size of the picture.</p>
<img src="figures/mislead_eg.png?v=3" alt="Misleading-diagram examples from the notes" style="max-width:100%;max-height:62vh">`,
  steps: [] },

{ book: "JM18 Statistics", part: "Misleading diagrams", mode: "teach", title: "MC 1    two schools",
  fig: "figures/schools.png?v=4",
  side: "read",
  top: `<p>1. Amy claims that school A has several times as many students as school B. Which of the following can explain why she is misled?</p>
<div class="roman">
<div>I. The vertical axis does not start from zero.</div>
<div>II. The bars do not have the same width.</div>
<div>III. The numbers of students in other schools are not shown.</div>
</div>
<div class="opts"><div>A. I only</div><div>B. III only</div><div>C. I and II only</div><div>D. II and III only</div></div>`,
  steps: [
    { color: "#d00000", html: `<p>The vertical axis starts at 3000, not at 0. The bars look taller than the difference really is. I is a reason.</p>`,
      marks: [{ t: "line", x1: 12.4, y1: 86.9, x2: 98.3, y2: 86.9, c: "#d00000" }] },
    { html: `<p>Count the blocks across each bar. The two bars do not have the same width. II is a reason.</p>` },
    { html: `<p>Leaving out other schools does not make these two bars look unequal. III is not the reason.</p>` },
    { ans: true, html: `<p>Answer C</p>` }
  ]},

{ book: "JM18 Statistics", part: "Misleading diagrams", mode: "teach", title: "Long question 2    visitors",
  fig: "figures/visitors.png",
  side: "read",
  top: `<p>2. Fig. I and Fig. II show the yearly numbers of visitors to cities A and B. The mayor of city B claims that visitors to B increase faster than visitors to A.</p>
<p>(a) On average, find the yearly increase in (i) visitors to city A and (ii) visitors to city B.</p>
<p>(b) Do you agree with the mayor?</p>
<p>(c) Why is the mayor misled?</p>`,
  steps: [
    { part: "(a)(i)", ans: true, color: "#d00000", tex: "\\text{A: } \\dfrac{6.6 - 5.4}{6} = 0.2 \\text{ million per year}",
      marks: [
        { t: "line", x1: 6.80, y1: 32.52, x2: 45.20, y2: 32.52, c: "#d00000", sw: 4 },
        { t: "line", x1: 45.20, y1: 32.52, x2: 45.20, y2: 71.89, c: "#d00000", sw: 4 },
        { t: "lab", x: 6.80, y: 50.68, tx: "5.4", c: "#d00000", place: "left" },
        { t: "lab", x: 6.80, y: 32.52, tx: "6.6", c: "#d00000", place: "left" }
      ] },
    { part: "(a)(ii)", gap: true, ans: true, color: "#1565c0", tex: "\\text{B: } \\dfrac{7.8 - 5.4}{12} = 0.2 \\text{ million per year}",
      marks: [
        { t: "line", x1: 58.16, y1: 14.37, x2: 96.56, y2: 14.37, c: "#1565c0", sw: 4 },
        { t: "line", x1: 96.56, y1: 14.37, x2: 96.56, y2: 71.89, c: "#1565c0", sw: 4 },
        { t: "lab", x: 58.16, y: 50.68, tx: "5.4", c: "#1565c0", place: "left" },
        { t: "lab", x: 58.16, y: 14.37, tx: "7.8", c: "#1565c0", place: "left" }
      ] },
    { part: "(b)", gap: true, ans: true, html: `<p>The average yearly increases are equal. The mayor is disagreed.</p>` },
    { part: "(c)", gap: true, ans: true, html: `<p>The horizontal scales are different: 6 years in Fig. I and 12 years in Fig. II. The same increase looks steeper on the shorter axis.</p>` }
  ]}
];
