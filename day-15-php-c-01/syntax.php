<?php
//    echo "<thml>";
//        echo "<head>";
//            echo "<title>";
//            echo "HOME";
//            echo "</title>";
//        echo "</head>";
//        echo "<body>";
//            echo "<h1>This is a heading.</h1>";
//            echo "<p>This is a paragraph.</p>";
//        echo "</body>";
//    echo "</html>";
?>

<!--<html>-->
<!--    <head>-->
<!--        <title>--><?php //echo "HOME"; ?><!--</title>-->
<!--    </head>-->
<!--    <body>-->
<!--        <h1>--><?php //echo "This is a heading."; ?><!--</h1>-->
<!--        <p>--><?php //echo "This is a paragraph."; ?><!--</p>-->
<!--        <input type="text" value="--><?php //echo "MD. RUHUL AMIN SHAH"; ?><!--">-->
<!--    </body>-->
<!--</html>-->


<?php
    // Variable Structural 3 major rules
    /*
        * Start with $
        * a-z, A-Z, 0-9, _
        * No number in first.
     */
    $name;
    $NAME;
    $Name;
    $NaMe;
    $_8name;
    $name8;

    // Variable Standard  3 major rules
    /*
        * small letter;
        * meaning full
        * readable.
     */

    $firstName = "Ruhul";
    $lastName = "Amin";
    echo $firstName.' '. $lastName;
    echo "<br/>";

// Operator
/*
    * Arithmatic Operator
        // Binary (+, -, *, /, %)
        // unary (++, --, -)
    * Assignment Operator
        // =, +=, -=, *=, /=, %=, .=
    * Conditional Operator
        // >, >=, <=, ==, !=, ===, !==
    * Logical Operator
        // &&, ||, !
 */

    $x = 10;
    $y = 20;
    echo $x+$y;
    echo "<br/>";
    echo $x-$y;
    echo "<br/>";


    echo ++$x; //11
    echo "<br/>";
    echo $x; //11
    echo "<br/>";

    echo $x+=$y; //30
    echo "<br/>";
    echo $x-=$y; //10
    echo "<br/>";
    echo $x.=$y;
    echo "<br/>";





?>