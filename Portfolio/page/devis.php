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
        <main class="py-5">
            <div class="container mt-5" id="page-devis">
                <h2>Faire votre demande de devis gratuit</h2>
                <form method="POST">

                    <!-- DEBUT ROW 2 INPUT -->
                        <div class="form-row">

                            <!-- DEBUT INPUT NOM -->
                                <div class="col">
                                    <label for="name">Nom</label>
                                    <input class="form-control" type="text" placeholder="Saisir votre nom" id="name" name="name">
                                </div>
                            <!-- FIN INPUT NOM -->
                            
                            <!-- DEBUT INPUT SOCIETE -->
                                <div class="col">
                                    <label for="societe">Société</label>
                                    <input class="form-control" type="text" placeholder="Saisir le nom de société" id="societe" name="societe">
                                </div>
                            <!-- FIN INPUT SOCIETE -->

                        </div>
                    <!-- FIN ROW 2 INPUT -->

                    <!-- DEBUT ROW 2 INPUT -->
                        <div class="form-row">

                            <!-- DEBUT INPUT E-MAIL -->
                                <div class="col">
                                    <label for="mail">E-mail</label>
                                    <input class="form-control" type="text" placeholder="Saisir votre e-mail" id="mail" name="mail">
                                </div>
                            <!-- FIN INPUT E-MAIL -->

                            <!-- DEBUT INPUT TELEPHONE -->
                                <div class="col">
                                    <label for="telephone">Téléphone</label>
                                    <input class="form-control" type="text" placeholder="Saisir votre numéro de téléphone" id="telephone" name="phone">
                                </div>
                            <!-- FIN INPUT TELEPHONE -->

                        </div>
                    <!-- FIN ROW 2 INPUT -->

                    <!-- DEBUT ROW 2 SELECT -->
                        <div class="form-row">

                            <!-- DEBUT SELECT TECHONOLOGIE -->
                            <div class="col">
                                <label for="technologie">Technologie</label>
                                <select name="techno" id="technologie" class="form-control">
                                    <option selected>
                                        A définir
                                    </option>
                                    <option >
                                        Vuejs
                                    </option>
                                    <option >
                                        Symfony
                                    </option>
                                    <option >
                                        Wordpress
                                    </option>
                                </select>
                            </div>
                            <!-- FIN SELECT TECHONOLOGIE -->

                             <!-- DEBUT SELECT BUDGET -->
                            <div class="col">
                                <label for="budget">Budget</label>
                                <select name="budget" id="budget" class="form-control">
                                    <option  selected>
                                        0 à 500 euros
                                    </option>
                                    <option >
                                        500 à 1000 euros
                                    </option>
                                    <option >
                                        1000 à 2000 euros
                                    </option>
                                    <option >
                                        2000 à 5000 euros
                                    </option>
                                    <option >
                                    Plus de 5000 euros
                                    </option>
                                </select>
                            </div>
                            <!-- FIN SELECT BUDGET -->
                        </div>
                    <!-- FIN ROW 2 SELECT -->

                    <div class="form-row">
                        <div class="col">
                            <h3>Type</h3>
                            <div class="d-flex flex-column">

                                <div class="d-flex">
                                    <input type="radio" name="type" value="E-commerce">
                                    <label class="pl-2" for="">E-commerce</label>
                                </div>
                                <div class="d-flex">
                                    <input type="radio" name="type" value="vitrine">
                                    <label class="pl-2" for="">Site vitrine</label>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                           <h3>Design</h3>
                           <div class="d-flex flex-column">
                                <div class="d-flex">
                                    <input type="radio" name="design" value="thème">
                                    <label class="pl-2" for="">Thème</label>
                                </div>
                                <div class="d-flex">
                                    <input type="radio" name="design" value="refonte">
                                    <label class="pl-2" for="">Refonte grâce au design existant</label>
                                </div>
                                <div class="d-flex">
                                    <input type="radio" name="design" value="délà-réalisé">
                                    <label class="pl-2" for="">Déjà réalisé</label>
                                </div>
                                <div class="d-flex">
                                    <input type="radio" name="design" value="sur-mesure">
                                    <label class="pl-2" for="">Sur mesure</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <h3 class="m-0">Site administrable</h3>
                            <p>Bénéficiez d'une partie d'administrable dans votre site, mettez vous même le contenue à jour.</p>
                            <div class="d-flex flex-column">

                                <div class="d-flex">
                                    <input type="radio" name="back" value="Back-office">
                                    <label class="pl-2" for="">Avec</label>
                                </div>
                                <div class="d-flex">
                                    <input type="radio" name="back" value="Sans-back-office">
                                    <label class="pl-2" for="">Sans</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <button class="btn my-btn-color"><span style="color: #000;">Envoyer</span> </button>
                    </div>
                </form>
            </div>
        </main>
    <!-- FIN MAIN  -->

    <?php
        require('../layer/footer.php');
    ?>

    <?php
            if (isset($_POST) && !empty($_POST)){
            

 

                // Test fonction mail();

                

                // *** A configurer

                

                $to    = "geoffrey.plet.developpeur@gmail.com";

                

                // adresse MAIL OVH liée à l’hébergement.

                $from  = $_POST["mail"];

                

                ini_set("SMTP", "smtp.geoffreyplet.com");   // Pour les hébergements mutualisés Windows de OVH

                

                // *** Laisser tel quel

                

                $JOUR  = date("Y-m-d");

                $HEURE = date("H:i");

                

                $Subject = ''.$_POST['back'].' - '.$JOUR.' '.$HEURE.'';

                

                $mail_Data = "";

                $mail_Data .= "<html> \n";

                $mail_Data .= "<head> \n";

                $mail_Data .= "<title> Demande de projet </title> \n";

                $mail_Data .= "</head> \n";

                $mail_Data .= "<body> \n";

                

                $mail_Data .= ''.$_POST['nom'].', '.$_POST['societe'].': <b>'.$Subject.'</b> <br>';

                $mail_Data .= "<br> \n";

                $mail_Data .= 'Un client vous a contacté pour un projet de technologie : '.$_POST["techno"].'<br>';
                $mail_Data .= 'Avec un budget de : '.$_POST["budget"].'<br>';
                $mail_Data .= 'De type : '.$_POST["type"].'<br>';
                $mail_Data .= 'De design : '.$_POST["design"].'<br>';

                $mail_Data .= "</body> \n";

                $mail_Data .= "</HTML> \n";

                

                $headers  = "MIME-Version: 1.0 \n";

                $headers .= "Content-type: text/html; charset=iso-8859-1 \n";

                $headers .= "From: $from  \n";
                $headers .= "Disposition-Notification-To: $from  \n";

                

                // Message de Priorité haute

                // -------------------------

                $headers .= "X-Priority: 1  \n";

                $headers .= "X-MSMail-Priority: High \n";

                

                $CR_Mail = TRUE;

                

                $CR_Mail = @mail ($to, $Subject, $mail_Data, $headers);

            } 

        ?>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>