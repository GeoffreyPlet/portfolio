<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
    <title>Geoffrey Plet - Développeur freelance, Amiens.</title>
    <meta name="description" content="Développement de site web - Front & Back.">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="keywords" content="site internet, web, application web, développement, hébergement web, développement web, symfony, wordpress, magento, prestashop, intégration web, freelance">
    <meta name="author" content="Geoffrey Plet">
    <meta property="og:site_name" content="Geoffrey Plet">
    <meta property="og:title" content="Geoffrey Plet - Développeur freelance, Amiens.">
    <meta property="og:description" content="Développement de site web - Front & Back.">
    <meta property="og:image" content="./img/back.jpg">
    <meta property="og:url" content="https://geoffreyplet.com/">
    <link rel="icon" type="image/x-icon" href="./img/back.jpg">
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

    <?php
        require('../layer/header.php');
    ?>

    <!-- DEBUT MAIN  -->
        <main class="pt-5 d-flex" style="height: 834px;">
            <div class="container pt-5 m-auto" id="demos">
                <div class="row flex-column">
                    <h2 class="text-center">
                        Objectif
                    </h2>
                    <p class="text-center">Intégration HTML/CSS avec bootstrap, Création de la page accueil.
                        <br>
                        <span style="opacity:0.8;">PHP non intègré dans cette maquette</span>
                    </p>
                </div>
                <div class="row">
                    <ul class="list-group d-flex flex-row justify-content-center flex-wrap" style="width: 100%; text-align: end;">
                        <li class="list-item text-uppercase">
                            <div class="cadre-projets mt-1">
                                css
                            </div>
                            
                        </li>
                        <li class="list-item text-uppercase">
                            <div class="cadre-projets mt-1">
                                html
                            </div>
                        </li>
                        <li class="list-item text-uppercase">
                            <div class="cadre-projets mt-1">
                                bootstrap
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-lg-4 col-md-6">
                        <a href="maquette/index.html" target="_blank">
                            <div class="cadre projet-maquette front-1">

                            </div>
                            <p class="text-center">
                                Front
                            </p>
                        </a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <a href="https://github.com/GeoffreyPlet/portfolio/tree/master/Portfolio/projets/maquette" class="my-span-color" target="_blank">GitHub lien</a>
                </div>
            </div>
        </main>
    <!-- FIN MAIN  -->

    <?php
        require('../layer/footer.php');
    ?>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>