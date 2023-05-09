<?php
    $global_variable = "MSD700_bucket_MCLA007A_00_2.glb";
    // if (isset($_GET['value'])) {
    //     $value = urldecode($_GET['value']);
    //     $global_variable = $value;
    // }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Smart Presentation</title>
        <link rel="icon" type="image/x-icon" href="assets/logo.png">
        <meta charset="UTF-8">
        <script type="importmap">
            {
                "imports": {
                "three": "https://unpkg.com/three@0.139.2/build/three.module.js"
                }
            }
        </script>
        <link rel="stylesheet" href="style.css" >

    </head>
    <body>
            <div class="details-page">
            <canvas id="myCanvas">    </canvas>

            <div class="container-top-left">
                <button class="menu-container" onClick="location.href='detail'">
                    <img src="./assets/Menu.png">
                </button>
            </div>

            <div class="item-name-container">
                <p id="myText" class="text-file-name"><?php echo $global_variable; ?></p>
            </div>
        </div>

        <script type="module" src="script.js"> </script>
    </body>
</html>

