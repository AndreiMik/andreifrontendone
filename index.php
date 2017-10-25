<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
        <link href="../css/style.css" rel= "stylesheet" type="text/css"/>
        <!--      <link href="css/m_style.css" rel= "stylesheet" type="text/css"/>-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="js/slider.js"></script>
    </head>
    <body>
        <div class="wrapper">
            <div class="header" id="header">
                <?php
                require_once 'blocks/header.php';
                ?>
            </div>
            <div class="content">
                <?php
                require_once 'blocks/content.php';
                ?>
            </div>
            <div class="footer">
                <?php
                require_once 'blocks/footer.php';
                ?>
            </div>
        </div>

    </body>
</html>