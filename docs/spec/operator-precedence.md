# Operator Precedence

This chapter describes the order in which the grammar should be parsed. The following table is ordered from highest (14) to lowest (1) precedence.

<table>
  <tr>
    <td>Precedence</td>
    <td>Type</td>
  </tr>

  <tr>
    <td rowspan="2">14</td>
    <td><a href="/spec/grammar/syntactic/declarations/">Declarations</a></td>
  </tr>
  <tr><td><a href="/spec/grammar/syntactic/statements/">Statements</a></td></tr>

  <tr>
    <td>13</td>
    <td><a href="/spec/grammar/syntactic/expressions/wrapped-expression.html">Wrapped Expression</a></td>
  </tr>

  <tr>
  <td rowspan="4">12</td>
    <td><a href="/spec/grammar/syntactic/expressions/member-expression.html">Member Expression</a></td>
  </tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/index-expression.html">Index Expression</a></td></tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/new-expression.html">New Expression</a></td></tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/call-expression.html">Call Expression</a></td></tr>

  <tr>
    <td rowspan="2">11</td>
    <td><a href="/spec/grammar/syntactic/expressions/unary-expression.html">Unary Expression</a></td>
  </tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/async-expression.html">Async Expression</a></td></tr>

  <tr>
    <td>10</td>
    <td>Exponentiation</td>
  </tr>

  <tr>
    <td rowspan="3">9</td>
    <td>Multiplication</td>
  </tr>
  <tr><td>Division</td></tr>
  <tr><td>Remainder</td></tr>

  <tr>
    <td rowspan="2">8</td>
    <td>Addition</td>
  </tr>
  <tr><td>Subtraction</td></tr>

  <tr>
    <td rowspan="3">7</td>
    <td>is less than</td>
  </tr>
  <tr><td>is greater than</td></tr>
  <tr><td><a href="/spec/grammar/syntactic/expressions/instanceof-expression.html">Instanceof Expression</a></td></tr>

  <tr>
    <td rowspan="2">6</td>
    <td>is</td>
  </tr>
  <tr><td>is not</td></tr>

  <tr>
    <td>5</td>
    <td>and</td>
  </tr>

  <tr>
    <td>4</td>
    <td>or</td>
  </tr>

  <tr>
    <td>3</td>
    <td><a href="/spec/grammar/syntactic/expressions/conditional-expression.html">Conditional Expression</a></td>
  </tr>

  <tr>
    <td>2</td>
    <td><a href="/spec/grammar/syntactic/declarations/variable-declaration.html">Variable Declaration</a></td>
  </tr>

  <tr>
    <td>1</td>
    <td>Comma separator</td>
  </tr>
</table>
