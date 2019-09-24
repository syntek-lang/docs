# Operator Precedence

This chapter describes the order in which the grammar should be parsed. The following table is ordered from highest (11) to lowest (1) precedence.

<table>
  <tr>
    <td>Precedence</td>
    <td>Type</td>
    <td>Associativity</td>
  </tr>

  <tr>
    <td>11</td>
    <td><a href="/spec/grammar/syntactic/expressions/wrapped-expression.html">Wrapped Expression</a></td>
    <td />
  </tr>

  <tr>
    <td rowspan="4">10</td>
    <td><a href="/spec/grammar/syntactic/expressions/member-expression.html">Member Expression</a></td>
    <td rowspan="3">left to right</td>
  </tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/index-expression.html">Index Expression</a></td></tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/call-expression.html">Call Expression</a></td></tr>
  <tr>
    <td><a href="/spec/grammar/syntactic/expressions/new-expression.html">New Expression</a></td>
    <td />
  </tr>

  <tr>
    <td rowspan="2">9</td>
    <td><a href="/spec/grammar/syntactic/expressions/unary-expression.html">Unary Expression</a></td>
    <td rowspan="2">right to left</td>
  </tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/async-expression.html">Async Expression</a></td></tr>

  <tr>
    <td>8</td>
    <td>Exponentiation</td>
    <td>right to left</td>
  </tr>

  <tr>
    <td rowspan="3">7</td>
    <td>Multiplication</td>
    <td rowspan="3">left to right</td>
  </tr>
  <tr><td>Division</td></tr>
  <tr><td>Remainder</td></tr>

  <tr>
    <td rowspan="2">6</td>
    <td>Addition</td>
    <td rowspan="2">left to right</td>
  </tr>
  <tr><td>Subtraction</td></tr>

  <tr>
    <td rowspan="5">5</td>
    <td>Less Than</td>
    <td rowspan="5">left to right</td>
  </tr>
  <tr><td>Greater Than</td></tr>
  <tr><td>Less Than Or Equal</td></tr>
  <tr><td>Greater Than Or Equal</td></tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/instanceof-expression.html">Instanceof Expression</a></td></tr>

  <tr>
    <td rowspan="2">4</td>
    <td>Equality</td>
    <td rowspan="2">left to right</td>
  </tr>
  <tr><td>Inequality</td></tr>

  <tr>
    <td>3</td>
    <td>and</td>
    <td>left to right</td>
  </tr>

  <tr>
    <td>2</td>
    <td>or</td>
    <td>left to right</td>
  </tr>

  <tr>
    <td>1</td>
    <td><a href="/spec/grammar/syntactic/expressions/assignment-expression.html">Assignment Expression</a></td>
    <td />
  </tr>
</table>
